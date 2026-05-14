import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Visit Batanes — Plan Your Trip",
  description:
    "Reach out for a custom Batanes itinerary, tour booking inquiries, or any planning questions. We respond within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Tell us about your dream Batanes trip."
        description="Whether you want a curated tour or a fully custom itinerary, our Ivatan-led team replies within one business day."
      >
        <div className="mb-10">
          <Breadcrumbs
            items={[{ href: "/", label: "Home" }, { label: "Contact" }]}
          />
        </div>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <h2 className="font-display text-xl">Reach us directly</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPinIcon size={18} className="mt-0.5 text-accent" />
                  <span>{SITE.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon size={18} className="text-accent" />
                  <a href={`tel:${SITE.phone.replace(/\s|\(|\)|-/g, "")}`}>
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon size={18} className="text-accent" />
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href={SITE.socials.facebook}
                  aria-label="Facebook"
                  className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href={SITE.socials.instagram}
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground"
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={SITE.socials.youtube}
                  aria-label="YouTube"
                  className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground"
                  rel="noreferrer"
                  target="_blank"
                >
                  <YoutubeIcon size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <h2 className="font-display text-xl">Office hours</h2>
              <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Monday – Friday</dt>
                  <dd>8:00 AM – 6:00 PM PHT</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>9:00 AM – 1:00 PM PHT</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-border/60 bg-muted/60 p-6">
              <h2 className="font-display text-xl">Weather flexibility</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Flights and boats in Batanes are weather-sensitive. We help
                guests reschedule trips affected by typhoons without rebooking
                fees from our side.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
