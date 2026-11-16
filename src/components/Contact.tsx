"use client";

import { useLanguage } from "@/context/LanguageContext";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import type { SubmitEvent } from "react";
import { useState } from "react";

const translations = { en, fr, ar };

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();


    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log("Fields:", Array.from(formData.keys()));

    console.log("Has values:", {
      name: Boolean(formData.get("name")),
      email: Boolean(formData.get("email")),
      message: Boolean(formData.get("message")),
    });

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mljbjzog", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        console.log("Status:", response.status);
        console.log("Formspree Error:", errorMessage);
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }
  return (
    <section
      id="contact"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-[#061221] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-cyan-400">{t.subtitle}</p>

          <h2 className="text-4xl font-bold">{t.title}</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />

          <p className="mt-6 text-slate-400">{t.description}</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-cyan-500/20 bg-[#101d2d] p-8"
        >
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm">
              {t.name}
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder={t.name}
              required
              className="w-full rounded-lg border border-slate-700 bg-[#061221] px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm">
              {t.email}
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder={t.email}
              required
              className="w-full rounded-lg border border-slate-700 bg-[#061221] px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm">
              {t.message}
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder={t.message}
              required
              className="w-full resize-none rounded-lg border border-slate-700 bg-[#061221] px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* Button - functionality comes later */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full cursor-pointer rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : t.send}
          </button>

          <div aria-live="polite" className="text-center text-sm">
            {status === "success" && <p className="text-green-400">Message sent successfully!</p>}

            {status === "error" && (
              <p className="text-red-400">Failed to send message. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
