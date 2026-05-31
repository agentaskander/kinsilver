import { PenLine } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { products } from "../data/kinsilverOntology";

export function PersonalizationPage() {
  const examples = ["Olivia Grace", "J.M. 08.21.26", "With love, Grandpa", "The beginning of your story"];
  return (
    <main>
      <PageHero
        eyebrow="Engraving & keepsakes"
        title="Personalization makes the keepsake legible to the future."
        intro="A smooth handle is reserved for engraving, so the name, date, or dedication has room to feel intentional."
      />
      <EditorialSection title="Engraving formats">
        <div className="grid gap-4 md:grid-cols-4">
          {examples.map((example) => (
            <article className="editorial-card text-center" key={example}>
              <PenLine className="mx-auto text-gold" size={22} aria-hidden="true" />
              <p className="mt-5 font-serif text-2xl">{example}</p>
            </article>
          ))}
        </div>
      </EditorialSection>
      <EditorialSection title="Designed around the handle" dark intro={products[0].personalization}>
        <p className="max-w-3xl text-lg leading-8 text-cream/75">
          Personalization should feel like an inscription, not decoration. kinSilver keeps the visual language quiet so
          the family detail does the emotional work.
        </p>
      </EditorialSection>
    </main>
  );
}
