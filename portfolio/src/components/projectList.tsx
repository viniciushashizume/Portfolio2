import type { Project } from '../data/portfolioData';
import { ProjectCard } from './projectCard';

interface ProjectListProps {
  title: string;
  projects: Project[];
}

export const ProjectList = ({ title, projects }: ProjectListProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};