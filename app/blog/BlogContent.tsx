"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { useReveal } from "@/components/hooks/useReveal";
import { BLOG_POSTS, CATEGORY_COLORS } from "@/lib/blogsMeta";
import { useLanguage } from "@/context/LanguageContext";

const MAX_REVEAL_DELAY = 7;

export default function BlogContent() {
  const ref = useReveal();
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-sn-bg text-white">
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-28 pb-20 outline-none">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-mono text-sn-primary tracking-widest uppercase mb-4">
              {t.blog.insights}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
              {t.blog.headingTitle}<span className="gradient-text">{t.blog.headingHighlight}</span>
            </h1>
            <p className="text-sn-muted text-lg leading-relaxed">
              {t.blog.insightsSubtitle}
            </p>
            <div className="amber-line mx-auto mt-8 max-w-xs" />
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <Link
            href="/webdesign-agentur-berlin"
            className="group flex items-center justify-between gap-4 bg-sn-card border border-sn-border rounded-2xl px-6 py-4 hover:border-sn-primary/40 transition-colors duration-200"
          >
            <span className="font-display text-sm font-semibold text-white group-hover:text-sn-secondary transition-colors duration-200">
              {t.blog.webdesignBannerLabel}
            </span>
            <span className="font-mono text-xs text-sn-primary group-hover:translate-x-1 transition-transform duration-200 inline-block flex-shrink-0">
              {t.blog.webdesignBannerCta} →
            </span>
          </Link>
        </section>
        <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => {
              const badgeClass = CATEGORY_COLORS[post.categoryAccent] ?? CATEGORY_COLORS.amber;
              const formattedDate = new Date(post.date).toLocaleDateString(
                lang === "de" ? "de-DE" : "en-US",
                { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }
              );
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`reveal reveal-delay-${Math.min(i + 1, MAX_REVEAL_DELAY)} group block bg-sn-card border border-sn-border rounded-2xl p-6 hover:border-sn-primary/40 card-glow transition-all duration-300`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-mono border rounded-full px-2.5 py-0.5 ${badgeClass}`}>
                      {post.category}
                    </span>
                    <span className="text-sn-muted text-xs font-mono">{formattedDate}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-white mb-3 leading-snug group-hover:text-sn-secondary transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-sn-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-sn-border/50">
                    <span className="text-xs font-mono text-sn-muted">
                      {post.readingTime} min {t.blog.readTime}
                    </span>
                    <span className="text-xs font-mono text-sn-primary group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      {t.blog.readMore}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
