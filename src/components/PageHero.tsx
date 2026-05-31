import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, intro, children, dark = false }: PageHeroProps) {
  return (
    <section className={dark ? "ink-band" : "bg-cream"}>
      <div className="page-shell grid gap-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1">{title}</h1>
          <p className={`mt-7 max-w-3xl text-xl leading-9 ${dark ? "text-cream/78" : "text-brown"}`}>{intro}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
