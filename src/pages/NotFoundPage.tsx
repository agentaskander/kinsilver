import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";

export function NotFoundPage() {
  return (
    <main>
      <PageHero eyebrow="404" title="This page is not part of the collection." intro="Return to kinSilver home." />
      <div className="page-shell pb-24">
        <Link className="button-primary" to="/">
          Go home
        </Link>
      </div>
    </main>
  );
}
