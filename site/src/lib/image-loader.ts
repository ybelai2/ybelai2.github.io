"use client";

import type { ImageLoaderProps } from "next/image";

// Images are compressed ahead of time so Pages needs no image server.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  const size = width <= 480 ? 480 : width <= 960 ? 960 : 1440;
  return src.endsWith(".webp") ? src.replace(".webp", `-${size}.webp`) : src;
}
