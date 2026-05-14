import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(props: IconProps) {
  const { size = 20, ...rest } = props;
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" strokeWidth={0}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}
export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
export function CompassIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-2 6-6 2 2-6 6-2z" />
    </svg>
  );
}
export function MountainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 20l6-10 4 6 3-4 5 8H3z" />
    </svg>
  );
}
export function WaveIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2 12s2-3 5-3 5 6 10 6 5-3 5-3M2 18s2-3 5-3 5 3 10 3 5-3 5-3" />
    </svg>
  );
}
export function BoatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 15l9-9 9 9M3 15h18l-2 5H5l-2-5z" />
    </svg>
  );
}
export function CameraIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 8h4l2-2h6l2 2h4v12H3z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}
export function BikeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="17" r="3.5" />
      <circle cx="18" cy="17" r="3.5" />
      <path d="M6 17l4-7h6l-3-4M14 10l2 7" />
    </svg>
  );
}
export function FoodIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 3v18M4 9c0-3 3-6 6-6v18M16 3l-2 7h4l-2-7zM18 10v11" />
    </svg>
  );
}
export function CultureIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 21V10l9-7 9 7v11M9 21V13h6v8" />
    </svg>
  );
}
export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
export function MinusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
    </svg>
  );
}
export function PlusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" strokeWidth={0}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3v-2c0-.9.3-1.5 1.6-1.5H17V4.2c-.3 0-1.3-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.1V10H8v3h2.5V21h3z" />
    </svg>
  );
}
export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19 19 0 0 1-8.27-3.07A18.5 18.5 0 0 1 7.6 14a19 19 0 0 1-3.07-8.27A1 1 0 0 1 5.53 4.6h4.07a1 1 0 0 1 1 .75c.13.66.36 1.55.66 2.34a1 1 0 0 1-.23 1.05L9.9 9.9a16 16 0 0 0 4.2 4.2l1.16-1.13a1 1 0 0 1 1.05-.23c.79.3 1.68.53 2.34.66a1 1 0 0 1 .75 1z" />
    </svg>
  );
}

export const activityIconMap = {
  wave: WaveIcon,
  mountain: MountainIcon,
  compass: CompassIcon,
  camera: CameraIcon,
  bike: BikeIcon,
  boat: BoatIcon,
  food: FoodIcon,
  culture: CultureIcon,
} as const;
