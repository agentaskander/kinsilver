import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "cream" | "ink" | "plain";
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, tone = "plain", children }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="section__inner">
        <div className="section__header">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {intro ? <p className="section__intro">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
