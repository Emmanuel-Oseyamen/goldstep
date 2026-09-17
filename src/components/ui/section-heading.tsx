import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italic?: string;
  description?: string;
  align?: "left" | "center";
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  italic,
  description,
  align = "left",
  action,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${
        centered ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && (
        <p className="goldstep-eyebrow">{eyebrow}</p>
      )}

      <h2
        className={`mt-5 font-display text-5xl leading-[0.92] tracking-[-0.025em] sm:text-6xl lg:text-7xl ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}

        {italic && (
          <>
            <br />
            <span className="italic text-gold">
              {italic}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-xl text-sm leading-7 text-foreground/50 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}

      {action && (
        <div
          className={`mt-8 ${
            centered ? "flex justify-center" : ""
          }`}
        >
          <Link
            href={action.href}
            className="group inline-flex items-center gap-3 border-b border-foreground/20 pb-2 text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            {action.label}

            <ArrowUpRight
              size={13}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      )}
    </div>
  );
}