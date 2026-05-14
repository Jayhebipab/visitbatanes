import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, ClockIcon } from "@/components/icons";

export function TourCard({ t, priority = false }: { t: Tour; priority?: boolean }) {
  return (
    <article
      id={t.slug}
      className="group lift overflow-hidden rounded-3xl border border-border/60 bg-card scroll-mt-28"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={t.image}
          alt={t.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground">
          {t.category}
        </span>
        {t.popular && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            Popular
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <ClockIcon size={14} />
          {t.duration} · {t.level}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight">{t.title}</h3>
        <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-sm">
          {t.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex items-start gap-1.5 text-muted-foreground">
              <CheckIcon size={14} className="mt-0.5 text-accent shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              From
            </p>
            <p className="font-display text-3xl text-foreground">
              ₱{t.price.toLocaleString()}
              <span className="ml-1 text-xs font-sans text-muted-foreground">
                / person
              </span>
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            aria-label={`Inquire about ${t.title}`}
          >
            Inquire
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
