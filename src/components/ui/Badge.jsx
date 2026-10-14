export default function Badge({ children }) {
  return (
    <span className="rounded-lg border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
      {children}
    </span>
  );
}
