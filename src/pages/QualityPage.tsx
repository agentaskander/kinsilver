import { ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { qualityOntology, supplierOntology } from "../data/kinsilverOntology";

export function QualityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Materials, plating, safety standards"
        title="Silver-plated to heirloom standard."
        intro=".999 fine silver over lead-free brass, with a 20 micron minimum plating target and zero nickel requirement. No solid sterling claim is made for the first collection."
      />
      <EditorialSection title="Quality ontology">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            qualityOntology.brassCore,
            qualityOntology.silverPlating,
            `${qualityOntology.minimumMicrons} micron minimum`,
            "Nickel-free requirement",
            qualityOntology.infantSafe,
            qualityOntology.engravingReady
          ].map((item) => (
            <div className="editorial-card" key={item}>
              <ShieldCheck className="text-gold" size={22} aria-hidden="true" />
              <p className="mt-4 leading-7 text-brown">{item}</p>
            </div>
          ))}
        </div>
      </EditorialSection>
      <EditorialSection title="Supplier gate" dark intro="Checkout remains disabled until every launch gate item is approved.">
        <div className="grid gap-3 md:grid-cols-2">
          {supplierOntology.launchGate.map((gate) => (
            <div className="rounded-md border border-cream/15 p-5 text-cream/82" key={gate}>
              {gate}
            </div>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
