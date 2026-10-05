"use client";
import { ArrowRight, MapPin, Languages, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const trustSignals = [
    { icon: MapPin,    text: t.hero.trust.berlin      },
    { icon: Languages, text: t.hero.trust.languages   },
    { icon: Zap,       text: t.hero.trust.noOverhead  },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* ── Background Layers ── */}
      <div className="absolute inset-0 bg-sn-bg" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Ambient glow — top center */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(162,103,32,0.12) 0%, rgba(162,103,32,0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Glow — left bottom */}
      <div
        className="absolute bottom-0 left-[-10%] w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(162,103,32,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Decorative floating logo — top right */}
      <div className="absolute top-32 right-12 lg:right-24 hidden lg:block">
        <div
          className="w-24 h-24 rounded-2xl border border-sn-primary/20 bg-sn-card/60 flex items-center justify-center animate-float"
          style={{ animationDelay: "0s", boxShadow: "0 0 30px rgba(162,103,32,0.12)" }}
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={137}
            height={200}
            className="w-12 h-auto opacity-80"
          />
        </div>
      </div>
      <div className="absolute bottom-36 left-12 hidden lg:block">
        <div
          className="w-16 h-16 rounded-xl border border-sn-border/60 bg-sn-card/40 flex items-center justify-center animate-float"
          style={{ animationDelay: "3s" }}
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={137}
            height={200}
            className="w-8 h-auto opacity-40"
          />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 text-center">

        {/* Badge */}
        <div className="animate-fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sn-primary/30 bg-sn-primary/8 mb-8">
          <span
            className="w-2 h-2 rounded-full bg-sn-secondary animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <span className="font-mono text-xs text-sn-secondary tracking-widest uppercase">
            {t.hero.badge}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-up-2 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-sn-text">{t.hero.headline1}</span>
          <br />
          <span className="text-sn-text">{t.hero.headline2}</span>
          <span className="gradient-text-animated">{t.hero.headlineGradient}</span>
        </h1>

        {/* Subline */}
        <p className="animate-fade-up-3 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          {t.hero.subline1}{" "}
          <span className="text-gray-300">{t.hero.subline2}</span>
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" href="#contact" className="min-w-52">
            {t.hero.cta1}
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="ghost" href="#services">
            {t.hero.cta2}
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="animate-fade-up-4 flex flex-wrap justify-center gap-6 md:gap-10">
          {trustSignals.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-gray-400 text-sm">
              <Icon size={15} className="text-sn-primary flex-shrink-0" />
              <span className="font-body">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #111211, transparent)" }}
      />
    </section>
  );
}
