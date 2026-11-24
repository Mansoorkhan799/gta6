"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { locales, localeMeta, localePath, stripLocaleFromPathname, type Locale } from "@/i18n/config";

export function LanguageSwitcher({
  current,
  label,
  compact = false,
}: {
  current: Locale;
  label: string;
  compact?: boolean;
}) {
  const pathname = usePathname() || "/";
  const { path } = stripLocaleFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const currentLabel = localeMeta[current].label;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${compact ? "" : "w-full"}`}>
      <button
        type="button"
        className={`inline-flex min-h-[40px] items-center gap-2 rounded border border-border bg-surface-elevated px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:border-accent-teal hover:text-accent-teal ${
          compact ? "" : "w-full justify-between"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={label}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="font-bold text-accent-pink">{current.toUpperCase()}</span>
          <span className="truncate normal-case tracking-normal text-foreground">{currentLabel}</span>
        </span>
        <svg
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className={`absolute z-50 mt-2 max-h-72 overflow-y-auto rounded border border-border bg-background py-1 shadow-xl ${
            compact ? "right-0 w-56" : "left-0 right-0"
          }`}
        >
          {locales.map((locale) => {
            const active = locale === current;
            return (
              <li key={locale} role="option" aria-selected={active}>
                <Link
                  href={localePath(locale, path === "/" ? "" : path)}
                  hrefLang={localeMeta[locale].htmlLang}
                  className={`flex items-center justify-between gap-3 px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-accent-pink/10 text-accent-pink"
                      : "text-muted hover:bg-surface-elevated hover:text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="truncate">{localeMeta[locale].label}</span>
                  <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider">
                    {locale}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
