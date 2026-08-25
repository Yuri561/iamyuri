import {
  Download,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

import { navItems } from "../../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070B10]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-[74px] max-w-[1550px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">
        <a href="#">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-black tracking-[-0.05em]">
              YURI
            </span>

            <span className="font-black text-cyan-400">
              /
            </span>

            <span className="text-xl font-black tracking-[-0.05em]">
              PL
            </span>
          </div>

          <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.25em] text-slate-600">
            Software • Systems • Automation
          </p>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map(
            ([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[11px] font-bold text-slate-500 transition hover:text-white"
              >
                {label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-10 items-center gap-2 rounded-xl border border-white/[0.08] px-4 text-xs font-bold text-slate-400 transition hover:text-white sm:flex"
          >
            <Mail className="size-3.5" />
            Contact
          </a>

          <a
            href="/myres.pdf"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-xs font-black text-[#071014]"
          >
            <Download className="size-3.5" />
            Resume
          </a>

          <button
            type="button"
            onClick={() =>
              setMenuOpen(
                (current) => !current,
              )
            }
            className="grid size-10 place-items-center rounded-xl border border-white/[0.08] xl:hidden"
          >
            {menuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#0A0F15] p-4 xl:hidden">
          <div className="mx-auto grid max-w-[1550px] gap-1">
            {navItems.map(
              ([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-400 hover:bg-white/[0.04] hover:text-white"
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}