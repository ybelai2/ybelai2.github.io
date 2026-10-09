import socials from "@/data/socials.json";
import { Icon } from "./icon";

export function EditorialFooter() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <a className="wordmark" href="/#home">
          <span className="monogram">
            yb<span>.</span>
          </span>
          <span className="wordmark-name">Yohannes Belai</span>
        </a>
        <p>
          Clarity over noise. Principles over impulses.
          <br />
          Substance over display.
        </p>
        <a className="back-top" href="#main">
          Back to top <Icon name="arrowUpRight" size={16} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Yohannes Belai</span>
        <nav aria-label="Footer navigation">
          <a href="/#philosophy">Philosophy</a>
          <a href="/#notes">Notes</a>
          <a href="/#contact">Contact</a>
        </nav>
        <nav className="footer-socials" aria-label="Social profiles">
          {socials
            .filter((social) => social.href)
            .map((social) => (
              <a
                key={social.id}
                href={social.href!}
                target={social.id === "email" ? undefined : "_blank"}
                rel={social.id === "email" ? undefined : "noopener noreferrer"}
                aria-label={social.label}
              >
                <Icon name={social.id} size={18} />
              </a>
            ))}
        </nav>
      </div>
    </footer>
  );
}
