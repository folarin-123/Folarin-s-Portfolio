export default function Card({ as: Tag = 'div', children, className = '' }) {
  return (
    <Tag className={`rounded-card border border-white/10 bg-panel/80 ${className}`}>{children}</Tag>
  );
}
