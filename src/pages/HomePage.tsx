import { ArrowRight, Archive, Baby, Gift, Package, PenLine, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CardGrid } from "../components/CardGrid";
import { EditorialSection } from "../components/EditorialSection";
import { WaitlistForm } from "../components/WaitlistForm";
import { brand, futureCollections, occasions, products, qualityOntology } from "../data/kinsilverOntology";

export function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <img className="h-full w-full object-cover opacity-72" src="/kinsilver-hero.png" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
        </div>
        <div className="page-shell relative grid min-h-[calc(100vh-5rem)] items-center py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="eyebrow">US-first premium heirloom gifting</p>
            <h1 className="display">{brand.homepageHero}</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-cream/82">{brand.homepageSubhead}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cream/68">
              Silver-plated to heirloom standard: .999 fine silver over lead-free brass, designed for personalization
              and lasting keepsake use.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="button-primary" to="/waitlist">
                Join the First Collection <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/25 px-5 py-3 text-sm font-bold text-cream transition hover:border-gold" to="/story">
                Read the Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EditorialSection
        eyebrow="Emotional brand statement"
        title="The spoon is the entry point. The real gift is memory."
        intro="kinSilver is built for families who want a first gift with a future: personal enough to feel intimate now, restrained enough to still feel beautiful decades later."
      >
        <CardGrid
          items={[
            { icon: Baby, title: "For a brand new life", text: "A named keepsake for the first chapter of family identity." },
            { icon: Archive, title: "For the family archive", text: "Small enough to keep, meaningful enough to rediscover." },
            { icon: Sparkles, title: "For quiet ceremony", text: "A silver heritage gesture without old-fashioned heaviness." }
          ]}
        />
      </EditorialSection>

      <EditorialSection
        eyebrow="Why people keep silver heirlooms"
        title="Silver catches light, but engraving carries the story"
        dark
        intro="Families keep silver not because it is loud, but because it feels set apart from ordinary things. A name, date, and giver turn that material signal into a personal record."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["arrival", "continuity", "belonging"].map((word) => (
            <div className="rounded-lg border border-cream/15 p-7" key={word}>
              <p className="font-serif text-4xl capitalize">{word}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection eyebrow="Personalization examples" title="Names, initials, dates, and dedications">
        <div className="grid gap-4 md:grid-cols-4">
          {["Amelia Rose", "A.R. 06.14.26", "From Nana", "First table, first story"].map((example) => (
            <div className="editorial-card flex min-h-32 items-center justify-center text-center font-serif text-2xl" key={example}>
              {example}
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="Quality standards"
        title="Heirloom-quality plating, stated plainly"
        intro={`${qualityOntology.silverPlating}, ${qualityOntology.minimumMicrons} micron minimum, over a ${qualityOntology.brassCore.toLowerCase()}.`}
      >
        <CardGrid
          items={[
            { icon: ShieldCheck, title: "Material clarity", text: ".999 fine silver over lead-free brass. No false sterling claim." },
            { icon: PenLine, title: "Engraving-ready", text: "Smooth handle reserved for precise laser personalization." },
            { icon: Package, title: "Gift presentation", text: "Rigid keepsake packaging designed for premium baby gifting." }
          ]}
        />
      </EditorialSection>

      <EditorialSection eyebrow="Occasion categories" title="Built around the US gifting calendar">
        <div className="grid gap-4 md:grid-cols-5">
          {occasions.slice(0, 5).map((occasion) => (
            <Link className="editorial-card transition hover:border-gold" to="/occasions" key={occasion.id}>
              <Gift className="text-gold" size={20} aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl font-semibold">{occasion.name}</h3>
              <p className="mt-3 text-sm leading-6 text-brown">{occasion.headline}</p>
            </Link>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="Packaging experience"
        title="A box made to stay with the object"
        dark
        intro="Aged cream, warm gold, and a material transparency card turn delivery into a first moment of ceremony."
      >
        <img className="aspect-[2.2] w-full rounded-lg object-cover shadow-editorial" src="/kinsilver-hero.png" alt="kinSilver spoon and keepsake packaging" />
      </EditorialSection>

      <EditorialSection
        eyebrow="Family legacy narrative"
        title="Given once. Understood again later."
        intro="The best heirlooms do not ask a child to understand them immediately. They wait. Years later, the engraving explains who gave it, when, and why it mattered."
      >
        <blockquote className="max-w-4xl border-l-4 border-gold pl-7 font-serif text-4xl leading-tight text-ink">
          {brand.primaryLine}
        </blockquote>
      </EditorialSection>

      <EditorialSection eyebrow="Future collection preview" title="Beyond the first spoon">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {futureCollections.map((collection) => (
            <div className="rounded-md border border-brown/15 bg-[#fffaf2]/70 p-5 text-sm font-bold uppercase tracking-[0.12em] text-brown" key={collection}>
              {collection}
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="Waitlist"
        title="Validate demand before inventory scales"
        intro="Join the first collection list for early access. Checkout remains closed until supplier confirmation and sample approval are complete."
      >
        <WaitlistForm />
      </EditorialSection>
    </main>
  );
}
