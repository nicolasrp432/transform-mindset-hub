import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface FinalCtaCardProps {
  icon: LucideIcon;
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  footnote?: ReactNode;
  children?: ReactNode;
}

export default function FinalCtaCard({
  icon: Icon,
  title,
  description,
  actions,
  footnote,
  children,
}: FinalCtaCardProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-white p-8 md:p-12 text-center">
      <Icon className="w-10 h-10 text-mark mx-auto mb-6" aria-hidden="true" />
      <h2>{title}</h2>
      <p className="mt-4 text-text-muted max-w-2xl mx-auto">{description}</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        {actions}
      </div>
      {footnote && (
        <p className="mt-6 text-xs text-text-subtle flex items-center justify-center gap-1.5">
          {footnote}
        </p>
      )}
      {children}
    </div>
  );
}
