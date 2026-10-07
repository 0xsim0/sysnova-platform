import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { verifyOtpToken } from "@/lib/otp";
import { ApiErrors } from "@/lib/apiErrors";
import { getAttemptCount, incrementAttempts, clearAttempts, MAX_ATTEMPTS, checkContactIpLimit } from "@/lib/rateLimit";
import { isAllowedOrigin, getClientIp } from "@/lib/apiUtils";
import { isEmailConfigured } from "@/lib/mailTransport";

export async function POST(req: NextRequest) {
  if (!isAllowedOrigin(req.headers.get("origin"))) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  try {
    const ip = getClientIp(req);
    if (!(await checkContactIpLimit(ip))) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 });
    }
    const body = await req.json();
    const { name, email, company, message, otpCode, otpToken } = body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
      otpCode?: string;
      otpToken?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (name.trim().length > 200) {
      return NextResponse.json({ error: "Name is too long." }, { status: 400 });
    }

    if (company && company.trim().length > 200) {
      return NextResponse.json({ error: "Company name is too long." }, { status: 400 });
    }

    if (message.trim().length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)." },
        { status: 400 }
      );
    }

    if (email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!isEmailConfigured()) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 }
      );
    }

    if (!otpCode?.trim() || !otpToken?.trim()) {
      return NextResponse.json(
        { error: "Verification code is required." },
        { status: 400 }
      );
    }

    // Token shape must match createOtpToken() output (base64url of 32 bytes = 43 chars)
    // and the inner verifyOtpToken regex in lib/otp.ts. Keep both bounds in sync.
    if (!/^[A-Za-z0-9_-]{32,128}$/.test(otpToken)) {
      return NextResponse.json({ error: "Invalid verification token." }, { status: 400 });
    }

    if (!/^\d{6}$/.test(otpCode.trim())) {
      return NextResponse.json({ error: "Invalid verification code." }, { status: 400 });
    }

    const tokenId = otpToken.slice(-16);
    const attempts = await getAttemptCount(tokenId);
    if (attempts >= MAX_ATTEMPTS) {
      return NextResponse.json(
        { error: "Too many attempts. Please request a new code." },
        { status: 429 }
      );
    }

    if (!(await verifyOtpToken(otpToken, email.trim().toLowerCase(), otpCode.trim()))) {
      await incrementAttempts(tokenId);
      return NextResponse.json({ error: ApiErrors.INVALID_OTP }, { status: 400 });
    }

    await clearAttempts(tokenId);
    const trimmedCompany = company?.trim();
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      ...(trimmedCompany !== undefined && { company: trimmedCompany }),
      message: message.trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
