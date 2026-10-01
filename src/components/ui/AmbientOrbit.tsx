/** Shared decorative background; motion is optional and never intercepts input. */
export default function AmbientOrbit({
  variant = "diagram",
  tone = "sage",
}: {
  variant?: "portrait" | "diagram";
  tone?: "sage" | "gold";
}) {
  return (
    <div className={`ambient-orbit ambient-orbit--${variant} ambient-orbit--${tone}`} aria-hidden="true">
      <span className="ambient-orbit-disc" />
      <span className="ambient-orbit-ring" />
      <span className="ambient-orbit-trace" />
    </div>
  );
}
