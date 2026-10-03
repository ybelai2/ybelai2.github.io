import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Coffee,
  Compass,
  Copy,
  Cross,
  Dumbbell,
  Github,
  Globe2,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plus,
  Shuffle,
  Utensils,
  X,
  Camera,
} from "lucide-react";

const icons = {
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  book: BookOpen,
  check: Check,
  code: Code2,
  coffee: Coffee,
  compass: Compass,
  copy: Copy,
  cross: Cross,
  dumbbell: Dumbbell,
  github: Github,
  globe: Globe2,
  graduation: GraduationCap,
  instagram: Instagram,
  linkedin: Linkedin,
  email: Mail,
  pin: MapPin,
  menu: Menu,
  message: MessageCircle,
  plus: Plus,
  shuffle: Shuffle,
  utensils: Utensils,
  close: X,
  camera: Camera,
};

export function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  if (name === "basketball")
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
        className={className}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m5.64 5.64 12.72 12.72M18.36 5.64 5.64 18.36M3.15 10.35a10 10 0 0 1 10.5 10.5M10.35 3.15a10 10 0 0 0 10.5 10.5" />
      </svg>
    );
  const Component = icons[name as keyof typeof icons] ?? MessageCircle;
  return (
    <Component
      size={size}
      strokeWidth={1.5}
      aria-hidden="true"
      className={className}
    />
  );
}
