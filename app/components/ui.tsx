"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import messages from "@/messages/es.json";
import { discordInviteUrl } from "../lib/site";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const discordClass = external && href === discordInviteUrl ? "discord-button" : "";
  const classes = `button button-${variant} ${discordClass} ${className}`.trim();

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="logo" href="#top" aria-label={messages.brand.homeLabel}>
      <Image
        className="logo-image"
        src={compact ? "/brand/techtojob-symbol-negative.svg" : "/brand/techtojob-v1-negative.svg"}
        alt="TechToJob"
        width={compact ? 30 : 180}
        height={compact ? 30 : 27}
        priority={!compact}
      />
    </Link>
  );
}

export function ArrowIcon() {
  return (
    <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  headingId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingId?: string;
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const revealFallback = window.setTimeout(() => {
      node.classList.add("is-visible");
    }, 1200 + delay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
          window.clearTimeout(revealFallback);
        }
      },
      { rootMargin: "0px 0px 140px 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(revealFallback);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}

export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function Avatar({ initials, tone = "aqua" }: { initials: string; tone?: string }) {
  return (
    <span className={`avatar avatar-${tone}`} aria-hidden="true">
      {initials}
    </span>
  );
}
