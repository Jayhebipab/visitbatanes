import Link from "next/link";
import { SITE } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/components/icons";
import { destinations } from "@/lib/data/destinations";
import { tours } from "@/lib/data/tours";

export function Footer() {
  const popularDestinations = destinations.slice(0, 6);
  const popularTours = tours.slice(0, 4);

  return (
    <footer
      className="relative mt-20 border-t border-border/60 bg-muted/60"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Visit Batanes footer
      </h2>
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-2 font-display text-xl">
            <span
              aria-hidden
              className="grid h-10 w-10 place-items-center rounded-full text-primary-foreground"
              style={{ background: "var(--ocean)" }}
            >
              VB
            </span>
            {SITE.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {SITE.description}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPinIcon size={16} className="mt-0.5 shrink-0 text-accent" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={16} className="text-accent" />
              <a href={`tel:${SITE.phone.replace(/\s|\(|\)|-/g, "")}`}>
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={16} className="text-accent" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={SITE.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid h-10 w-10 place-items-center rounded-full bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li><Link href="/destinations" className="hover:text-foreground">Destinations</Link></li>
            <li><Link href="/tours" className="hover:text-foreground">Tours & Packages</Link></li>
            <li><Link href="/travel-guide" className="hover:text-foreground">Travel Guide</Link></li>
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-foreground">
            Top destinations
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {popularDestinations.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="hover:text-foreground"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-foreground">
            Featured tours
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {popularTours.map((t) => (
              <li key={t.slug}>
                <Link href={`/tours#${t.slug}`} className="hover:text-foreground">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. A
            tourism showcase site — for inspiration and planning only.
          </p>
          <p className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-foreground">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="hover:text-foreground">
              Robots
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
