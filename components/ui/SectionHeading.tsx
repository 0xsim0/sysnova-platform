import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-sn-primary mb-4 opacity-90">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sn-text leading-tight mb-4">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={cn("text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
