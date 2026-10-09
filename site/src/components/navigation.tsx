"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";

export const navigationLinks = [
  ["home", "Home"],
  ["philosophy", "Philosophy"],
  ["principles", "Principles"],
  ["notes", "Notes"],
  ["about", "About"],
  ["contact", "Contact"],
] as const;

export function Navigation({ article = false }: { article?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(article ? "notes" : "home");
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  useEffect(() => {
    if (article) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    navigationLinks.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [article]);
  return (
    <header className="site-header" ref={header}>
      <div className="nav-shell container">
        <a
          href="/#home"
          className="wordmark"
          aria-label="Yohannes Belai, home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            yb<span>.</span>
          </span>
          <span className="wordmark-name">Yohannes Belai</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationLinks.map(([id, text]) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {text}
            </a>
          ))}
        </nav>
        <button
          ref={toggle}
          className="mobile-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigationLinks.map(([id, text], index) => (
          <a
            key={id}
            href={`/#${id}`}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            <span className="nav-index">0{index + 1}</span>
            {text}
            <Icon name="arrowUpRight" size={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}
