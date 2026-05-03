interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  summary: string;
  isLast?: boolean;
}

export default function TimelineItem({
  role,
  company,
  period,
  summary,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-6 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[3px] top-2 bottom-0 w-px bg-white/[0.08]" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-2 w-[7px] h-[7px] rounded-full bg-text-muted" />
      <div className="space-y-1">
        <h4 className="font-display font-semibold text-lg text-text-primary">
          {role}
        </h4>
        <p className="text-sm text-text-secondary">{company}</p>
        <p className="font-mono text-xs text-text-muted">{period}</p>
        <p className="text-sm text-text-muted pt-1">{summary}</p>
      </div>
    </div>
  );
}
