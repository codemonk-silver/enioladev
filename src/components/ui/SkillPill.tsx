interface SkillPillProps {
  label: string;
}

export default function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium tracking-tight text-text-secondary bg-white/[0.05] border border-white/[0.08] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] cursor-default">
      {label}
    </span>
  );
}
