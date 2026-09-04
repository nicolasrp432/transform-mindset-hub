import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import type { ModuleItem } from "./types";

interface ModulesSplitCardProps {
  badge: string;
  title: string;
  description: ReactNode;
  benefits: readonly string[];
  modules: readonly ModuleItem[];
}

export default function ModulesSplitCard({
  badge,
  title,
  description,
  benefits,
  modules,
}: ModulesSplitCardProps) {
  return (
    <article className="rounded-[2rem] bg-white border border-border p-8 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-mark-on-soft mb-3">
            {badge}
          </p>
          <h3>{title}</h3>
          <p className="mt-4 text-text-muted">{description}</p>

          <ul className="mt-6 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-text-muted">
                <CheckCircle2
                  className="w-4 h-4 mt-1 text-mark shrink-0"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] bg-surface p-6 border border-border">
          <ol className="space-y-4">
            {modules.map((module, index) => (
              <li
                key={module.title}
                className="pb-4 border-b border-border last:border-b-0 last:pb-0"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-mark-soft text-mark-on-soft flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg">{module.title}</h4>
                    <p className="mt-1 text-sm text-text-muted">
                      {module.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
