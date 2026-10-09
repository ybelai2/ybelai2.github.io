import notes from "@/data/notes.json";
export { notes };
export function readingTime(paragraphs: string[]) {
  return Math.max(1, Math.ceil(paragraphs.join(" ").split(/\s+/).length / 220));
}
