import { useTheme } from '../contexts/themeContext';
import { useLanguage } from '../contexts/languageContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Portfólio</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-md text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {language === 'pt' ? 'EN 🇬🇧' : 'PT 🇧🇷'}
        </button>
      </div>
    </header>
  );
};