import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import profile from "@/data/profile.json";
import { notes, readingTime } from "@/lib/notes";
import { Navigation } from "@/components/navigation";
import { EditorialFooter } from "@/components/editorial-footer";
import { Icon } from "@/components/icon";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) return {};
  return {
    title: `${note.title} — Yohannes Belai`,
    description: note.excerpt,
    alternates: { canonical: `/notes/${note.slug}/` },
    openGraph: {
      type: "article",
      title: note.title,
      description: note.excerpt,
      url: `/notes/${note.slug}/`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Field notes by Yohannes Belai",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: note.excerpt,
      images: ["/og-image.jpg"],
    },
  };
}
export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const noteIndex = notes.findIndex((note) => note.slug === slug);
  if (noteIndex === -1) notFound();
  const note = notes[noteIndex];
  const next = notes[(noteIndex + 1) % notes.length];
  const structured = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.excerpt,
    author: { "@type": "Person", name: profile.name, url: profile.siteUrl },
    mainEntityOfPage: `${profile.siteUrl}/notes/${note.slug}/`,
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation article />
      <main id="main" className="article-page container">
        <a className="text-link article-back" href="/#notes">
          <Icon name="arrowLeft" size={16} /> Back to the notebook
        </a>
        <article>
          <header className="article-header">
            <p className="eyebrow">
              FIELD NOTE {String(noteIndex + 1).padStart(2, "0")}{" "}
              <span> / </span> {note.category}
            </p>
            <h1>{note.title}</h1>
            <p className="article-deck">{note.excerpt}</p>
            <div className="article-meta">
              <span>Yohannes Belai</span>
              <span>{readingTime(note.paragraphs)} min read</span>
            </div>
          </header>
          <div className="article-body">
            {note.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <aside className="article-question">
              <p className="eyebrow">A QUESTION TO SIT WITH</p>
              <p>{note.question}</p>
            </aside>
            <p className="article-caveat">
              A reflection to examine, not a rule for every situation.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/yohannes.belai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Have a different perspective? Let’s talk{" "}
              <Icon name="arrowUpRight" size={17} />
            </a>
          </div>
        </article>
        <Link className="next-note" href={`/notes/${next.slug}/`}>
          <div>
            <p className="eyebrow">CONTINUE READING</p>
            <h2>{next.title}</h2>
          </div>
          <Icon name="arrowRight" size={25} />
        </Link>
      </main>
      <EditorialFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structured).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
