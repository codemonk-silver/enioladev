import BaseCard from "./BaseCard";
import TimelineItem from "../ui/TimelineItem";
import { experience } from "../../data/site";

export default function ExperienceCard() {
  return (
    <BaseCard className="h-full flex flex-col" delay={0.45}>
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Label */}
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
          Experience
        </span>

        {/* Timeline */}
        <div className="flex-1">
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              role={item.role}
              company={item.company}
              period={item.period}
              summary={item.summary}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
