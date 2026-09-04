import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "./types";

interface FaqAccordionProps {
  items: readonly FaqItem[];
  className?: string;
}

/** FAQ con `<details>` nativo: accesible y sin JavaScript. */
export default function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <div className={cn("space-y-4 max-w-3xl", className)}>
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl bg-white border border-border p-5 transition-shadow duration-300 hover:shadow-sm"
        >
          <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
            <span className="font-medium">{item.question}</span>
            <span
              className="transition-transform duration-300 group-open:rotate-180 shrink-0"
              aria-hidden="true"
            >
              <ArrowRight className="w-4 h-4 -rotate-90" />
            </span>
          </summary>
          <p className="mt-4 text-text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
