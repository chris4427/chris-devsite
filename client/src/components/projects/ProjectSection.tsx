import { useQuery } from "@tanstack/react-query";

import { getAllProjects } from "@/api/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection: React.FC = () => {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });

  return (
    <section id="projects" className="my-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
            demo={project.demo}
            languages={project.languages}
          />
        ))}
      </div>
    </section>
  );
};
