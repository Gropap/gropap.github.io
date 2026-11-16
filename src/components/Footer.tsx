/* eslint-disable react/no-unescaped-entities */
"use client";
import { socialLinks } from "@/data/socialLinks";

import { useLanguage } from "@/context/LanguageContext";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const translations = { en, fr, ar };

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const year = new Date().getFullYear();

  return (
    <footer
      dir={language === "ar" ? "rtl" : "ltr"}
      className="border-t border-cyan-500/20 bg-[#061221] px-6 py-10 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Footer Top */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo + Description */}
          <div className="text-center md:text-start">
            <a href="#home" className="text-3xl font-extrabold">
              <span className="text-cyan-400">.</span>
              <span>HAJ </span>
              <span className="text-cyan-400">I'M</span>
            </a>

            <p className="mt-3 text-sm text-slate-400">{t.description}</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6 text-2xl text-slate-400">
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

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cyan-500/20 pt-6 md:flex-row">
          <p className="text-sm text-slate-400">
            © {year} HAJIM. {t.rights}
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label={t.backToTop}
            title={t.backToTop}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
