import { ArrowRight, LockKeyhole } from "lucide-react";
import { brand, products } from "../data/kinsilverOntology";

export function Hero() {
  const product = products[0];

  return (
    <header className="hero">
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav__brand" href="/">
          kin<span>Silver</span>
        </a>
        <div className="nav__links">
          <a href="#story">Story</a>
          <a href="#promise">Promise</a>
          <a href="#quality">Quality</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Premium personalized baby gifting</p>
          <h1>{brand.taglines[0]}</h1>
          <p className="hero__positioning">{brand.positioning}</p>
          <p className="hero__body">
            {product.description} Made for the first table stories a family keeps.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#coming-soon">
              Join the first list <ArrowRight size={18} aria-hidden="true" />
            </a>
            <span className="button button--locked" aria-disabled="true">
              <LockKeyhole size={17} aria-hidden="true" /> Checkout locked
            </span>
          </div>
        </div>

        <figure className="hero__image">
          <img src="/kinsilver-hero.png" alt="Silver-plated baby spoon presented in an aged cream gift box" />
          <figcaption>{brand.taglines[1]}</figcaption>
        </figure>
      </div>
    </header>
  );
}
