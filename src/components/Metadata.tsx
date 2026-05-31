import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routes, seoOntology } from "../data/kinsilverOntology";

export function Metadata() {
  const location = useLocation();

  useEffect(() => {
    const route = routes.find((item) => item.path === location.pathname) ?? routes[0];
    document.title = route.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", route.description);
    const existing = document.querySelector("#kinsilver-jsonld");
    existing?.remove();
    const script = document.createElement("script");
    script.id = "kinsilver-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(seoOntology.jsonLd);
    document.head.appendChild(script);
  }, [location.pathname]);

  return null;
}
