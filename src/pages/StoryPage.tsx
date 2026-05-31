import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { brand } from "../data/kinsilverOntology";

export function StoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Brand story"
        title="Kin first. Silver second."
        intro="kinSilver begins with a simple belief: the most powerful gifts are the ones that help a family remember its own beginning."
      />
      <EditorialSection title="A modern heritage brand for American family gifting">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="body-lg">
            The brand takes subtle inspiration from British silver heritage: restraint, ritual, weight, and polish. But
            kinSilver is built first for the larger US premium baby gifting market, where baby showers, grandparents,
            godparents, newborn arrivals, and first birthdays create everyday opportunities for meaningful keepsakes.
          </p>
          <p className="body-lg">
            This is not a spoon store. The spoon is the first symbol. The deeper product is memory, permanence, family
            continuity, and the quiet dignity of a gift that can be explained years later.
          </p>
        </div>
      </EditorialSection>
      <EditorialSection title="Brand language" dark intro={brand.narrativeLanguage.join(" · ")}>
        <div className="grid gap-4 md:grid-cols-3">
          {brand.emotionalThemes.map((theme) => (
            <div className="rounded-lg border border-cream/15 p-7 font-serif text-3xl capitalize" key={theme}>
              {theme}
            </div>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
