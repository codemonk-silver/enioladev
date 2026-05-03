interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col">
      <span className="font-display font-bold text-2xl text-text-primary">
        {value}
      </span>
      <span className="font-mono text-[11px] text-text-muted mt-1">
        {label}
      </span>
    </div>
  );
}
