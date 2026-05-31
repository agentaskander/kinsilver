import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { faq } from "../data/kinsilverOntology";

export function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Clear answers before the first collection opens."
        intro="Material honesty and launch discipline matter. kinSilver will not enable checkout until the supplier gate is complete."
      />
      <EditorialSection title="Questions">
        <div className="grid gap-3">
          {faq.map((item) => (
            <details className="rounded-lg border border-brown/15 bg-[#fffaf2]/70 p-6" key={item.question}>
              <summary className="cursor-pointer font-serif text-2xl font-semibold">{item.question}</summary>
              <p className="mt-4 leading-7 text-brown">{item.answer}</p>
            </details>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
