import {
  Globe2,
  Languages,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { languages } from "../../data/language";

import SectionLabel from "../layout/SectionLabel";

export default function LanguagesSection() {
  const [activeLanguage, setActiveLanguage] =
    useState(languages[0].language);

  const [showPortuguese, setShowPortuguese] =
    useState(false);

  const selectedLanguage = useMemo(
    () =>
      languages.find(
        (language) =>
          language.language === activeLanguage,
      ) ?? languages[0],
    [activeLanguage],
  );

  return (
    <section
      id="languages"
      className="border-y border-white/[0.06] bg-[#090E13]"
    >
      <div className="mx-auto max-w-[1550px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">

        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>
              Languages & Communication
            </SectionLabel>

            <h2 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Different languages.
              <span className="block text-cyan-400">
                Same engineering mindset.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-slate-500">
            Communication matters just as much
            as technical ability. I work across
            different languages and cultures,
            which helps me collaborate in both
            technical and international
            environments.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MAIN LANGUAGE CONSOLE                                        */}
        {/* ============================================================ */}

        <div className="mt-10 overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#0D1319]">

          {/* TOP BAR */}

          <div className="flex flex-col gap-4 border-b border-white/[0.07] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

            <div className="flex items-center gap-4">
              <div className="grid size-11 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05]">
                <Languages className="size-5 text-cyan-400" />
              </div>

              <div>
                <p className="font-black">
                  Language Console
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  Select a language to explore
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.04] px-3 py-2">
              <span className="size-2 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300">
                Multilingual
              </span>
            </div>
          </div>

          {/* BODY */}

          <div className="grid lg:grid-cols-[.42fr_.58fr]">

            {/* ======================================================== */}
            {/* LANGUAGE SELECTOR                                        */}
            {/* ======================================================== */}

            <div className="border-b border-white/[0.07] p-5 sm:p-7 lg:border-b-0 lg:border-r">

              <p className="mb-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-700">
                Select language
              </p>

              <div className="space-y-2">
                {languages.map((language) => {
                  const selected =
                    activeLanguage ===
                    language.language;

                  return (
                    <button
                      key={language.language}
                      type="button"
                      onClick={() => {
                        setActiveLanguage(
                          language.language,
                        );

                        setShowPortuguese(false);
                      }}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        p-4
                        text-left
                        transition-all
                        duration-300

                        ${
                          selected
                            ? "border-cyan-400/25 bg-cyan-400/[0.06]"
                            : "border-transparent bg-white/[0.018] hover:border-white/[0.07] hover:bg-white/[0.03]"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`
                            grid
                            size-11
                            place-items-center
                            rounded-xl
                            text-2xl

                            ${
                              selected
                                ? "bg-cyan-400/10"
                                : "bg-white/[0.04]"
                            }
                          `}
                        >
                          {language.flag}
                        </div>

                        <div>
                          <p
                            className={`text-sm font-black ${
                              selected
                                ? "text-white"
                                : "text-slate-400"
                            }`}
                          >
                            {language.language}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-700">
                            {language.level}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`size-2 rounded-full ${
                          selected
                            ? "bg-cyan-400"
                            : "bg-slate-800"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ======================================================== */}
            {/* DETAIL PANEL                                             */}
            {/* ======================================================== */}

            <div className="p-6 sm:p-8 lg:p-10">

              {!showPortuguese ? (
                <>
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">
                          {selectedLanguage.flag}
                        </span>

                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-400">
                            Active Language
                          </p>

                          <h3 className="mt-1 text-3xl font-black">
                            {selectedLanguage.language}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <span className="w-fit rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-slate-400">
                      {selectedLanguage.level}
                    </span>
                  </div>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
                    {
                      selectedLanguage.description
                    }
                  </p>

                  {/* ROLE OF LANGUAGE */}

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <MessageCircle className="size-5 text-cyan-400" />

                      <p className="mt-4 text-sm font-black">
                        Communication
                      </p>

                      <p className="mt-2 text-xs leading-6 text-slate-600">
                        Used across technical,
                        professional, and
                        interpersonal conversations.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <Globe2 className="size-5 text-violet-400" />

                      <p className="mt-4 text-sm font-black">
                        Global Collaboration
                      </p>

                      <p className="mt-2 text-xs leading-6 text-slate-600">
                        Helps me work across
                        different cultures, teams,
                        and international
                        environments.
                      </p>
                    </div>
                  </div>

                  {/* PORTUGUESE ACTION */}

                  {selectedLanguage.language ===
                    "Portuguese" && (
                    <button
                      type="button"
                      onClick={() =>
                        setShowPortuguese(true)
                      }
                      className="
                        mt-7
                        inline-flex
                        min-h-[46px]
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-green-500/20
                        bg-green-500/[0.05]
                        px-4
                        text-xs
                        font-black
                        text-green-300
                        transition
                        hover:border-green-400/40
                        hover:bg-green-500/[0.09]
                      "
                    >
                      <Sparkles className="size-4" />

                      Ver apresentação em português
                    </button>
                  )}
                </>
              ) : (

                /* ==================================================== */
                /* PORTUGUESE MINI PROFILE                              */
                /* ==================================================== */

                <>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">
                      🇧🇷
                    </span>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-green-400">
                        Perfil em Português
                      </p>

                      <h3 className="mt-1 text-3xl font-black">
                        Prazer, eu sou Yuri.
                      </h3>
                    </div>
                  </div>

                  <p className="mt-7 leading-8 text-slate-400">
                    Sou desenvolvedor de backend
                    e especialista em automação
                    predial, combinando Python,
                    APIs, bancos de dados,
                    BACnet, redes e experiência
                    prática com sistemas HVAC.
                  </p>

                  <p className="mt-4 leading-8 text-slate-500">
                    Minha carreira começou na
                    instalação de sistemas HVAC,
                    depois passei por manutenção
                    residencial e comercial,
                    controles industriais e
                    automação predial.
                  </p>

                  <p className="mt-4 leading-8 text-slate-500">
                    Hoje, aplico essa experiência
                    prática no desenvolvimento de
                    software e na integração entre
                    sistemas digitais e
                    infraestrutura física.
                  </p>

                  <div className="mt-7 rounded-2xl border border-green-500/10 bg-green-500/[0.04] p-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-green-400">
                      Objetivo profissional
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      Continuar crescendo como
                      engenheiro de backend e
                      sistemas, colaborando com
                      equipes internacionais e
                      empresas no Brasil.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowPortuguese(false)
                    }
                    className="mt-6 text-xs font-black text-cyan-400"
                  >
                    ← Voltar
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM STRIP                                                 */}
          {/* ============================================================ */}

          <div className="grid border-t border-white/[0.07] sm:grid-cols-3">
            <div className="p-5">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-700">
                Native
              </p>

              <p className="mt-2 font-black">
                Haitian Creole
              </p>
            </div>

            <div className="border-t border-white/[0.07] p-5 sm:border-l sm:border-t-0">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-700">
                Professional
              </p>

              <p className="mt-2 font-black">
                English
              </p>
            </div>

            <div className="border-t border-white/[0.07] p-5 sm:border-l sm:border-t-0">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-700">
                Developing
              </p>

              <p className="mt-2 font-black text-green-300">
                Português 🇧🇷
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}