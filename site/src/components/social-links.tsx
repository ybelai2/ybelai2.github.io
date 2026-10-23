import socials from "@/data/socials.json";
import { Icon } from "./icon";

export function EmailLink({
  children,
  className = "",
  opener,
}: {
  children: React.ReactNode;
  className?: string;
  opener?: string;
}) {
  const email = socials.find((social) => social.id === "email")!.href!;
  return (
    <a
      className={className}
      href={`${email}?subject=${encodeURIComponent("Hello Yohannes")}&body=${encodeURIComponent(opener ?? "")}`}
    >
      {children}
    </a>
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
        return (
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
