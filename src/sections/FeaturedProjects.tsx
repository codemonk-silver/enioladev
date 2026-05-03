import { motion } from "framer-motion";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/site";

export default function FeaturedProjects() {
  const largeProject = projects.find((p) => p.size === "large");
  const mediumProjects = projects.filter((p) => p.size === "medium");
  const smallProjects = projects.filter((p) => p.size === "small");

  return (
    <motion.section
      id="projects"
      className="card-surface p-6 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
            Featured Projects
          </span>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-text-primary mt-2">
            Selected work
          </h2>
        </div>
        <span className="font-mono text-[11px] text-text-muted hidden sm:block">
          {projects.length} projects
        </span>
      </div>

      {/* Grid */}
      <div className="space-y-6">
        {/* Large Featured */}
        {largeProject && (
          <ProjectCard project={largeProject} index={0} />
        )}

        {/* Medium Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {mediumProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx + 1} />
          ))}
        </div>

        {/* Small Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {smallProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx + 3} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
