"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "@/components/ProjectCard";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import { projects } from "@/data/projects";

const translations = { en, fr, ar };

// Temporary project for testing
// const projects = [
//   {
//     id: 1,
//     title: "SmartStock (Demo)",
//     description: "Example project card for testing the layout.",
//     technologies: ["React", "TypeScript", "Tailwind CSS"],
//   },
// ];

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section
      id="projects"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-[#061221] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-cyan-400">{t.subtitle}</p>

          <h2 className="text-4xl font-bold">{t.title}</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />

          <p className="mt-6 text-slate-400">{t.description}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description[language]}
              technologies={project.technologies}
              image={project.image}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              viewDemoLabel={t.viewDemo}
              viewCodeLabel={t.viewCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
