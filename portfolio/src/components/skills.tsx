import { useLanguage } from '../contexts/languageContext';
import { data } from '../data/portfolioData';

const skillsBadges = [
  "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/c-%23A8B9CC.svg?style=for-the-badge&logo=c&logoColor=white",
  "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
];

export const Skills = () => {
  const { language } = useLanguage();
  const title = data[language].skillsTitle;

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {skillsBadges.map((badge, index) => (
            <img key={index} src={badge} alt="Technology Badge" />
          ))}
        </div>
      </div>
    </section>
  );
};