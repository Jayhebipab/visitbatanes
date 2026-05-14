"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import { SearchIcon, MapPinIcon, ArrowRightIcon } from "@/components/icons";

export function SearchDestinations() {
  const [q, setQ] = useState("");
  const [island, setIsland] = useState<"All" | "Batan" | "Sabtang" | "Itbayat">(
    "All"
  );

  const matches = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query && island === "All") return [];
    return destinations
      .filter((d) => {
        const matchIsland = island === "All" || d.island === island;
        const matchQ =
          !query ||
          d.name.toLowerCase().includes(query) ||
          d.category.toLowerCase().includes(query) ||
          d.shortDescription.toLowerCase().includes(query);
        return matchIsland && matchQ;
      })
      .slice(0, 6);
  }, [q, island]);

  return (
    <section
      aria-labelledby="search-heading"
      className="container-x -mt-14 md:-mt-20 relative z-20"
    >
      <div className="glass-strong rounded-3xl border border-border/70 p-5 md:p-6 shadow-xl shadow-black/5">
        <h2 id="search-heading" className="sr-only">
          Search Batanes destinations
        </h2>
        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_auto] md:items-center">
          <label className="relative flex items-center">
            <SearchIcon size={18} className="absolute left-4 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="What do you want to see? (e.g. hills, lighthouse, village)"
              className="w-full rounded-xl border border-border/70 bg-card py-3.5 pl-11 pr-4 text-sm outline-none focus:border-foreground"
              aria-label="Search destinations"
            />
          </label>

          <label className="relative flex items-center">
            <MapPinIcon size={18} className="absolute left-4 text-muted-foreground" />
            <select
              value={island}
              onChange={(e) =>
                setIsland(
                  e.target.value as "All" | "Batan" | "Sabtang" | "Itbayat"
                )
              }
              className="w-full appearance-none rounded-xl border border-border/70 bg-card py-3.5 pl-11 pr-10 text-sm outline-none focus:border-foreground"
              aria-label="Filter by island"
            >
              <option value="All">All islands</option>
              <option value="Batan">Batan Island</option>
              <option value="Sabtang">Sabtang Island</option>
              <option value="Itbayat">Itbayat Island</option>
            </select>
          </label>

          <Link
            href="/destinations"
            className="inline-flex h-full items-center justify-center gap-1 rounded-xl bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            See all
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {matches.length > 0 && (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/destinations/${m.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/80 px-4 py-3 transition-colors hover:bg-muted/60"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {m.island} Island · {m.category}
                    </p>
                    <p className="font-medium text-foreground">{m.name}</p>
                  </div>
                  <ArrowRightIcon
                    size={16}
                    className="text-muted-foreground transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
