import { motion } from "framer-motion";
import { Wrench, ArrowUpRight } from "lucide-react";
import BaseCard from "./BaseCard";
import SkillPill from "../ui/SkillPill";
import { currentlyBuilding } from "../../data/site";

export default function CurrentlyBuildingCard() {
  return (
    <BaseCard className="overflow-hidden" delay={0.35}>
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
            Currently Building
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
            <span className="font-mono text-[10px] text-amber-400 font-medium">
              In Progress
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] shrink-0">
              <Wrench className="w-5 h-5 text-text-secondary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl text-text-primary">
                {currentlyBuilding.title}
              </h3>
              <p className="text-sm text-text-secondary mt-1.5 leading-relaxed max-w-md">
                {currentlyBuilding.description}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-text-muted">Progress</span>
              <span className="font-mono text-[11px] text-text-secondary">{currentlyBuilding.progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-white/40 to-white/60"
                initial={{ width: 0 }}
                whileInView={{ width: `${currentlyBuilding.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.5 }}
              />
            </div>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 pt-1">
            {currentlyBuilding.tech.map((t) => (
              <SkillPill key={t} label={t} />
            ))}
          </div>

          {/* Link */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary group"
          >
            <span>Follow along on Twitter</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </BaseCard>
  );
}
