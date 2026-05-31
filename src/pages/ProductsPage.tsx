import { LockKeyhole } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { products } from "../data/kinsilverOntology";

export function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Future-ready product architecture"
        title="The first spoon opens the collection."
        intro="kinSilver starts focused, validates demand, and expands into a broader keepsake ecosystem without enabling ecommerce before supplier approval."
      />
      <EditorialSection title="First collection and roadmap">
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <article className="editorial-card" key={product.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{product.status}</p>
                  <h2 className="h3">{product.name}</h2>
                </div>
                <LockKeyhole className="text-silver" size={22} aria-label="Checkout disabled" />
              </div>
              <p className="mt-4 leading-7 text-brown">{product.summary}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-gold">{product.priceUsd}</p>
              <dl className="mt-5 grid gap-3 text-sm leading-6 text-brown">
                <div>
                  <dt className="font-bold text-ink">Plating</dt>
                  <dd>{product.plating}</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Packaging</dt>
                  <dd>{product.packaging}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
