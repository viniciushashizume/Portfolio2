import { useLanguage } from './contexts/languageContext';
import { data } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/skills';
import { ProjectList } from './components/projectList';

function App() {
  const { language } = useLanguage();
  const content = data[language];

  return (
    // A cor de fundo principal já é definida aqui
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Skills />
        
        {/* Ambas as listas de projetos agora ficam dentro da mesma div e herdam a mesma cor de fundo */}
        <ProjectList 
            title={content.academicProjectsTitle} 
            projects={content.academicProjects} 
        />
        <ProjectList 
            title={content.personalProjectsTitle} 
            projects={content.personalProjects} 
        />
        
      </main>
    </div>
  )
}

export default App