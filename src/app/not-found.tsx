export default function NotFound() {
  return (
    <div className="hero-gradient flex min-h-[70vh] flex-col items-center justify-center px-4 pt-16 text-center">
      <p className="font-display text-8xl tracking-wider text-accent-pink">404</p>
      <h1 className="mt-4 font-display text-3xl tracking-wider">PAGE NOT FOUND</h1>
      <p className="mt-4 max-w-md text-muted">
        Looks like you took a wrong turn in Vice City. This page doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="mt-8 rounded bg-accent-pink px-8 py-3 text-sm font-bold uppercase tracking-widest text-black"
      >
        Back to Home
      </a>
    </div>
  );
}
