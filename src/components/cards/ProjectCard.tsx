import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SkillPill from "../ui/SkillPill";
import type { Project } from "../../data/site";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isLarge = project.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: 0.3 + index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      <div className="card-surface p-5 md:p-6 transition-all duration-500 hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] group">
        {/* Image Container */}
        <div
          className={`relative overflow-hidden rounded-[20px] bg-dark-bg-secondary ${
            isLarge ? "aspect-video" : "aspect-[4/3]"
          }`}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          />
          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4">
            <div className="flex gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white hover:bg-white/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3 h-3" />
                Live Site
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white hover:bg-white/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-3 h-3" />
                Source
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-2.5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display font-semibold text-lg md:text-xl text-text-primary">
              {project.title}
            </h3>
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider shrink-0 mt-1.5">
              {project.role}
            </span>
          </div>
          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <SkillPill key={t} label={t} />
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
