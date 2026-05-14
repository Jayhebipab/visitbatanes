import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import { guides, getGuideBySlug } from "@/lib/data/guides";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) return { title: "Guide not found" };

  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: `/travel-guide/${g.slug}` },
    openGraph: {
      type: "article",
      title: g.title,
      description: g.excerpt,
      url: `${SITE.url}/travel-guide/${g.slug}`,
      images: [{ url: g.image, alt: g.imageAlt }],
      publishedTime: g.date,
      authors: [g.author],
    },
    twitter: {
      card: "summary_large_image",
      title: g.title,
      description: g.excerpt,
      images: [g.image],
    },
  };
}

export default async function GuideDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.excerpt,
    datePublished: g.date,
    image: g.image,
    author: { "@type": "Organization", name: g.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/travel-guide/${g.slug}`,
    },
  };

  const others = guides.filter((x) => x.slug !== g.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <article>
        <header className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={g.image}
              alt={g.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"
            />
          </div>
          <div className="container-x relative pt-24 pb-20 md:pt-32 md:pb-28 text-white">
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/travel-guide", label: "Travel Guide" },
                { label: g.title },
              ]}
            />
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {g.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="heading-display mt-5 max-w-4xl text-4xl md:text-6xl">
              {g.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">{g.excerpt}</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/75">
              <ClockIcon size={14} />
              {g.readTime} · {new Date(g.date).toLocaleDateString("en-PH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </header>

        <div className="container-x pt-12 max-w-3xl">
          {g.body.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
              <h2 className="heading-display text-2xl md:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {others.length > 0 && (
          <Section
            eyebrow="Continue reading"
            title="More from our travel guide"
          >
            <ul className="grid gap-6 md:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/travel-guide/${o.slug}`}
                    className="lift block overflow-hidden rounded-3xl border border-border/60 bg-card"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={o.image}
                        alt={o.imageAlt}
                        fill
                        sizes="(min-width:768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl">{o.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {o.excerpt}
                      </p>
                      <p className="mt-3 inline-flex items-center gap-1 text-sm">
                        Read
                        <ArrowRightIcon size={14} />
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </article>
    </>
  );
}
