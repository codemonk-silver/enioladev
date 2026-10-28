import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/site";

export default function FeaturedProjects() {
  const largeProject = projects.find((p) => p.size === "large");
  const mediumProjects = projects.filter((p) => p.size === "medium");
  const smallProjects = projects.filter((p) => p.size === "small");

  return (
    <section id="projects" className="card-surface p-6 md:p-10">
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
          <ProjectCard project={largeProject} />
        )}

        {/* Medium Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {mediumProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Small Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {smallProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
