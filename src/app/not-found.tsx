export default function NotFound() {
  return (
    <main className="section flex-1 flex items-center justify-center">
      <div className="container-editorial text-center">
        <h1 className="font-serif text-6xl mb-4 text-text-muted">404</h1>
        <p className="text-text-muted text-lg mb-8">
          Esta página no existe o ha sido movida.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-md text-sm font-medium transition-opacity duration-[250ms] hover:opacity-90 cursor-pointer"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
