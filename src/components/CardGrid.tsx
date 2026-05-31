import type { LucideIcon } from "lucide-react";

type CardGridProps = {
  items: Array<{
    title: string;
    text: string;
    icon?: LucideIcon;
  }>;
};

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article className="editorial-card" key={item.title}>
            {Icon ? <Icon className="text-gold" size={24} aria-hidden="true" /> : null}
            <h3 className="h3 mt-5">{item.title}</h3>
            <p className="mt-3 leading-7 text-brown">{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}
