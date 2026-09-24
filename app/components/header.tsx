"use client";

import { useEffect, useState } from "react";
import { discordInviteUrl } from "../lib/site";
import { ButtonLink, Logo } from "./ui";

type HeaderProps = {
  labels: {
    mainLabel: string;
    mobileLabel: string;
    howItWorks: string;
    talent: string;
    companies: string;
    tournaments: string;
    networking: string;
    news: string;
    openMenu: string;
    closeMenu: string;
  };
  joinLabel: string;
};

export function Header({ labels, joinLabel }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const links = [
    { href: "#how-it-works", label: labels.howItWorks },
    { href: "#talent", label: labels.talent },
    { href: "#companies", label: labels.companies },
    { href: "#tournaments", label: labels.tournaments },
    { href: "#networking", label: labels.networking },
    { href: "#news", label: labels.news },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className={`desktop-nav ${menuOpen ? "is-hidden-mobile" : ""}`} aria-label={labels.mainLabel}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ButtonLink href={discordInviteUrl} external variant="primary">
            {joinLabel}
          </ButtonLink>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label={labels.mobileLabel}
      >
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
            <span>{link.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
        <a className="mobile-discord" href={discordInviteUrl} target="_blank" rel="noreferrer">
          {joinLabel} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
