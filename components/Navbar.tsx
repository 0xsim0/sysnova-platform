"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { SERVICE_META } from "@/lib/servicesMeta";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopServicesBtnRef = useRef<HTMLButtonElement>(null);
  const mobileServicesBtnRef = useRef<HTMLButtonElement>(null);
  const prevServicesOpen = useRef(false);
  // F55: refs for desktop services menu items (index 0 = overview link, 1-6 = service links)
  const menuItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // N36: restore focus to mobile services toggle when accordion collapses
  useEffect(() => {
    if (open && !servicesOpen && prevServicesOpen.current) {
      mobileServicesBtnRef.current?.focus();
    }
    prevServicesOpen.current = servicesOpen;
  }, [servicesOpen, open]);

  // B9: set/remove inert on mobile menu so closed items are not keyboard-focusable
  useEffect(() => {
    const el = mobileMenuRef.current;
    if (!el) return;
    if (open) {
      el.removeAttribute("inert");
    } else {
      el.setAttribute("inert", "");
    }
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    setServicesOpen(false);
    setDesktopServicesOpen(false);
    if (isHome) {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      document.querySelector(href)?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
      });
    } else {
      router.push(`/${href}`);
    }
  };

  // F55: arrow-key navigation handler for desktop services menu items
  const handleMenuItemKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const items = menuItemRefs.current.filter(Boolean) as HTMLAnchorElement[];
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(index + 1) % total]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(index - 1 + total) % total]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[total - 1]?.focus();
    } else if (e.key === "Tab") {
      setDesktopServicesOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-85 transition-opacity">
          <Image
            src="/logo-full.png"
            alt="SysNova"
            width={508}
            height={200}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label={t.nav.primaryNavLabel} className="hidden md:flex items-center gap-1">
          {/* B10: Leistungen dropdown — keyboard-accessible */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setDesktopServicesOpen(false);
              }
            }}
          >
            <button
              ref={desktopServicesBtnRef}
              aria-haspopup="menu"
              aria-expanded={desktopServicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setDesktopServicesOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setDesktopServicesOpen(false);
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setDesktopServicesOpen(true);
                  // focus first item after state update
                  setTimeout(() => menuItemRefs.current[0]?.focus(), 0);
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setDesktopServicesOpen(true);
                  // focus last item after state update
                  const lastIndex = menuItemRefs.current.length - 1;
                  setTimeout(() => menuItemRefs.current[lastIndex]?.focus(), 0);
                }
              }}
              className="flex items-center gap-1 px-4 py-2 text-sm font-body text-gray-400 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
            >
              {t.nav.services}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id="desktop-services-menu"
              role="menu"
              className={`absolute top-full left-0 mt-1.5 w-52 bg-sn-card border border-sn-border rounded-xl shadow-xl shadow-black/40 transition-all duration-200 z-50 py-1.5 ${
                desktopServicesOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible pointer-events-none"
              }`}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setDesktopServicesOpen(false);
                  desktopServicesBtnRef.current?.focus();
                }
              }}
            >
              <Link
                href="/leistungen"
                role="menuitem"
                ref={(el) => { menuItemRefs.current[0] = el; }}
                onClick={() => setDesktopServicesOpen(false)}
                onKeyDown={(e) => handleMenuItemKeyDown(e, 0)}
                className="flex items-center px-4 py-2.5 text-xs font-mono text-sn-primary/80 hover:text-sn-primary hover:bg-white/5 transition-colors"
              >
                {t.nav.services} →
              </Link>
              <div className="my-1 border-t border-sn-border/50" />
              {t.nav.serviceLinks.map((item, i) => {
                // SERVICE_META has exactly 6 entries, matching t.nav.serviceLinks length
                const svc = SERVICE_META[i]!;
                return (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    role="menuitem"
                    ref={(el) => { menuItemRefs.current[i + 1] = el; }}
                    onClick={() => setDesktopServicesOpen(false)}
                    onKeyDown={(e) => handleMenuItemKeyDown(e, i + 1)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm leading-none">{svc.emoji}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => handleNav("#pricing")}
            className="px-4 py-2 text-sm font-body text-gray-400 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => handleNav("#team")}
            className="px-4 py-2 text-sm font-body text-gray-400 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
          >
            {t.nav.team}
          </button>
          <Link
            href="/about"
            className="px-4 py-2 text-sm font-body text-gray-400 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/portfolio"
            className="px-4 py-2 text-sm font-body text-gray-400 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
          >
            {t.nav.portfolio}
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-sm font-body text-gray-400 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
          >
            {t.nav.blog}
          </Link>
          <button
            onClick={() => handleNav("#contact")}
            className="px-4 py-2 text-sm font-body text-gray-400 hover:text-sn-secondary transition-colors duration-200 tracking-wide"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Desktop right: toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Button size="sm" onClick={() => handleNav("#contact")}>
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-sn-secondary transition-colors"
          onClick={() => { setOpen(!open); if (open) setServicesOpen(false); }}
          aria-label={t.nav.toggleMenuLabel}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu — B9: inert when closed so links are not keyboard-focusable */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="glass-nav border-t border-sn-border/50 px-5 py-4 flex flex-col gap-1">
          {/* Mobile: Leistungen accordion */}
          <button
            ref={mobileServicesBtnRef}
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-haspopup="menu"
            aria-expanded={servicesOpen}
            aria-controls="mobile-services-list"
            className="w-full flex items-center justify-between px-3 py-3 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {t.nav.services}
            <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div id="mobile-services-list" role="menu" className="flex flex-col gap-0.5 pl-3 pb-1">
              <Link
                href="/leistungen"
                role="menuitem"
                onClick={() => { setOpen(false); setServicesOpen(false); }}
                className="px-3 py-2 text-xs font-mono text-sn-primary/80 hover:text-sn-primary hover:bg-white/5 rounded-lg transition-colors"
              >
                {t.nav.services} →
              </Link>
              {t.nav.serviceLinks.map((item, i) => {
                // SERVICE_META has exactly 6 entries, matching t.nav.serviceLinks length
                const svc = SERVICE_META[i]!;
                return (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    role="menuitem"
                    onClick={() => { setOpen(false); setServicesOpen(false); }}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-body text-gray-300 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <span className="text-sm leading-none">{svc.emoji}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
          <button
            onClick={() => handleNav("#pricing")}
            className="w-full text-left px-3 py-3 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => handleNav("#team")}
            className="w-full text-left px-3 py-3 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {t.nav.team}
          </button>
          <Link
            href="/about"
            onClick={() => { setOpen(false); setServicesOpen(false); }}
            className="w-full text-left px-3 py-3 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/portfolio"
            onClick={() => { setOpen(false); setServicesOpen(false); }}
            className="w-full text-left px-3 py-3 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {t.nav.portfolio}
          </Link>
          <Link
            href="/blog"
            onClick={() => { setOpen(false); setServicesOpen(false); }}
            className="w-full text-left px-3 py-3 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {t.nav.blog}
          </Link>
          <button
            onClick={() => handleNav("#contact")}
            className="w-full text-left px-3 py-3 text-sm font-body text-gray-400 hover:text-sn-secondary hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {t.nav.contact}
          </button>
          <div className="pt-3 border-t border-sn-border/50 flex flex-col gap-3">
            <div className="flex justify-center">
              <LanguageToggle />
            </div>
            <Button
              size="sm"
              className="w-full justify-center"
              onClick={() => handleNav("#contact")}
            >
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
