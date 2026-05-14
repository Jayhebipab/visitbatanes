import Link from "next/link";
import { Section } from "@/components/section";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">
          404 — Lost at sea
        </p>
        <h1 className="heading-display mt-3 text-4xl md:text-5xl">
          That destination doesn&apos;t exist (yet).
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for may have moved, been renamed, or never
          made it past the faluwa. Try one of these:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Browse destinations
            <ArrowRightIcon size={14} />
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium"
          >
            See tour packages
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium"
          >
            Back home
          </Link>
        </div>
      </div>
    </Section>
  );
}
