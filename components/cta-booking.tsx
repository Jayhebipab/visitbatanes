import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function CtaBooking() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden rounded-3xl"
    >
      <Image
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
        alt="Travelers walking the rolling hills of Batanes during a guided tour"
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 -z-10"
      />
      <div className="relative grid gap-6 p-10 md:p-16 lg:grid-cols-2 text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/80">
            Ready when you are
          </p>
          <h2
            id="cta-heading"
            className="heading-display mt-3 text-3xl md:text-5xl"
          >
            Reserve your seat
            <br />
            to the edge of the Philippines.
          </h2>
        </div>
        <div className="self-end">
          <p className="max-w-md text-white/85">
            Tours fill up months ahead during March to May. Tell us your
            travel window and we&apos;ll match you with the perfect Ivatan
            host.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-transform hover:scale-[1.02]"
            >
              Browse tours
              <ArrowRightIcon size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
            >
              Custom itinerary
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
