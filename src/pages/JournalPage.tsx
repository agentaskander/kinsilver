import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { EditorialSection } from "../components/EditorialSection";
import { journalArticles } from "../data/kinsilverOntology";

export function JournalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Editorial guides for heirloom baby gifting."
        intro="A search-led content hub for families and gift buyers who are looking for meaning, not more baby clutter."
      />
      <EditorialSection title="Starter articles">
        <div className="grid gap-5 md:grid-cols-2">
          {journalArticles.map((article) => (
            <Link className="editorial-card transition hover:border-gold" to={`/journal/${article.slug}`} key={article.slug}>
              <p className="eyebrow">{article.keywords[0]}</p>
              <h2 className="h3">{article.title}</h2>
              <p className="mt-4 leading-7 text-brown">{article.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink">
                Read article <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </EditorialSection>
    </main>
  );
}
