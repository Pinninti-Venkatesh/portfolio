import Reveal from "./ui/Reveal";

export default function SectionHeading({
  index,
  title,
  lead,
}: {
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
          <span className="inline-block h-px w-6 bg-accent" />
          {index}
        </p>
        <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] font-semibold tracking-[-0.02em] text-glow">
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-2xl text-ink-mid">{lead}</p>}
      </div>
    </Reveal>
  );
}
