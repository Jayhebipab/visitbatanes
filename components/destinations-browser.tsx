"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { DestinationCard } from "@/components/destination-card";
import type { Destination, DestinationCategory } from "@/lib/types";
import { SearchIcon } from "@/components/icons";

const categories: ("All" | DestinationCategory)[] = [
  "All",
  "Hills & Landscapes",
  "Beaches & Coves",
  "Heritage & Culture",
  "Lighthouses & Viewpoints",
  "Islands",
  "Food & Local",
];

export function DestinationsBrowser({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const dq = useDeferredValue(query);

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchCat = active === "All" || d.category === active;
      const q = dq.trim().toLowerCase();
      const matchQ =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.shortDescription.toLowerCase().includes(q) ||
        d.island.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [destinations, active, dq]);

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <label className="relative flex w-full max-w-md items-center">
          <SearchIcon
            size={18}
            className="absolute left-4 text-muted-foreground"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, islands, or activities…"
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none focus:border-foreground"
            aria-label="Search destinations"
          />
        </label>
      </div>

      <div
        role="tablist"
        aria-label="Filter destinations by category"
        className="mt-6 flex flex-wrap gap-2"
      >
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:bg-muted/60 text-foreground"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 rounded-2xl border border-dashed border-border bg-card p-8 text-center text-muted-foreground">
          No destinations match your filters yet. Try a broader search.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <li key={d.slug}>
              <DestinationCard d={d} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
