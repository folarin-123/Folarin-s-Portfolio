export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'secondary'
      ? 'border border-white/15 bg-white/[.04] text-slate-100 hover:border-accent hover:text-accent'
      : 'bg-accent text-slate-950 hover:brightness-110';
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${styles} ${className}`;
  return href ? (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
