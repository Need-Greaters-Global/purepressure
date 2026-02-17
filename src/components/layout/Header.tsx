"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, Info, PenLine, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNav, servicesNav } from "@/data/navigation";

const iconMap = {
  Home,
  Info,
  PenLine,
  Mail,
} as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top tier — teal nav */}
      <div className="bg-[var(--color-primary)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Pure Pressure"
              width={150}
              height={71}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {mainNav.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 font-[family-name:var(--font-roboto-condensed)] text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                >
                  <Icon size={14} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Second tier — services nav (desktop) */}
      <div className="hidden border-b border-gray-200 bg-white md:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3">
          {servicesNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-[family-name:var(--font-roboto-condensed)] text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-[var(--color-primary)] underline underline-offset-4"
                    : "text-gray-700 hover:text-[var(--color-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl">
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4">
              <p className="mb-2 font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-widest text-gray-400">
                Navigation
              </p>
              {mainNav.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-2 font-[family-name:var(--font-roboto-condensed)] text-sm font-bold uppercase text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}

              <p className="mb-2 mt-4 font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-widest text-gray-400">
                Services
              </p>
              {servicesNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-md px-3 py-2 font-[family-name:var(--font-roboto-condensed)] text-sm font-bold uppercase transition-colors ${
                      isActive
                        ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
