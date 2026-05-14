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
          <header className={`max-w-2xl ${alignClass} mb-10 md:mb-14`}>
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <span aria-hidden className="inline-block h-px w-6 bg-accent" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
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
