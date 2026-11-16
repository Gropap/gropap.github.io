"use client";

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";

import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

const translations = { en, fr, ar };

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const cards = [
    {
      title: t.web,
      description: t.webDescription,
      icon: FaLaptopCode,
    },
    {
      title: t.mobile,
      description: t.mobileDescription,
      icon: FaMobileAlt,
    },
    {
      title: t.design,
      description: t.designDescription,
      icon: FaPalette,
    },
  ];

  return (
    <section
      id="about"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-[#061221] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-cyan-400">{t.subtitle}</p>

          <h2 className="text-4xl font-bold">{t.title}</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />
        </div>

        {/* About Description */}
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-slate-300">
          {t.description}
        </p>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-cyan-500/20 bg-[#101d2d] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <card.icon className="mx-auto mb-5 text-4xl text-cyan-400" />

              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
