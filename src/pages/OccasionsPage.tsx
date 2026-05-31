import { Gift } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { occasions } from "../data/kinsilverOntology";

export function OccasionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Occasions"
        title="A keepsake for the moments families already gather around."
        intro="US-first gifting means baby showers, newborn arrivals, grandparents, godparents, and first birthdays lead the brand. Ceremonial occasions remain present without defining the whole story."
      />
      <EditorialSection title="Gift occasions">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {occasions.map((occasion) => (
            <article className="editorial-card" key={occasion.id}>
              <Gift className="text-gold" size={22} aria-hidden="true" />
              <p className="eyebrow mt-5">{occasion.priority}</p>
              <h2 className="h3">{occasion.name}</h2>
              <p className="mt-3 leading-7 text-brown">{occasion.headline}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-gold">{occasion.intent}</p>
            </article>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
