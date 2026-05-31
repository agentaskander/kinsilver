import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { WaitlistForm } from "../components/WaitlistForm";
import { launchActions, supplierOntology } from "../data/kinsilverOntology";

export function WaitlistPage() {
  return (
    <main>
      <PageHero
        eyebrow="First collection"
        title="Join before inventory scales."
        intro="kinSilver is validating demand before opening checkout. Early access begins only after supplier confirmation, approved samples, verified plating, food-safety documentation, and landed cost validation."
        dark
      >
        <WaitlistForm />
      </PageHero>
      <EditorialSection title="Launch readiness logic">
        <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
          <div className="editorial-card">
            <p className="eyebrow">Checkout gate</p>
            <p className="font-serif text-5xl capitalize">{supplierOntology.checkoutGate}</p>
          </div>
          <div className="editorial-card">
            <p className="eyebrow">Next actions</p>
            <ul className="grid gap-3 pl-5 text-brown">
              {launchActions.map((action) => (
                <li className="list-disc leading-7" key={action}>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </EditorialSection>
    </main>
  );
}
