import { activities } from "@/lib/data/activities";
import { activityIconMap } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function ActivitiesGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {activities.map((a, i) => {
        const Icon = activityIconMap[a.icon];
        return (
          <Reveal as="li" key={a.slug} delay={i * 0.04}>
            <article className="lift h-full rounded-2xl border border-border/60 bg-card p-6 transition-colors">
              <span
                aria-hidden
                className="inline-grid h-12 w-12 place-items-center rounded-xl bg-ocean/10 text-ocean"
              >
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-xl text-foreground">
                {a.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {a.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">
                {a.duration}
              </p>
            </article>
          </Reveal>
        );
      })}
    </ul>
  );
}
