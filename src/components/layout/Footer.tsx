import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-sm text-white/70 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Pure Pressure. All Rights Reserved.</p>
        <nav className="flex items-center gap-4">
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
          <span className="text-white/30">|</span>
          <Link href="/site-map" className="transition-colors hover:text-white">
            Sitemap
          </Link>
        </nav>
      </div>
    </footer>
  );
}
