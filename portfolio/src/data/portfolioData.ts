export interface Project {
  title: string;
  link: string;
  description: string;
  technologies: string[];
}

interface PortfolioData {
  pt: {
    hero: {
      greeting: string;
      introduction: string;
    };
    skillsTitle: string;
    academicProjectsTitle: string;
    personalProjectsTitle: string;
    academicProjects: Project[];
    personalProjects: Project[];
  };
  en: {
    hero: {
      greeting: string;
      introduction: string;
    };
    skillsTitle: string;
    academicProjectsTitle: string;
    personalProjectsTitle: string;
    academicProjects: Project[];
    personalProjects: Project[];
  };
}

export const data: PortfolioData = {
  pt: {
    hero: {
      greeting: "Olá, eu sou Vinicius Hashizume.",
      introduction: "Atualmente, estou cursando Ciência da Computação na Universidade Tecnológica Federal do Paraná - Campus Ponta Grossa.",
    },
    skillsTitle: "Habilidades e Tecnologias",
    academicProjectsTitle: "Projetos Acadêmicos",
    personalProjectsTitle: "Projetos Pessoais",
    academicProjects: [
      {
        title: "Sistema de Monitoramento de Alimentadores com integração à IA",
        link: "https://github.com/viniciushashizume/Projeto-Alimentador-LABRIOT-2",
        description: "Dispositivo IOT ESP8266 que realiza o monitoramento da quantidade de ração dos alimentadores da UTFPR, com integração á tecnologias de IA para determinar os horários de pico.",
        technologies: ["C++", "Arduino", "MQTT", "Node-Red", "Python", "Pytorch", "Flask"],
      },
      {
        title: "Aplicação de técnicas de IA no jogo PACMAN",
        link: "https://github.com/viniciushashizume/Cidades-Inteligentes---Pacman",
        description: "Utilizando a plataforma GameMaker, implementou-se algoritmos de busca heurística (A* e busca gulosa) com heurísticas específicas para o comportamento dos fantasmas.",
        technologies: ["Game Maker Language"],
      },
      {
        title: "Implementação de Parser e Lexer",
        link: "https://github.com/viniciushashizume/Compiladores-T1",
        description: "Analisador léxico e sintático para a Linguagem de Programação Básica, uma linguagem inspirada em uma calculadora avançada, porém estendida com estruturas de controle (FOR) e operadores lógicos (AND, OR).",
        technologies: ["Flex", "Bison", "C"],
      },
      {
        title: "Protótipo de Sistema de Gestão para Companhias Aéreas",
        link: "https://github.com/viniciushashizume/ProjetoIHC",
        description: "Extensão do protótipo de um Sistema de Gestão para Companhias Aéreas, com integração a banco de dados para realizar as operações de CRUD do sistema.",
        technologies: ["HTML", "CSS", "JavaScript", "mySQL"],
      },
    ],
    personalProjects: [
      {
        title: "Steam Dashboard",
        link: "https://github.com/viniciushashizume/SteamDashboard",
        description: "Dashboard para análise de perfis da Steam. Permite a busca de usuários tanto por seu ID numérico quanto por nome (vanity URL), exibindo informações do perfil, estatísticas gerais e um gráfico interativo com os 10 jogos mais jogados...",
        technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
      },
      {
        title: "Sistema de Gestão para Companhias Aéreas",
        link: "https://github.com/viniciushashizume/ProjetoAvioes",
        description: "Extensão do protótipo do Sistema de Gestão para Companhias Aéreas, com integração à banco de dados para realizar o CRUD do sistema.",
        technologies: ["HTML", "CSS", "JavaScript", "mySQL"],
      },
    ],
  },
  en: {
    hero: {
      greeting: "Hello, I'm Vinicius Hashizume.",
      introduction: "I am currently studying Computer Science at the Federal University of Technology - Paraná (UTFPR) - Ponta Grossa Campus.",
    },
    skillsTitle: "Skills and Technologies",
    academicProjectsTitle: "Academic Projects",
    personalProjectsTitle: "Personal Projects",
    academicProjects: [
      {
        title: "Feeder Monitoring System with AI Integration",
        link: "https://github.com/viniciushashizume/Projeto-Alimentador-LABRIOT-2",
        description: "An ESP8266 IoT device that monitors the feed levels in UTFPR's feeders, integrated with AI technologies to determine peak feeding times.",
        technologies: ["C++", "Arduino", "MQTT", "Node-Red", "Python", "Pytorch", "Flask"],
      },
      {
        title: "Application of AI Techniques in the PACMAN Game",
        link: "https://github.com/viniciushashizume/Cidades-Inteligentes---Pacman",
        description: "Using the GameMaker platform, heuristic search algorithms (A* and Greedy Search) were implemented with specific heuristics for the ghosts' behavior.",
        technologies: ["Game Maker Language"],
      },
      {
        title: "Parser and Lexer Implementation",
        link: "https://github.com/viniciushashizume/Compiladores-T1",
        description: "A lexical and syntactic analyzer for a Basic Programming Language, a language inspired by an advanced calculator but extended with control structures (FOR) and logical operators (AND, OR).",
        technologies: ["Flex", "Bison", "C"],
      },
      {
        title: "Airline Management System Prototype",
        link: "https://github.com/viniciushashizume/ProjetoIHC",
        description: "A prototype created based on 'Human-Computer Interaction' guidelines.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ],
    personalProjects: [
      {
        title: "Steam Dashboard",
        link: "https://github.com/viniciushashizume/SteamDashboard",
        description: "Dashboard for analyzing Steam profiles. It allows searching for users by both their numeric ID and their name (vanity URL), displaying profile information, general statistics, and an interactive chart with the 10 most played games...",
        technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
      },
      {
        title: "Airline Management System",
        link: "https://github.com/viniciushashizume/ProjetoAvioes",
        description: "Extension of an Airline Management System prototype, with database integration to perform the system's CRUD operations.",
        technologies: ["HTML", "CSS", "JavaScript", "mySQL"],
      },
    ],
  },
};