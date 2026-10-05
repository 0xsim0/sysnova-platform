"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/components/hooks/useReveal";
import { CATEGORY_COLORS, getRelatedPosts } from "@/lib/blogsMeta";
import { CONTACT_EMAIL } from "@/lib/config";

interface BlogPageTemplateProps {
  children: React.ReactNode;
  title: string;
  date: string;
  readingTime: number;
  category: string;
  categoryAccent: string;
}

export default function BlogPageTemplate({
  children,
  title,
  date,
  readingTime,
  category,
  categoryAccent,
}: BlogPageTemplateProps) {
  const { lang, t } = useLanguage();
  const ctaRef = useReveal();

  const formattedDate = new Date(date).toLocaleDateString(
    lang === "de" ? "de-DE" : "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }
  );

  const badgeClass = CATEGORY_COLORS[categoryAccent] ?? CATEGORY_COLORS.amber;
  const relatedPosts = getRelatedPosts(title);

  return (
    <div className="min-h-screen bg-sn-bg text-white">
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-28 pb-20 outline-none">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sn-muted hover:text-sn-secondary transition-colors text-sm font-mono mb-10 group"
          >
            <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            {t.blog.backToBlog}
          </Link>
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-xs font-mono border rounded-full px-3 py-1 ${badgeClass}`}>
                {category}
              </span>
              <span className="text-sn-muted text-sm font-mono">{formattedDate}</span>
              <span className="text-sn-muted text-sm font-mono">
                · {readingTime} min {t.blog.readTime}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-2.5 mt-5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-600 to-yellow-400 flex items-center justify-center text-sn-bg font-display font-bold text-xs shrink-0">
                W
              </div>
              <Link
                href="/about"
                className="font-mono text-sm text-sn-secondary hover:text-sn-secondary/70 transition-colors"
              >
                {t.blog.authorName}
              </Link>
              <span className="text-sn-muted/40 text-sm" aria-hidden="true">—</span>
              <span className="text-sn-muted text-sm">{t.blog.authorRole}</span>
            </div>
            <div className="amber-line mt-6" />
          </header>
          {lang === "en" && (
            <div className="mb-8 bg-sn-card border border-sn-border rounded-lg p-4 flex gap-3 items-start">
              <span className="text-lg leading-none mt-0.5" aria-hidden="true">🌍</span>
              <div>
                <p className="text-sn-secondary font-semibold text-sm mb-1">
                  {t.blog.deOnlyTitle}
                </p>
                <p className="text-sn-muted text-sm leading-relaxed">
                  {t.blog.deOnlyBody}
                </p>
              </div>
            </div>
          )}
          <article className="blog-prose">
            {children}
          </article>
          {relatedPosts.length > 0 && (
            <section className="mt-16" aria-labelledby="related-heading">
              <div className="amber-line mb-6 max-w-xs" />
              <h2 id="related-heading" className="font-display text-xl font-bold text-white mb-5">
                {t.blog.relatedTitle}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block h-full rounded-xl border border-sn-border bg-sn-card p-5 hover:border-sn-primary/40 transition-colors"
                    >
                      <span className={`text-xs font-mono border rounded-full px-2.5 py-0.5 ${CATEGORY_COLORS[post.categoryAccent] ?? CATEGORY_COLORS.amber}`}>
                        {post.category}
                      </span>
                      <span className="mt-3 block font-display font-semibold text-white text-sm leading-snug group-hover:text-sn-secondary transition-colors">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div ref={ctaRef} className="mt-16">
            <div className="reveal reveal-delay-1 p-8 rounded-2xl bg-sn-card border border-sn-border card-glow text-center">
              <div className="amber-line mx-auto mb-6 max-w-xs" />
              <p className="text-xs font-mono text-sn-primary tracking-widest uppercase mb-3">
                {t.common.blogCta.label}
              </p>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                {t.common.blogCta.title}
              </h2>
              <p className="text-sn-muted mb-7 max-w-md mx-auto leading-relaxed">
                {t.common.blogCta.body}
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
