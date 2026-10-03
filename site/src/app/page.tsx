import Image from "next/image";
import profile from "@/data/profile.json";
import currently from "@/data/currently.json";
import projects from "@/data/projects.json";
import updates from "@/data/updates.json";
import { Navigation } from "@/components/navigation";
import { Icon } from "@/components/icon";
import { SocialLinks } from "@/components/social-links";
import { Interests } from "@/components/interests";
import { ConversationStarter } from "@/components/conversation-starter";
import { Activities } from "@/components/activities";
import { PhotoGallery } from "@/components/photo-gallery";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

function formatDate(value: string) {
  return new Date(`${value}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl,
    image: `${profile.siteUrl}/photos/yohannes-960.webp`,
    description:
      "Computer Science student at Towson University, builder, and basketball enthusiast based in Maryland.",
    sameAs: [
      "https://github.com/ybelai2",
      "https://www.linkedin.com/in/yohannesbelai/",
    ],
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow hero-welcome">
              <span className="little-star" aria-hidden="true">
                ✳
              </span>
              GLAD YOU FOUND YOUR WAY HERE
            </p>
            <p className="hero-greeting">Hey, I’m</p>
            <h1 id="hero-title">
              Yohannes<span>.</span>
            </h1>
            <p className="hero-location">
              {profile.age}
              <span aria-hidden="true">/</span>
              <Icon name="pin" size={15} />
              {profile.location}
            </p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#connect">
                Say what’s up
                <Icon name="arrowUpRight" size={18} />
              </a>
              <a className="hero-explore" href="#about">
                A little more about me
                <Icon name="arrowDown" size={16} />
              </a>
            </div>
            <SocialLinks compact />
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <div className="hero-photo">
                <Image
                  src={profile.photo}
                  alt="Yohannes Belai"
                  fill
                  priority
                  sizes="(max-width: 760px) 92vw, (max-width: 1200px) 45vw, 480px"
                />
                <span className="photo-coordinate">
                  <span className="status-dot" />
                  MARYLAND, USA
                </span>
              </div>
              <div className="hero-photo-caption">
                <span>Ethiopian roots. Maryland home.</span>
                <span>01 / ME</span>
              </div>
            </div>
            <a className="photo-sticker" href="#together">
              <Icon name="basketball" size={20} />
              <span>
                Always down
                <br />
                <strong>for a good run.</strong>
              </span>
              <Icon name="arrowUpRight" size={17} />
            </a>
            <span className="vertical-note" aria-hidden="true">
              A LIFE IN PROGRESS · EST. 2002
            </span>
          </div>
          <div className="hero-footnote">
            <span className="small-line" />
            <p>{profile.aside}</p>
            <a href="#currently" aria-label="See what I'm up to">
              <Icon name="arrowDown" size={18} />
            </a>
          </div>
        </section>

        <section
          className="currently-band"
          id="currently"
          aria-labelledby="currently-title"
        >
          <div className="container">
            <div className="currently-heading">
              <h2 id="currently-title">
                <span className="status-dot" />
                Currently, in my corner…
              </h2>
              <p>
                Updated{" "}
                <time dateTime={currently.updated}>
                  {formatDate(currently.updated)}
                </time>
              </p>
            </div>
            <div className="currently-grid">
              {currently.items.map((item) => (
                <div className="currently-item" key={item.label}>
                  <Icon name={item.icon} size={19} />
                  <div>
                    <span className="currently-label">{item.label}</span>
                    <h3>{item.value}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section container about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-intro">
            <p className="eyebrow">
              <span>01</span>THE SHORT VERSION
            </p>
            <h2 id="about-title">
              A little
              <br />
              about <em>me.</em>
            </h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              A few different worlds.
              <br />
              All part of the same person.
            </p>
            <p>
              I’m an Ethiopian-American CS student at Towson. Faith keeps me
              grounded, basketball gets me out of my head, and curiosity usually
              gets me building something.
            </p>
            <p>
              These days, I’m making more room for people and experiences, too.
              New places around the DMV. Better conversations. A little less
              staying in my comfort zone.
            </p>
            <div className="fact-chips">
              {profile.facts.map((fact) => (
                <span key={fact.label}>
                  <Icon name={fact.icon} size={16} />
                  {fact.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section container life-section"
          id="life"
          aria-label="Life beyond the screen"
        >
          <SectionHeading
            number="02"
            label="OFFLINE IS GOOD, TOO"
            title="Life, beyond the screen."
            description="The court. A new corner of the city. A conversation that runs longer than planned."
          />
          <PhotoGallery />
        </section>

        <section
          className="section container interests-section"
          id="interests"
          aria-label="Things I'm into"
        >
          <SectionHeading
            number="03"
            label="FIND SOME COMMON GROUND"
            title="A few things I’m into."
            description="Pick something. There’s probably a conversation in it."
          />
          <Interests />
          <ConversationStarter />
        </section>

        <section
          className="together-section"
          id="together"
          aria-label="Let's do something"
        >
          <div className="container">
            <SectionHeading
              number="04"
              label="GOOD COMPANY WELCOME"
              title="Let’s do something."
              description="If you’re around the DMV and we’re into some of the same things, say what’s up."
            />
            <Activities />
          </div>
        </section>

        <section
          className="section container work-section"
          id="building"
          aria-label="Selected software projects"
        >
          <SectionHeading
            number="05"
            label="THE BUILDER SIDE OF ME"
            title="I also build things."
            description="I’m finishing my CS degree at Towson. Backend systems, cloud infrastructure, and making software reliable are where I want to go deeper."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="work-footer">
            <p>
              Currently learning more about Java, Python, AWS, Docker, and
              distributed systems.
            </p>
            <div>
              <a
                className="text-link"
                href="https://github.com/ybelai2"
                target="_blank"
                rel="noopener noreferrer"
              >
                See my GitHub
                <Icon name="arrowUpRight" size={16} />
              </a>
              <a
                className="text-link"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View résumé
                <Icon name="arrowUpRight" size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section container now-section"
          id="now"
          aria-labelledby="now-title"
        >
          <div className="now-main">
            <p className="eyebrow">
              <span>06</span>A RUNNING NOTE TO SELF
            </p>
            <h2 id="now-title">
              Notes from <em>now.</em>
            </h2>
            <p className="now-intro">
              What I’m working on, thinking about, and making room for.
            </p>
            <div className="updates">
              {updates.map((update) => (
                <article key={update.id} className="update">
                  <div className="update-meta">
                    <time dateTime={update.date}>
                      {formatDate(update.date)}
                    </time>
                    <span>{update.category}</span>
                  </div>
                  <h3>{update.title}</h3>
                  <p>{update.body}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="principles">
            <span className="little-star" aria-hidden="true">
              ✳
            </span>
            <p className="eyebrow">THINGS I COME BACK TO</p>
            <h3>Still practicing.</h3>
            <ol>
              {profile.principles.map((principle, index) => (
                <li key={principle}>
                  <span>0{index + 1}</span>
                  {principle}
                </li>
              ))}
            </ol>
            <p className="principles-note">
              A direction to keep coming back to.
            </p>
          </aside>
        </section>

        <section
          className="contact-section"
          id="connect"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <p className="eyebrow">
              <span className="status-dot" />
              YOU’VE MADE IT THIS FAR
            </p>
            <h2 id="contact-title">
              Don’t be
              <br />
              <em>a stranger.</em>
              <span className="contact-asterisk" aria-hidden="true">
                ✳
              </span>
            </h2>
            <div className="contact-bottom">
              <p>
                If we have something in common, send me a message.
                <br />
                Basketball, tech, faith, life. Whatever.
              </p>
              <SocialLinks footer />
            </div>
            <footer>
              <a href="#home" className="footer-name">
                Yohannes Belai
                <span>© {new Date(profile.updated).getUTCFullYear()}</span>
              </a>
              <span>Made with curiosity. Maryland / DMV.</span>
              <a href="#home">
                Back to the top
                <Icon name="arrowUpRight" size={15} />
              </a>
            </footer>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
