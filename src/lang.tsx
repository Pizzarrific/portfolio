import { createContext, useContext, useState, type ReactNode } from "react";
import { T, type Lang } from "@/i18n";

type LangContextValue = {
  lang: Lang;
  toggle: () => void;
  t: (typeof T)[Lang];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ja" : "en"));
  const value: LangContextValue = { lang, toggle, t: T[lang] };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
