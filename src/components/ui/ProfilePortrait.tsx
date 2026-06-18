import Image from "next/image";
import { siteConfig } from "@/lib/site";

type ProfilePortraitProps = {
  variant?: "hero" | "about";
  priority?: boolean;
  className?: string;
};

const variantStyles = {
  hero: {
    wrapper:
      "mx-auto w-full max-w-[17rem] sm:max-w-[19rem] lg:mx-0 lg:max-w-none",
    frame: "rounded-2xl",
    aspect: "aspect-[4/5]",
    image: "object-cover object-[center_18%]",
    sizes: "(max-width: 640px) 17rem, (max-width: 1024px) 19rem, 38vw",
  },
  about: {
    wrapper: "mx-auto w-full max-w-xs sm:max-w-sm",
    frame: "rounded-2xl",
    aspect: "aspect-square",
    image: "object-cover object-[center_20%]",
    sizes: "(max-width: 1024px) 100vw, 320px",
  },
};

export default function ProfilePortrait({
  variant = "hero",
  priority = false,
  className = "",
}: ProfilePortraitProps) {
  const styles = variantStyles[variant];

  return (
    <figure className={`${styles.wrapper} ${className}`.trim()}>
      <div className="relative">
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl border border-accent-border"
          aria-hidden
        />
        <div
          className={`relative overflow-hidden border border-border-strong bg-surface shadow-portrait ring-1 ring-border ${styles.frame}`}
        >
          <div className={`relative w-full ${styles.aspect}`}>
            <Image
              src={`/${siteConfig.profileImagePath}`}
              alt={siteConfig.name}
              fill
              priority={priority}
              className={styles.image}
              sizes={styles.sizes}
            />
          </div>
        </div>
        <span
          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-accent/70"
          aria-hidden
        />
      </div>
      <figcaption className="sr-only">Portrait of {siteConfig.name}</figcaption>
    </figure>
  );
}
