import Image from "next/image";
import Link from "next/link";
import profile from "@/data/profile.json";
import editorial from "@/data/editorial.json";
import projects from "@/data/projects.json";
import socials from "@/data/socials.json";
import { notes, readingTime } from "@/lib/notes";
import { Navigation } from "@/components/navigation";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { EditorialHeading } from "@/components/editorial-heading";
import { EditorialFooter } from "@/components/editorial-footer";
import { PrinciplesList } from "@/components/principles-list";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl,
    image: `${profile.siteUrl}/photos/yohannes-960.webp`,
    description:
      "Computer Science student at Towson University. Personal notes on clear thinking, human behavior, and building a deliberate life.",
    sameAs: socials
      .filter((s) => s.href?.startsWith("https://"))
      .map((s) => s.href),
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section
          id="home"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="gold-line" />
              {editorial.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              See what
              <br />
              others <em>overlook.</em>
            </h1>
            <p className="hero-description">{editorial.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#philosophy">
                Explore the philosophy <Icon name="arrowUpRight" size={18} />
              </a>
              <a className="text-link" href="#notes">
                Read the notes <Icon name="arrowRight" size={18} />
              </a>
            </div>
            <p className="hero-mantra">{editorial.hero.mantra}</p>
          </div>
          <figure className="hero-art">
            <div className="hero-art-frame">
              <Image
                src="/photos/architecture.webp"
                alt="An abstract architectural study of light falling between dark concrete walls"
                fill
                priority
                sizes="(max-width: 680px) 100vw, (max-width: 1000px) 44vw, 520px"
              />
              <div className="art-line" aria-hidden="true" />
            </div>
            <figcaption>
              <span>01 / LIGHT & STRUCTURE</span>
              <span>An architectural study</span>
            </figcaption>
          </figure>
          <div className="hero-bottom">
            <span>A LIFE IN PROGRESS</span>
            <p>See clearly. Think independently. Move deliberately.</p>
            <a href="#philosophy" aria-label="Continue to the philosophy">
              <Icon name="arrowDown" size={20} />
            </a>
          </div>
        </section>

        <section
          id="philosophy"
          className="section container philosophy-section"
          aria-labelledby="philosophy-title"
        >
          <Reveal>
            <EditorialHeading
              number="01"
              label="THE PHILOSOPHY"
              title={
                <span id="philosophy-title">
                  Understanding
                  <br />
                  changes <em>everything.</em>
                </span>
              }
              description="People are rarely explained by what they say alone. Decisions emerge from incentives, pressures, fears, ambitions, habits, and the environments people operate within. Understanding these forces provides a clearer view of the world."
            />
          </Reveal>
          <div className="philosophy-grid">
            {editorial.philosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="foundation">
                  <span className="index">0{i + 1}</span>
                  <span
                    className={`foundation-mark mark-${i}`}
                    aria-hidden="true"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="section-footnote">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>{" "}
            Frameworks to examine. Principles to practice. Always open to
            revision.
          </p>
        </section>

        <section
          id="principles"
          className="section principles-section"
          aria-labelledby="principles-title"
        >
          <div className="container principles-layout">
            <div className="principles-intro">
              <p className="eyebrow">
                <span>02</span>THE PRACTICE
              </p>
              <h2 id="principles-title">
                Principles of
                <br />
                <em>clear thinking.</em>
              </h2>
              <p>
                A framework for reading situations, understanding people, and
                navigating complexity without losing yourself.
              </p>
              <div className="principles-count">
                <span>13</span>
                <p>
                  principles.
                  <br />A continuing practice.
                </p>
              </div>
              <p className="small-note">Open a principle to look closer.</p>
            </div>
            <PrinciplesList />
          </div>
        </section>

        <section
          className="section container behavior-section"
          aria-labelledby="behavior-title"
        >
          <Reveal>
            <EditorialHeading
              number="03"
              label="HUMAN BEHAVIOR"
              title={
                <span id="behavior-title">
                  Look beneath
                  <br />
                  the <em>surface.</em>
                </span>
              }
              description="Curiosity is more useful than suspicion. Motives can be mixed, and a single observation is rarely the whole story."
            />
          </Reveal>
          <div className="behavior-layout">
            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              Words describe
              <br />
              intentions.
              <br />
              <em>
                Patterns provide
                <br />
                evidence.
              </em>
              <span className="quote-rule" />
            </blockquote>
            <div className="behavior-list">
              {editorial.behavior.map((item, i) => (
                <article key={item.title}>
                  <span className="index">0{i + 1}</span>
                  <div>
                    <p className="eyebrow">{item.title}</p>
                    <h3>{item.question}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="discipline-section"
          aria-labelledby="discipline-title"
        >
          <div className="container">
            <Reveal>
              <p className="eyebrow">
                <span>04</span>EMOTIONAL DISCIPLINE
              </p>
              <h2 id="discipline-title">
                The space between
                <br />
                <em>stimulus and response.</em>
              </h2>
              <p className="discipline-lead">
                You cannot control every circumstance, interpretation, or
                outcome. You can work to control the quality of your attention,
                the discipline of your response, and the decisions that follow.
              </p>
            </Reveal>
            <ol className="response-sequence">
              {editorial.response.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 0.08}>
                    <div className="response-top">
                      <span>0{i + 1}</span>
                      <Icon name={i === 3 ? "check" : "arrowRight"} size={17} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <em>{item.prompt}</em>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="discipline-note">A pause is a choice, too.</p>
          </div>
        </section>

        <section
          className="section container independence-section"
          aria-labelledby="independence-title"
        >
          <Reveal>
            <EditorialHeading
              number="05"
              label="STRATEGIC INDEPENDENCE"
              title={
                <span id="independence-title">
                  Freedom comes
                  <br />
                  from <em>options.</em>
                </span>
              }
              description="Independence is built before it is tested. Skills, resources, trusted relationships, and the ability to walk away create room for decisions based on judgment rather than desperation."
            />
          </Reveal>
          <div className="independence-grid">
            {editorial.independence.map((item) => (
              <article key={item.title}>
                <Icon name={item.icon} size={25} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="notes"
          className="section notes-section"
          aria-labelledby="notes-title"
        >
          <div className="container">
            <Reveal>
              <EditorialHeading
                number="06"
                label="AN OPEN NOTEBOOK"
                title={
                  <span id="notes-title">
                    Field <em>notes.</em>
                  </span>
                }
                description="Short reflections on behavior, judgment, and the work of living deliberately. Ideas to consider, not universal rules."
              />
            </Reveal>
            <div className="notes-grid">
              {notes.slice(0, 4).map((note, i) => (
                <Link
                  href={`/notes/${note.slug}/`}
                  key={note.slug}
                  className={`note-card ${i === 0 ? "note-featured" : ""}`}
                >
                  <div className="note-top">
                    <span className="eyebrow">{note.category}</span>
                    <span className="note-number">0{i + 1}</span>
                  </div>
                  <h3>{note.title}</h3>
                  <p>{note.excerpt}</p>
                  <div className="note-bottom">
                    <span>{readingTime(note.paragraphs)} min read</span>
                    <span>
                      Read note <Icon name="arrowUpRight" size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <details className="more-notes">
              <summary>
                More from the notebook{" "}
                <span>
                  04 notes <Icon name="plus" size={17} />
                </span>
              </summary>
              <div className="more-notes-list">
                {notes.slice(4).map((note) => (
                  <Link href={`/notes/${note.slug}/`} key={note.slug}>
                    <div>
                      <p className="eyebrow">
                        {note.category} · {readingTime(note.paragraphs)} min
                        read
                      </p>
                      <h3>{note.title}</h3>
                      <p>{note.excerpt}</p>
                    </div>
                    <Icon name="arrowUpRight" size={22} />
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section
          id="about"
          className="section container about-section"
          aria-labelledby="about-title"
        >
          <div className="about-portrait">
            <div className="portrait-frame">
              <Image
                src={profile.photo}
                alt="Yohannes Belai"
                fill
                sizes="(max-width: 680px) 80vw, 400px"
              />
            </div>
            <p>
              <span>YOHANNES BELAI</span>
              <span>MARYLAND / DMV</span>
            </p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">
              <span>07</span>THE PERSON BEHIND THE NOTES
            </p>
            <h2 id="about-title">
              A work
              <br />
              <em>in progress.</em>
            </h2>
            <h3>{editorial.about.opening}</h3>
            <p className="about-personal">{profile.intro}</p>
            <p>{editorial.about.bio}</p>
            <p>{editorial.about.purpose}</p>
            <div className="about-facts">
              <span>CS @ Towson · 2027</span>
              <span>Basketball</span>
              <span>Faith</span>
              <span>Building things</span>
            </div>
            <a
              className="text-link"
              href="https://www.instagram.com/yohannes.belai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say what’s up <Icon name="arrowUpRight" size={17} />
            </a>
          </div>
        </section>

        <section
          id="building"
          className="section container work-section"
          aria-labelledby="work-title"
        >
          <EditorialHeading
            number="08"
            label="IDEAS, PUT TO WORK"
            title={
              <span id="work-title">
                I also <em>build things.</em>
              </span>
            }
            description="I’m finishing my Computer Science degree at Towson and going deeper into backend systems, cloud infrastructure, and reliable software."
          />
          <div className="work-list">
            {projects.map((project, i) => (
              <article className="work-item" key={project.id}>
                <span className="index">0{i + 1}</span>
                <div className="work-name">
                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <div className="work-description">
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="work-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                    >
                      GitHub <Icon name="arrowUpRight" size={15} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} live demo`}
                    >
                      Live demo <Icon name="arrowUpRight" size={15} />
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="private-note">{project.note}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="work-footer">
            <p>Java · Python · Spring Boot · SQL · AWS · Docker</p>
            <div>
              <a
                className="text-link"
                href="https://github.com/ybelai2"
                target="_blank"
                rel="noopener noreferrer"
              >
                See my GitHub <Icon name="arrowUpRight" size={16} />
              </a>
              <a
                className="text-link"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View résumé <Icon name="arrowUpRight" size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">
                <span>09</span>GOOD CONVERSATIONS WELCOME
              </p>
              <h2 id="contact-title">
                Start a<br />
                <em>conversation.</em>
              </h2>
              <p>
                For thoughtful exchanges, meaningful collaborations, or ideas
                worth exploring.
              </p>
              <p className="contact-human">
                Basketball, tech, faith, life. There’s probably some common
                ground.
              </p>
              <div className="contact-socials">
                {socials
                  .filter((s) => s.href)
                  .map((s) => (
                    <a
                      key={s.id}
                      className={s.primary ? "social-primary" : ""}
                      href={s.href!}
                      target={s.id === "email" ? undefined : "_blank"}
                      rel={s.id === "email" ? undefined : "noopener noreferrer"}
                    >
                      <Icon name={s.id} size={18} />
                      <span>{s.label}</span>
                      <Icon name="arrowUpRight" size={15} />
                    </a>
                  ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <EditorialFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
