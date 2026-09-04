import { cn } from "@/lib/utils";
import type { IconItem } from "./types";

interface FeatureGridProps {
  items: readonly IconItem[];
  columns?: 3 | 4;
}

export default function FeatureGrid({ items, columns = 4 }: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 border border-border shadow-sm text-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-mark-soft flex items-center justify-center mx-auto mb-4">
              <Icon
                className="w-7 h-7 text-mark-on-soft"
                aria-hidden="true"
              />
            </div>
            <h4 className="mb-2">{item.title}</h4>
            <p className="text-sm text-text-muted">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
