import type { IconItem } from "./types";

interface PainPointGridProps {
  items: readonly IconItem[];
}

export default function PainPointGrid({ items }: PainPointGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-mark-soft flex items-center justify-center mb-5">
              <Icon
                className="w-6 h-6 text-mark-on-soft"
                aria-hidden="true"
              />
            </div>
            <h3 className="mb-3">{item.title}</h3>
            <p className="text-text-muted">{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}
