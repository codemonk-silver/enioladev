import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function BaseCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: BaseCardProps) {
  return (
    <motion.div
      className={`card-surface p-8 md:p-10 ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={delay}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: "rgba(255, 255, 255, 0.14)",
              boxShadow:
                "0 20px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
