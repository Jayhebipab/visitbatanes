import Image from "next/image";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";

const points = [
  {
    title: "Licensed Ivatan guides",
    body: "Our partners are all DOT-accredited locals — born and raised on these islands, fluent in Ivatan, Filipino and English.",
  },
  {
    title: "Slow, intimate group sizes",
    body: "Tours capped at 8 to 10 guests, often private. We protect the quiet that makes Batanes magical.",
  },
  {
    title: "Heritage-first itineraries",
    body: "We pace days around stone villages, weaving demos and Ivatan lunches — not just photo stops.",
  },
  {
    title: "Honest pricing, no hidden fees",
    body: "Entrance fees, environmental fees and boat fares are included up front. No upsells, no surprises.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
      <Reveal className="lg:col-span-6">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80"
            alt="Local Ivatan guide leading visitors through a stone village in Batanes"
            fill
            sizes="(min-width:1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"
          />
          <div className="absolute left-6 right-6 bottom-6 grid grid-cols-3 gap-3">
            {([
              { label: "Years guiding", value: 16, suffix: "+", format: "integer" as const },
              { label: "Avg. rating", value: 49, format: "decimal-1" as const },
              { label: "Happy guests", value: 12000, suffix: "+", format: "integer" as const },
            ]).map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-4 py-3 text-white"
              >
                <p className="font-display text-2xl">
                  <Counter
                    to={s.value}
                    suffix={s.suffix ?? ""}
                    format={s.format}
                  />
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="lg:col-span-6" delay={0.1}>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            Why travelers choose us
          </p>
          <h2 className="heading-display mt-3 text-3xl md:text-5xl text-foreground">
            Slow travel,
            <br />
            local hearts,
            <br />
            quiet luxury.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Visit Batanes works with a network of Ivatan-led operators who put
            community, heritage and weather-readiness at the core of every
            itinerary. We curate trips that feel rare — even at their most
            popular destinations.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p.title} className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="font-medium text-foreground">{p.title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
