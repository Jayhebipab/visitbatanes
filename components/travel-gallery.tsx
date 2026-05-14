import Image from "next/image";
import { Reveal } from "@/components/reveal";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    alt: "Sunset over the rolling Vayang hills in Batanes",
    span: "lg:col-span-2 lg:row-span-2 aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1200&q=80",
    alt: "Stone-and-cogon Ivatan houses lining a quiet village lane",
    span: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    alt: "Polished volcanic boulders along Valugan beach with Pacific waves",
    span: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80",
    alt: "White-sand cove with a natural limestone arch on Sabtang Island",
    span: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Basco Lighthouse silhouetted against orange sunset sky",
    span: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Wooden Ivatan fishing boats resting on a quiet pebbled shore",
    span: "lg:col-span-2 aspect-[16/9]",
  },
];

export function TravelGallery() {
  return (
    <div className="grid gap-3 grid-cols-2 lg:grid-cols-4 auto-rows-auto">
      {photos.map((p, i) => (
        <Reveal
          key={p.src}
          delay={i * 0.04}
          className={`relative overflow-hidden rounded-2xl ${p.span} group`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  );
}
