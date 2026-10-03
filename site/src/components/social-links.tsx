"use client";

import { useRef } from "react";
import socials from "@/data/socials.json";
import { Icon } from "./icon";

export function InstagramLink({
  children,
  className = "",
  opener,
}: {
  children: React.ReactNode;
  className?: string;
  opener?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const instagram = socials.find((social) => social.id === "instagram");
  const email = socials.find((social) => social.id === "email")!.href!;
  if (instagram?.href)
    return (
      <a
        href={instagram.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </button>
      <dialog
        ref={dialog}
        className="contact-dialog"
        aria-label="Connect with Yohannes"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="icon-button dialog-close"
          type="button"
          aria-label="Close Instagram notice"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <Icon name="close" />
        </button>
        <span className="dialog-symbol">
          <Icon name="instagram" size={28} />
        </span>
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Say what’s up.</h2>
        <p>
          My Instagram link is coming soon. In the meantime, you can reach me by
          email.
        </p>
        <a
          className="button button-dark"
          href={`${email}?subject=${encodeURIComponent("Hey Yohannes!")}&body=${encodeURIComponent(opener ?? "")}`}
        >
          <Icon name="email" size={18} /> Send me an email{" "}
          <Icon name="arrowUpRight" size={17} />
        </a>
      </dialog>
    </>
  );
}

export function SocialLinks({
  compact = false,
  footer = false,
}: {
  compact?: boolean;
  footer?: boolean;
}) {
  return (
    <div
      className={`social-links ${compact ? "social-compact" : ""} ${footer ? "social-footer" : ""}`}
    >
      {socials.map((social) => {
        const content = (
          <>
            <Icon name={social.id} size={compact ? 17 : 19} />
            <span>{social.label}</span>
            {footer && <Icon name="arrowUpRight" size={16} />}
          </>
        );
        return social.id === "instagram" ? (
          <InstagramLink
            key={social.id}
            className={footer ? "social-primary" : ""}
          >
            {content}
          </InstagramLink>
        ) : (
          <a
            key={social.id}
            href={social.href!}
            target={social.id === "email" ? undefined : "_blank"}
            rel={social.id === "email" ? undefined : "noopener noreferrer"}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
