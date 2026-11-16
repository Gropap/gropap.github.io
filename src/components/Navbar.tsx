/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import { useLanguage } from "@/context/LanguageContext";
const translations = { en, fr, ar };
// type Language = "en" | "fr" | "ar";
const languages = [
  { code: "en", name: "English", flag: "/flags/en.svg" },
  { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  { code: "ar", name: "العربية", flag: "/flags/ma.svg" },
] as const;
export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedLanguage = languages.find((item) => item.code === language)!;
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#061221] text-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        {/* Logo */}
        <a href="#home" className="whitespace-nowrap text-3xl font-extrabold">
          <span className="text-cyan-400">.</span>
          <span>HAJ </span>
          <span className="text-cyan-400">I'M</span>
        </a>
        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="hover:text-cyan-400 hover:underline">
            {t.navbar.home}
          </a>
          <a href="#about" className="hover:text-cyan-400 hover:underline">
            {t.navbar.about}
          </a>
          <a href="#skills" className="hover:text-cyan-400 hover:underline">
            {t.navbar.skills}
          </a>
          <a href="#projects" className="hover:text-cyan-400 hover:underline">
            {t.navbar.projects}
          </a>
          <a href="#contact" className="hover:text-cyan-400 hover:underline">
            {t.navbar.contact}
          </a>
        </div>
        {/* Language Selector */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            aria-expanded={isOpen}
            aria-label="Select language"
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-cyan-500 px-3 py-2 hover:bg-cyan-500/10"
          >
            <Image src={selectedLanguage.flag} alt="" width={24} height={18} />
            <span>{language.toUpperCase()}</span>
          </button>
          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full right-0 z-50 mt-2 w-40 rounded-lg border border-slate-700 bg-[#101d2d] p-2 shadow-xl">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setIsOpen(false);
                  }}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-md p-2 text-left hover:bg-slate-700"
                >
                  <Image
                    src={item.flag}
                    alt=""
                    width={24}
                    height={18}
                    style={{ width: "auto", height: "18px" }}
                  />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="cursor-pointer text-2xl text-white transition-colors hover:text-cyan-400 md:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          dir={language === "ar" ? "rtl" : "ltr"}
          className="absolute top-full right-0 left-0 z-40 flex flex-col gap-2 border-b border-cyan-500/20 bg-[#101d2d] p-6 shadow-xl md:hidden"
        >
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            {t.navbar.home}
          </a>

          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            {t.navbar.about}
          </a>

          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            {t.navbar.skills}
          </a>

          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            {t.navbar.projects}
          </a>

          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            {t.navbar.contact}
          </a>
        </div>
      )}
    </header>
  );
}
