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
          Performance-driven Frontend Engineer with 3+ years of experience engineering scalable user interfaces, reusable component ecosystems, and high-conversion client runtimes. Expert in React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS, with specialized proficiency in bridging the gap between complex interface designs and production-ready system logic. Demonstrated track record optimizing Core Web Vitals, streamlining complex application state lifecycles via Zustand and Redux Toolkit, and implementing rigid component schemas to ensure high scalability and seamless global browser performance.
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
