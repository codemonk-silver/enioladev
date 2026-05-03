import BaseCard from "./BaseCard";
import SkillPill from "../ui/SkillPill";
import { skills } from "../../data/site";

export default function SkillsCard() {
  return (
    <BaseCard className="h-full flex flex-col" delay={0.25}>
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Label */}
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
          Skills
        </span>

        {/* Heading */}
        <h2 className="font-display font-semibold text-2xl md:text-[28px] text-text-primary leading-tight">
          Technical toolkit
        </h2>

        {/* Skill Categories */}
        <div className="space-y-5 flex-1">
          {skills.map((category) => (
            <div key={category.category} className="space-y-2.5">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                {category.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
