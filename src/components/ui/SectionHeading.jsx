export default function SectionHeading({ eyebrow, title, children, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-accent">{eyebrow}</p>
      <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-white">
        {title}
      </h2>
      {(children || description) && (
        <p className="mt-4 max-w-xl leading-relaxed text-slate-400">{description || children}</p>
      )}
    </div>
  );
}
