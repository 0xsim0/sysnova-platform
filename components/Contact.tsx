"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, Building2, User, MessageSquare, KeyRound, MapPin, ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";
import { ApiErrors } from "@/lib/apiErrors";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";
type Step = "form" | "otp";

import { CONTACT_EMAIL, BUSINESS_ADDRESS, GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL } from "@/lib/config";

export default function Contact() {
  const ref = useReveal();
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({
    name: "", email: "", company: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState<Step>("form");
  const [otpCode, setOtpCode] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [otpError, setOtpError] = useState("");

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim())    errs.name    = t.contact.validation.nameRequired;
    if (!form.email.trim())   errs.email   = t.contact.validation.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errs.email = t.contact.validation.emailInvalid;
    if (!form.message.trim()) errs.message = t.contact.validation.messageRequired;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
    if (status === "error") setStatus("idle");
  };

  const sendOtp = async (): Promise<string | null> => {
    const res = await fetch("/api/contact/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email }),
    });
    if (!res.ok) return null;
    const data = await res.json() as { token: string };
    return data.token;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const token = await sendOtp();
      if (!token) throw new Error("send-otp failed");
      setOtpToken(token);
      setOtpCode("");
      setOtpError("");
      setStep("otp");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  const handleVerify = async () => {
    if (!otpCode.trim()) {
      setOtpError(t.contact.validation.otpRequired);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, otpCode, otpToken }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
        setStep("form");
        setOtpCode("");
        setOtpToken("");
      } else {
        const data = await res.json() as { error?: string };
        if (data.error === ApiErrors.INVALID_OTP) {
          setOtpError(t.contact.validation.otpInvalid);
        } else {
          setOtpError(t.contact.validation.sendFailed);
        }
        setStatus("idle");
      }
    } catch {
      setOtpError(t.contact.validation.sendFailed);
      setStatus("idle");
    }
  };

  const handleResend = async () => {
    setStatus("loading");
    try {
      const token = await sendOtp();
      if (!token) throw new Error("resend failed");
      setOtpToken(token);
      setOtpCode("");
      setOtpError("");
      setStatus("idle");
    } catch {
      setOtpError(t.contact.validation.sendFailed);
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(162,103,32,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8" ref={ref}>
        {/* Heading */}
        <div className="reveal reveal-delay-1 mb-14">
          <SectionHeading
            label={t.contact.label}
            title={t.contact.title}
            highlight={t.contact.highlight}
            subtitle={t.contact.subtitle}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 reveal reveal-delay-2 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-sn-primary mb-4">
                {t.contact.whyLabel}
              </p>
              <ul className="space-y-4">
                {t.contact.reasons.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-5 h-5 rounded-full bg-sn-primary/15 border border-sn-primary/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={11} className="text-sn-secondary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-sn-border">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-3">
                {t.contact.directLabel}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sn-secondary hover:text-sn-primary transition-colors text-sm font-body"
              >
                <Mail size={14} />
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="pt-4 border-t border-sn-border">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-3">
                {t.contact.addressLabel}
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-400 mb-3">
                <MapPin size={14} className="text-sn-primary mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_ADDRESS}</span>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sn-primary hover:text-sn-secondary transition-colors font-mono"
                >
                  <ExternalLink size={11} />
                  {t.contact.mapLink}
                </a>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sn-secondary hover:text-sn-primary transition-colors font-mono"
                >
                  <Star size={11} />
                  {t.contact.googleReviewLabel}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal reveal-delay-3">
            {status === "success" ? (
              <div role="status" aria-live="polite" className="h-full flex flex-col items-center justify-center text-center p-10 bg-sn-card rounded-2xl border border-green-500/20">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-sn-text mb-3">
                  {t.contact.success.heading}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {t.contact.success.body}
                </p>
                <Button variant="ghost" size="sm" onClick={() => { setStatus("idle"); setStep("form"); setOtpToken(""); }}>
                  {t.contact.success.again}
                </Button>
              </div>
            ) : step === "otp" ? (
              <div className="bg-sn-card rounded-2xl border border-sn-border p-7 space-y-5">
                {/* OTP header — only the subtitle is a live region so the screen
                    reader announces the step transition without re-reading the
                    entire card on every state change. */}
                <div className="text-center pb-2">
                  <div className="w-12 h-12 rounded-full bg-sn-primary/10 border border-sn-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Mail size={20} className="text-sn-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {t.contact.form.otpTitle}
                  </h3>
                  <p className="text-gray-400 text-sm" aria-live="polite">
                    {t.contact.form.otpSubtitle}{" "}
                    <span className="text-sn-secondary font-mono text-xs">{form.email}</span>
                  </p>
                </div>

                {/* Code input */}
                <div>
                  <label htmlFor="otp-code" className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    <KeyRound size={11} /> {t.contact.form.otpLabel}
                  </label>
                  <input
                    id="otp-code"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    autoFocus
                    autoComplete="one-time-code"
                    value={otpCode}
                    onChange={(e) => {
                      setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                      setOtpError("");
                    }}
                    placeholder={t.contact.form.otpPlaceholder}
                    aria-describedby="otp-error"
                    className={`input-field w-full rounded-lg px-4 py-3 text-xl font-mono text-center tracking-[0.4em] ${
                      otpError ? "border-red-500/60" : ""
                    }`}
                  />
                  {otpError && (
                    <p id="otp-error" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} /> {otpError}
                    </p>
                  )}
                </div>

                {/* Verify button */}
                <Button
                  type="button"
                  size="md"
                  disabled={status === "loading"}
                  className="w-full justify-center"
                  onClick={handleVerify}
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-sn-bg/40 border-t-sn-bg rounded-full animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.form.otpVerify}
                      <Send size={14} />
                    </>
                  )}
                </Button>

                {/* Resend + Back */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => { setStep("form"); setOtpError(""); setOtpToken(""); }}
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    ← {t.contact.form.otpBack}
                  </button>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={status === "loading"}
                    className="text-sn-primary hover:text-sn-secondary transition-colors disabled:opacity-50"
                  >
                    {t.contact.form.otpResend}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-sn-card rounded-2xl border border-sn-border p-7 space-y-5"
              >
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                      <User size={11} /> {t.contact.form.nameLabel} <span className="text-sn-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      className={`input-field w-full rounded-lg px-4 py-2.5 text-sm ${
                        errors.name ? "border-red-500/60" : ""
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                      <Mail size={11} /> {t.contact.form.emailLabel} <span className="text-sn-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      className={`input-field w-full rounded-lg px-4 py-2.5 text-sm ${
                        errors.email ? "border-red-500/60" : ""
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    <Building2 size={11} /> {t.contact.form.companyLabel}
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={t.contact.form.companyPlaceholder}
                    autoComplete="organization"
                    className="input-field w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    <MessageSquare size={11} /> {t.contact.form.messageLabel} <span className="text-sn-primary" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                    className={`input-field w-full rounded-lg px-4 py-2.5 text-sm resize-none ${
                      errors.message ? "border-red-500/60" : ""
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Error notice */}
                {status === "error" && (
                  <p id="api-error" role="alert" aria-live="assertive" className="text-xs text-amber-400 font-mono">
                    {t.contact.validation.apiFallback.replace("{email}", CONTACT_EMAIL)}
                  </p>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="md"
                  disabled={status === "loading"}
                  className="w-full justify-center"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-sn-bg/40 border-t-sn-bg rounded-full animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send size={14} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
