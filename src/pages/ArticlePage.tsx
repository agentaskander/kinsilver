import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { journalArticles } from "../data/kinsilverOntology";

export function ArticlePage() {
  const { slug } = useParams();
  const article = journalArticles.find((item) => item.slug === slug) ?? journalArticles[0];

  return (
    <main>
      <PageHero eyebrow={article.keywords[0]} title={article.title} intro={article.description} />
      <article className="page-shell pb-24">
        <div className="mx-auto max-w-3xl">
          {article.body.map((paragraph) => (
            <p className="mb-7 text-xl leading-9 text-brown" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="mt-12 border-t border-brown/15 pt-8">
            <p className="eyebrow">Related</p>
            <div className="flex flex-wrap gap-3">
              {article.relatedRoutes.map((route) => (
                <Link className="button-secondary" to={route} key={route}>
                  {route.replace("/", "") || "home"}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
