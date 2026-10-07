import { NextRequest, NextResponse } from "next/server";
import { generateOtp, createOtpToken } from "@/lib/otp";
import { sendOtpEmail } from "@/lib/email";
import { checkAndSetCooldown, checkIpLimit } from "@/lib/rateLimit";
import { isAllowedOrigin, getClientIp } from "@/lib/apiUtils";
import { isEmailConfigured } from "@/lib/mailTransport";

export async function POST(req: NextRequest) {
  if (!isAllowedOrigin(req.headers.get("origin"))) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { email } = body as { email?: string };

    if (!email?.trim() || email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const ip = getClientIp(req);
    if (!(await checkIpLimit(ip))) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (!(await checkAndSetCooldown(email.trim().toLowerCase()))) {
      return NextResponse.json(
        { error: "Please wait 60 seconds before requesting a new code." },
        { status: 429 }
      );
    }

    if (!isEmailConfigured()) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
    }

    const code = generateOtp();
    await sendOtpEmail(email.trim().toLowerCase(), code);
    const token = await createOtpToken(email.trim().toLowerCase(), code);

    return NextResponse.json({ token }, { status: 200 });
  } catch (err) {
    console.error("[contact/send-otp]", err);
    return NextResponse.json({ error: "Failed to send verification code." }, { status: 500 });
  }
}
