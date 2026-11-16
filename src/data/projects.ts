type Language = "en" | "fr" | "ar";

export type Project = {
  id: number;
  title: string;
  description: Record<Language, string>;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SmartStock (Demo)",
    description: {
      en: "Example project card for testing the layout.",
      fr: "Exemple de projet pour tester la mise en page.",
      ar: "بطاقة مشروع تجريبية لاختبار التصميم.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/smartstock.jpg",
  },

  {
    id: 2,
    title: "AtlasEtiq (Concept)",
    description: {
      en: "A web application concept for managing product labels, references, and printing workflows.",
      fr: "Concept d'application web pour gérer les étiquettes produits, les références et les impressions.",
      ar: "تصور لتطبيق ويب لإدارة ملصقات المنتجات والمراجع وعمليات الطباعة.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/atlasetiq.jpg",
  },

  {
    id: 3,
    title: "ProdGroups",
    description: {
      en: "A web application for organizing production teams, managing work shifts, and tracking daily production goals.",
      fr: "Une application web pour organiser les équipes de production, gérer les horaires et suivre les objectifs quotidiens.",
      ar: "تطبيق ويب لتنظيم فرق الإنتاج وإدارة ورديات العمل ومتابعة أهداف الإنتاج اليومية.",
    },
    technologies: ["JavaScript"],
    image: "/images/projects/prodgroups.jpg",
  },
];
