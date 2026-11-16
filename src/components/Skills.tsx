"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

import { useLanguage } from "@/context/LanguageContext";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";

import { FaLaptopCode, FaMobileAlt, FaServer, FaTools } from "react-icons/fa";

const translations = { en, fr, ar };

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skillIcons: Record<string, IconType> = {
    React: SiReact,
    "Next.js": SiNextdotjs,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    "Tailwind CSS": SiTailwindcss,

    Flutter: SiFlutter,
    Dart: SiDart,
    Kotlin: SiKotlin,

    "Node.js": SiNodedotjs,
    NestJS: SiNestjs,
    PostgreSQL: SiPostgresql,

    Git: SiGit,
    GitHub: SiGithub,
    "VS Code": VscVscode,
  };

  // Skills Categories
  const categories = [
    {
      id: "web",
      title: t.web,
      icon: FaLaptopCode,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      id: "mobile",
      title: t.mobile,
      icon: FaMobileAlt,
      skills: ["Flutter", "Dart", "Kotlin"],
    },
    {
      id: "backend",
      title: t.backend,
      icon: FaServer,
      skills: ["Node.js", "NestJS", "PostgreSQL"],
    },
    {
      id: "tools",
      title: t.tools,
      icon: FaTools,
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-[#061221] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-cyan-400">{t.subtitle}</p>

          <h2 className="text-4xl font-bold">{t.title}</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">{t.description}</p>
        </div>

        {/* Skills Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-cyan-500/20 bg-[#101d2d] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              {/* Category Title */}
              <div className="mb-6 flex items-center gap-4">
                <category.icon className="text-3xl text-cyan-400" />

                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skillIcons[skill];

                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-[#061221] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                    >
                      {Icon && <Icon className="text-lg text-cyan-400" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
