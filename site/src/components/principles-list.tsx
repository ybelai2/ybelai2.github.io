import principles from "@/data/principles.json";
import { Icon } from "./icon";

export function PrinciplesList() {
  return (
    <div className="principles-list">
      {principles.map((principle) => (
        <details key={principle.number} className="principle" name="principles">
          <summary>
            <span className="principle-number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <span className="principle-toggle">
              <Icon name="plus" size={18} />
            </span>
          </summary>
          <div className="principle-body">
            {principle.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
