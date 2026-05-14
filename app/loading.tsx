import { Section } from "@/components/section";

export default function Loading() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-muted/50">
        <div className="container-x pt-28 pb-24 md:pt-36 md:pb-32">
          <div className="skeleton h-3 w-28 rounded-full" />
          <div className="skeleton mt-6 h-16 w-3/4 rounded-2xl md:h-24" />
          <div className="skeleton mt-4 h-16 w-2/3 rounded-2xl md:h-24" />
          <div className="skeleton mt-8 h-5 w-1/2 rounded-full" />
        </div>
      </div>
      <Section>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <li
              key={i}
              className="overflow-hidden rounded-3xl border border-border/60 bg-card"
            >
              <div className="skeleton aspect-[4/5] w-full" />
              <div className="p-5 space-y-3">
                <div className="skeleton h-3 w-20 rounded-full" />
                <div className="skeleton h-5 w-2/3 rounded-full" />
                <div className="skeleton h-3 w-full rounded-full" />
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
