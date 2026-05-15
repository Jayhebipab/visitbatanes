import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/types";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";

export function DestinationCard({
  d,
  priority = false,
}: {
  d: Destination;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/destinations/${d.slug}`}
      className="group lift relative overflow-hidden rounded-3xl bg-card border border-border/60 block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${d.name} on ${d.island} Island — view details`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={d.image}
          alt={d.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-zinc-900 backdrop-blur">
          {d.category}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-white/80">
            <MapPinIcon size={14} />
            {d.island} Island
          </p>
          <h3 className="font-display text-2xl mt-1 leading-tight">
            {d.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/85">
            {d.shortDescription}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white">
            Explore
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
