"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY, BUSINESS_ADDRESS } from "@/lib/config";

// Inline SVG replacement for `lucide-react`'s `Linkedin` icon — brand icons
// were removed from lucide-react in newer versions. Same path/proportions as
// the original Feather/Lucide LinkedIn glyph.
function LinkedinIcon({ size = 13, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  // Use root-relative hash hrefs so these links work from any page, not just
  // the homepage. CSS scroll-behavior: smooth handles the scroll animation.
  const navLinks = [
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.team,    href: "/#team"    },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <footer className="relative border-t border-sn-border">
      {/* Top amber line */}
      <div className="amber-line" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3 hover:opacity-80 transition-opacity">
              <Image
                src="/logo-full.png"
                alt="SysNova"
                width={508}
                height={200}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <p className="mt-4 font-mono text-xs text-gray-600 tracking-wider">
              {t.footer.location}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-4">
              {t.footer.nav}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-sn-secondary text-sm transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/leistungen"
                  className="text-gray-400 hover:text-sn-secondary text-sm transition-colors font-body"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-sn-secondary text-sm transition-colors font-body"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-sn-secondary text-sm transition-colors font-body"
                >
                  {t.nav.portfolio}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-4">
              {t.footer.contact}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-gray-400 hover:text-sn-secondary text-sm transition-colors group"
              >
                <Mail size={13} className="text-sn-primary flex-shrink-0" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 text-gray-400 hover:text-sn-secondary text-sm transition-colors group"
              >
                <Phone size={13} className="text-sn-primary flex-shrink-0" />
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={13} className="text-sn-primary flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_ADDRESS}</span>
              </div>
              <a
                href="https://www.linkedin.com/company/sysnova-it-berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-sn-secondary text-sm transition-colors group"
              >
                <LinkedinIcon size={13} className="text-sn-primary" />
                LinkedIn
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-sn-border/50">
              <p className="text-gray-600 text-xs font-mono leading-relaxed">
                {t.footer.languages}
                <br />
                🇬🇧 &nbsp; 🇩🇪 &nbsp; 🇸🇦
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-sn-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs font-mono">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-3 text-gray-600 text-xs font-mono">
            <Link href="/impressum" className="hover:text-sn-secondary transition-colors">{t.footer.impressum}</Link>
            <span>·</span>
            <Link href="/datenschutz" className="hover:text-sn-secondary transition-colors">{t.footer.privacy}</Link>
            <span>·</span>
            <button
              onClick={() => { localStorage.removeItem("sn-cookie-consent"); window.dispatchEvent(new Event("sn-consent-reset")); }}
              className="hover:text-sn-secondary transition-colors cursor-pointer"
            >
              {t.footer.cookieSettings}
            </button>
          </div>
          <p className="text-gray-700 text-xs font-mono">
            {t.footer.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
