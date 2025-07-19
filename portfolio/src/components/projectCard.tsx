import type { Project } from '../data/portfolioData';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col">
      <div className="flex-grow">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <FiExternalLink className="text-gray-500 dark:text-gray-400" />
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tecnologias:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};