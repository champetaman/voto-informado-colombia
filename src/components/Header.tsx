"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  ["Inicio", "/"],
  ["Cuestionario", "/cuestionario"],
  ["Comparar", "/comparar"],
  ["Metodología", "/metodologia"],
  ["Fuentes", "/fuentes"],
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <nav
        className="mx-auto max-w-6xl px-4 py-3 sm:py-4"
        aria-label="Navegación principal"
      >
        <div className="grid grid-cols-[2.75rem_1fr_2.75rem] items-center gap-2 sm:flex sm:justify-between">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink hover:bg-paper sm:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="/"
            className="justify-self-center text-center text-lg font-bold tracking-tight text-ink sm:justify-self-auto sm:text-3xl"
            onClick={() => setIsOpen(false)}
          >
            Compara tu Voto
          </Link>

          <div className="justify-self-end sm:hidden">
            <ThemeToggle />
          </div>

          <div className="hidden items-center gap-2 text-base text-slateui sm:flex">
            {navItems.map(([label, href]) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`min-h-11 rounded-md px-3 py-2 hover:bg-paper hover:text-ink ${
                    isActive ? "bg-paper text-ink" : ""
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className="mt-3 grid gap-1 border-t border-line pt-3 sm:hidden"
          >
            {navItems.map(([label, href]) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`min-h-11 rounded-md px-3 py-2 text-sm font-semibold ${
                    isActive
                      ? "bg-civic text-white"
                      : "text-slateui hover:bg-paper hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
