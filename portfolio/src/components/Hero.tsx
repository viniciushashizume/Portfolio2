import { useLanguage } from '../contexts/languageContext';
import { data } from '../data/portfolioData';

export const Hero = () => {
  const { language } = useLanguage();
  const content = data[language].hero;

  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{content.greeting}</h2>
      {}
      <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        {content.introduction}
      </p>
    </section>
  );
};