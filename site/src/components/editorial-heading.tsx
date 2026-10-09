export function EditorialHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span>
        {label}
      </p>
      <div className="heading-row">
        <h2>{title}</h2>
        {description && <p className="heading-description">{description}</p>}
      </div>
    </div>
  );
}
