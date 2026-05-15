import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  children,
  ...rest
}: SectionProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <section id={id} className={`section-pad ${className}`} {...rest}>
      <div className="container-x">
        {(eyebrow || title || description) && (
          <header className={`max-w-2xl ${alignClass} mb-10 md:mb-12`}>
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                <span aria-hidden className="inline-block h-px w-5 bg-accent/70" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="heading-display text-[1.75rem] leading-[1.15] md:text-3xl lg:text-[2.25rem] text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
