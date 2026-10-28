import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SkillPill from "../ui/SkillPill";
import type { Project } from "../../data/site";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isLarge = project.size === "large";

  return (
    <div>
      <div className="card-surface interactive-card p-5 md:p-6 group">
        {/* Image Container */}
        <div
          className={`relative overflow-hidden rounded-[20px] bg-dark-bg-secondary ${
            isLarge ? "aspect-video" : "aspect-[4/3]"
          }`}
        >
          <img
            src={project.image}
            srcSet={`${project.image.replace("-1200.webp", "-640.webp")} 640w, ${project.image} 1200w`}
            sizes={isLarge ? "(min-width: 1024px) 1050px, (min-width: 768px) 90vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            alt={project.title}
            width={1200}
            height={540}
            decoding="async"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          />
          {/* Hover overlay with links */}
          <div className="project-hover-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4">
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
    </div>
  );
}
