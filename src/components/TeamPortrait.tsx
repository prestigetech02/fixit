import Image from "next/image";

type TeamPortraitProps = {
  name: string;
  image?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  tone?: "dark" | "light";
  className?: string;
};

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

/** Fills its (relatively positioned) parent with the photo, or initials when no photo exists yet. */
export default function TeamPortrait({
  name,
  image,
  alt,
  sizes,
  priority,
  tone = "dark",
  className = "",
}: TeamPortraitProps) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover object-top ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`absolute inset-0 flex items-center justify-center ${
        tone === "dark"
          ? "bg-gradient-to-br from-zinc-600 to-zinc-800 text-white/80"
          : "bg-gradient-to-br from-zinc-200 to-zinc-300 text-zinc-500"
      } ${className}`}
    >
      <span className="text-5xl font-black tracking-tight sm:text-6xl">
        {initials(name)}
      </span>
    </div>
  );
}
