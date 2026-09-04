import { person } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-sm text-ink-dim">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js, Tailwind &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
