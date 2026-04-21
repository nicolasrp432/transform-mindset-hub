export default function Loading() {
  return (
    <div
      className="flex-1 flex items-center justify-center min-h-[60vh]"
      aria-label="Cargando contenido"
    >
      <div className="w-8 h-[1px] bg-secondary animate-pulse" />
    </div>
  );
}
