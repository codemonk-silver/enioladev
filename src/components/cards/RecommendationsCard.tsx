import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import BaseCard from "./BaseCard";
import { recommendations } from "../../data/site";

export default function RecommendationsCard() {
  return (
    <BaseCard className="overflow-hidden" delay={0.4}>
      <div className="space-y-6">
        {/* Header */}
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
          Recommendations
        </span>

        {/* Testimonials */}
        <div className="space-y-5">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <Quote className="w-4 h-4 text-text-muted/40 mb-2" />
              <p className="text-sm text-text-secondary leading-relaxed italic">
                "{rec.text}"
              </p>
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <p className="font-display font-semibold text-sm text-text-primary">
                  {rec.name}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {rec.role} at {rec.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
