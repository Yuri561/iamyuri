import {
  Languages,
} from "lucide-react";

import { useState } from "react";

import { languages } from "../../data/language";

import SectionLabel from "../layout/SectionLabel";

export default function LanguagesSection() {
  const [
    showPortuguese,
    setShowPortuguese,
  ] = useState(false);

  return (
    <section
      id="languages"
      className="border-y border-white/[0.06] bg-[#090E13]"
    >
      <div className="mx-auto grid max-w-[1550px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:px-10 lg:py-24 xl:px-12">
        <div>
          <SectionLabel>
            Languages
          </SectionLabel>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Technology crosses
            <span className="block text-cyan-400">
              borders.
            </span>
          </h2>

          <button
            type="button"
            onClick={() =>
              setShowPortuguese(
                (current) => !current,
              )
            }
            className="mt-7 min-h-[44px] rounded-xl border border-green-500/20 bg-green-500/[0.05] px-4 text-xs font-black text-green-300"
          >
            🇧🇷{" "}
            {showPortuguese
              ? "Show English"
              : "Ler em português"}
          </button>
        </div>

        <div className="rounded-[28px] border border-white/[0.07] bg-[#0D1319] p-6 sm:p-8">
          <div className="flex items-center gap-3 border-b border-white/[0.07] pb-5">
            <Languages className="size-5 text-cyan-400" />

            <p className="font-black">
              Multilingual Communication
            </p>
          </div>

          {showPortuguese ? (
            <div className="mt-7">
              <p className="text-xl font-black text-green-300">
                Comunicação internacional
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Sou engenheiro de backend e
                especialista em automação
                predial, combinando Python,
                APIs, bancos de dados, BACnet
                e experiência prática com
                sistemas HVAC.
              </p>

              <p className="mt-4 leading-8 text-slate-500">
                Estou desenvolvendo meu
                português brasileiro para
                colaborar cada vez melhor com
                equipes e empresas no Brasil.
              </p>
            </div>
          ) : (
            <div className="mt-7 space-y-7">
              {languages.map(
                (language: (typeof languages)[number]) => (
                  <div
                    key={
                      language.language
                    }
                    className="border-b border-white/[0.07] pb-6 last:border-0"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="flex items-center gap-3 font-black">
                          <span className="text-xl">
                            {
                              language.flag
                            }
                          </span>

                          {
                            language.language
                          }
                        </p>

                        <p className="mt-2 text-xs leading-6 text-slate-600">
                          {
                            language.description
                          }
                        </p>
                      </div>

                      <span className="text-xs font-bold text-slate-500">
                        {language.level}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}