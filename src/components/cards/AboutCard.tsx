import BaseCard from "./BaseCard";
import StatItem from "../ui/StatItem";
import { stats } from "../../data/site";

export default function AboutCard() {
  return (
    <BaseCard className="h-full flex flex-col" delay={0.15}>
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Label */}
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
          About
        </span>

        {/* Heading */}
        <h2 className="font-display font-semibold text-2xl md:text-[28px] text-text-primary leading-tight">
          Building with intention
        </h2>

        {/* Bio */}
        <p className="text-[15px] text-text-secondary leading-relaxed">
          I am a Frontend Developer with a strong customer support mindset, focused on creating digital experiences that are clear, simple, and easy for people to use. My background in frontend development helps me understand how users interact with apps, where they may get confused, and how to explain technical issues in a calm and simple way.

          Beyond building interfaces, I care about helping users feel supported. I have experience communicating with customers, handling enquiries, explaining services, following up on issues, and making sure users feel heard and understood.

          As someone who has used Raenest for personal transactions for the past two years, I understand the importance of trust, clarity, speed, and reliable support in fintech. I bring both product understanding and human communication together to help customers solve problems with confidence.
        </p>

        {/* Philosophy */}
        <p className="text-sm text-text-muted italic leading-relaxed">
          Performance-first. Accessibility by default. Motion with purpose.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-4 mt-auto">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
