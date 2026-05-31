import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { brand, journalArticles, routes, supplierOntology } from "./data/kinsilverOntology";

function renderRoute(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe("kinSilver routed site", () => {
  it("keeps checkout disabled while supplier gate is blocked", () => {
    expect(brand.checkoutEnabled).toBe(false);
    expect(supplierOntology.checkoutGate).toBe("blocked");
  });

  it("renders US-first homepage positioning with honest plating language", () => {
    renderRoute("/");
    expect(screen.getByRole("heading", { level: 1, name: /sterling silver memories/i })).toBeInTheDocument();
    expect(screen.getAllByText(/silver-plated to heirloom standard/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/US-first premium heirloom gifting/i)).toBeInTheDocument();
    expect(screen.queryByText(/solid sterling baby spoon/i)).not.toBeInTheDocument();
  });

  it("defines all requested top-level routes in ontology", () => {
    const paths = routes.map((route) => route.path);
    expect(paths).toEqual(expect.arrayContaining(["/", "/story", "/products", "/personalization", "/quality", "/occasions", "/journal", "/faq", "/waitlist"]));
  });

  it("renders a journal article from ontology", () => {
    renderRoute(`/journal/${journalArticles[0].slug}`);
    expect(screen.getByRole("heading", { level: 1, name: journalArticles[0].title })).toBeInTheDocument();
  });
});
