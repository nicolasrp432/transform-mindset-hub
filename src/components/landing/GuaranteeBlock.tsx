import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

interface GuaranteeBlockProps {
  title?: string;
  children: ReactNode;
  signature?: string;
  signatureRole?: string;
}

export default function GuaranteeBlock({
  title = "Garantía de satisfacción de 7 días",
  children,
  signature,
  signatureRole,
}: GuaranteeBlockProps) {
  return (
    <div className="max-w-3xl mx-auto rounded-[2rem] bg-white border border-border p-8 md:p-12 text-center shadow-sm">
      <div className="w-16 h-16 mx-auto rounded-full bg-mark-soft flex items-center justify-center mb-6">
        <ShieldCheck className="w-8 h-8 text-mark-on-soft" aria-hidden="true" />
      </div>
      <h2>{title}</h2>
      <div className="mt-4 text-text-muted text-lg leading-relaxed">{children}</div>
      {signature && (
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-text-muted mb-1">Con cariño,</p>
          <p className="font-serif text-2xl text-primary">{signature}</p>
          {signatureRole && (
            <p className="mt-1 text-sm text-text-subtle">{signatureRole}</p>
          )}
        </div>
      )}
    </div>
  );
}
