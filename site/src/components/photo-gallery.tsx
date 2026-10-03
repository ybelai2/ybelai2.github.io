"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import photos from "@/data/photos.json";
import { Icon } from "./icon";

export function PhotoGallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(
    null,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  const categories = ["All", ...new Set(photos.map((photo) => photo.category))];
  const filtered =
    filter === "All"
      ? photos
      : photos.filter((photo) => photo.category === filter);
  function openPhoto(photo: (typeof photos)[number]) {
    setSelected(photo);
    dialog.current?.showModal();
  }
  return (
    <>
      <div className="gallery-filters" aria-label="Filter photos">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className={`photo-grid ${filter !== "All" ? "photo-grid-filtered" : ""}`}
        aria-live="polite"
      >
        {filtered.map((photo) => (
          <figure className={`photo-tile ${photo.className}`} key={photo.id}>
            <button
              type="button"
              onClick={() => openPhoto(photo)}
              aria-label={`View ${photo.title}${photo.placeholder ? " — placeholder photo" : ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 600px) 92vw, (max-width: 1000px) 60vw, 620px"
              />
              <span className="photo-label">{photo.category}</span>
              {photo.placeholder && (
                <span className="placeholder-label">Stock placeholder</span>
              )}
              <span className="photo-caption">
                <strong>{photo.title}</strong>
                <span>{photo.caption}</span>
              </span>
              <span className="photo-expand">
                <Icon name="arrowUpRight" size={20} />
              </span>
            </button>
          </figure>
        ))}
      </div>
      <p className="photo-note">
        <Icon name="camera" size={15} />A little moodboard for now. These are
        stock placeholders; personal photos are on the way.
      </p>
      <dialog
        className="photo-dialog"
        ref={dialog}
        aria-label="Photo detail"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="icon-button dialog-close"
          type="button"
          aria-label="Close photo"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <Icon name="close" />
        </button>
        {selected && (
          <>
            <div className="lightbox-image">
              <Image src={selected.src} alt={selected.alt} fill sizes="90vw" />
            </div>
            <div className="lightbox-caption">
              <h3>{selected.title}</h3>
              <p>{selected.caption}</p>
              {selected.placeholder && (
                <small>
                  Stock placeholder ·{" "}
                  <a
                    href={selected.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selected.credit} <span aria-hidden="true">↗</span>
                  </a>{" "}
                  · Not a personal photo.
                </small>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
