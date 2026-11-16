"use client";
import { socialLinks } from "@/data/socialLinks";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";

const translations = { en, fr, ar };
export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#061221]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/images/bg-hero.jpg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#061221] via-[#061221]/80 to-transparent" />
      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        {/* Left Side */}
        <div dir={language === "ar" ? "rtl" : "ltr"} className="text-start">
          <p className="mb-4 text-lg text-cyan-400">{t.greeting}</p>
          <h1 className="text-5xl font-extrabold text-white md:text-6xl">
            {t.title1}
            <span className="block text-cyan-400">{t.title2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t.description}</p>

          {/* Hero Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* View Projects */}
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              {t.viewProjects}
            </a>

            {/* Download CV */}
            <a
              href="/cv/HAJIM_CV.pdf"
              download
              className="rounded-lg border border-slate-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              {t.downloadCV}
            </a>
          </div>
        </div>
        {/* Right Side - Profile */}
        <div className="flex justify-center">
          <div className="rounded-full bg-cyan-400/20 p-3 shadow-[0_0_90px_rgba(6,182,212,0.3)]">
            <Image
              src="/images/profile-developer.png"
              alt="HAJIM - Software Developer"
              width={420}
              height={420}
              priority
              className="aspect-square rounded-full border-2 border-cyan-400/40 object-cover"
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex items-center gap-6 text-slate-400">
          {/* GitHub */}
          <a href={socialLinks.github}>
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a href={socialLinks.linkedin}>
            <FaLinkedin />
          </a>

          {/* Email */}
          <a href={socialLinks.email}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
