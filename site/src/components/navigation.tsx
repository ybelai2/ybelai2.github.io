"use client";

import { useState } from "react";
import { Icon } from "./icon";

const links = [
  { href: "#about", text: "A little about me" },
  { href: "#life", text: "Life lately" },
  { href: "#building", text: "I build things" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a
          href="#home"
          className="wordmark"
          aria-label="Yohannes Belai, home"
          onClick={() => setOpen(false)}
        >
          yb<span>.</span>
          <span className="wordmark-caption">
            a little corner
            <br />
            of the internet
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.text}
            </a>
          ))}
        </nav>
        <a className="nav-hello" href="#connect">
          Say what’s up <Icon name="arrowUpRight" size={16} />
        </a>
        <button
          className="icon-button mobile-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        {[
          ...links,
          { href: "#now", text: "Notes from now" },
          { href: "#connect", text: "Say what’s up" },
        ].map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.text}
            <Icon name="arrowUpRight" size={16} />
          </a>
        ))}
      </nav>
    </header>
  );
}
