import type { ReactNode } from "react";

type EditorialSectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  dark?: boolean;
};

export function EditorialSection({ eyebrow, title, intro, children, dark = false }: EditorialSectionProps) {
  return (
    <section className={dark ? "ink-band py-20 md:py-28" : "py-20 md:py-28"}>
      <div className="page-shell">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="h2">{title}</h2>
          {intro ? <p className={`mt-5 body-lg ${dark ? "!text-cream/75" : ""}`}>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
