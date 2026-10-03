import { Icon } from "./icon";
import projects from "@/data/projects.json";

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className={`project-card project-${project.color}`}>
      <div className="project-art" aria-hidden="true">
        <span className="project-number">0{index + 1}</span>
        <span className="project-mark">{project.mark}</span>
        <span className="project-art-caption">{project.category}</span>
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul
          className="project-stack"
          aria-label={`${project.name} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source on GitHub`}
            >
              GitHub
              <Icon name="arrowUpRight" size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live demo`}
            >
              Try it out
              <Icon name="arrowUpRight" size={15} />
            </a>
          )}
          {project.note && <span>{project.note}</span>}
          {!project.github && !project.demo && (
            <a
              href={`mailto:yohannesbelai4@gmail.com?subject=${encodeURIComponent(`Tell me about ${project.name}`)}`}
            >
              Ask me about it
              <Icon name="arrowUpRight" size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
