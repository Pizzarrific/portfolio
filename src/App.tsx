import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContents, TabsContent } from "@/components/ui/tabs";
import { TextGradient } from "@/components/ui/text-gradient";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ScrollFade } from "@/components/ui/scroll-fade";
import {
  ROLES,
  PROFILE,
  PROJECTS,
  CERTS,
  ACHIEVEMENTS,
  JLPT_LADDER,
  LANGUAGES,
  EDUCATION,
} from "@/data";
import {
  IllustrationAbout,
  IllustrationSkills,
  IllustrationExperience,
  IllustrationProjects,
  IllustrationEducation,
  IllustrationCerts,
  IllustrationOrbitCompact,
  IllustrationPlane,
  IllustrationAchievements,
  IllustrationFlourish,
  IllustrationBuild,
  BackgroundIllustration,
} from "@/illustrations";
import { LangProvider, useLang } from "@/lang";

function Seed({ variant = "default" }: { variant?: "default" | "pink" | "gold" }) {
  return <span className={`seed ${variant !== "default" ? variant : ""}`} />;
}

function useCountUp(target: number, decimals = 0, active = true) {
  const [value, setValue] = useState(0);
  const ran = useRef(false);
  useEffect(() => {
    if (!active || ran.current) return;
    ran.current = true;
    const dur = 1400;
    const start = performance.now();
    function step(now: number) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [active, target]);
  return decimals ? value.toFixed(decimals) : Math.round(value);
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Stat({ value, decimals = 0, suffix = "", label }: { value: number; decimals?: number; suffix?: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const display = useCountUp(value, decimals, inView);
  return (
    <Card ref={ref} className="hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
      <CardContent className="px-6">
        <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand">
          {display}{suffix}
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{label}</p>
      </CardContent>
    </Card>
  );
}

function RoleRotator() {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="font-[family-name:var(--font-mono)] text-sm text-muted-foreground h-5">
      <span className="text-brand">/ </span>
      {ROLES[i][lang]}
    </div>
  );
}

const NAV_ITEMS = ["about", "experience", "projects", "skills", "education", "beyond", "contact"] as const;

function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 rounded-full border border-border bg-secondary font-[family-name:var(--font-mono)] text-[11px] font-semibold text-foreground hover:border-[var(--brand)]/50 transition-colors ${
        compact ? "px-2.5 py-1.5" : "px-3 py-2"
      }`}
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-brand" : "text-muted-foreground"}>EN</span>
      <span className="text-muted-foreground/40">/</span>
      <span className={lang === "ja" ? "text-brand" : "text-muted-foreground"}>JA</span>
    </button>
  );
}

function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-card/85 backdrop-blur-md pl-4 pr-2 py-2 transition-shadow ${
            scrolled ? "shadow-lg" : "shadow-md"
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 mr-2">
            <Avatar className="size-7">
              <AvatarFallback className="bg-[var(--brand)] text-background text-[11px] font-bold">
                UM
              </AvatarFallback>
            </Avatar>
            <span className="font-[family-name:var(--font-display)] font-semibold text-base hidden sm:inline">
              Uzair<span className="text-brand">.</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm font-medium px-3 py-2 rounded-full transition-colors whitespace-nowrap ${
                  active === id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav[id]}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="rounded-full ml-1 hidden sm:inline-flex">
            <a href="#contact">{t.nav.talk}</a>
          </Button>
          <div className="ml-1 hidden sm:block">
            <LangToggle compact />
          </div>
          <Button
            size="icon-sm"
            variant="ghost"
            className="rounded-full lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-4 h-[2px] bg-foreground relative before:content-[''] before:absolute before:w-4 before:h-[2px] before:bg-foreground before:-top-1.5 after:content-[''] after:absolute after:w-4 after:h-[2px] after:bg-foreground after:top-1.5" />
          </Button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-background border-l border-border flex flex-col items-start justify-center gap-2 p-8 transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 size-11 rounded-full bg-white/10 text-white flex items-center justify-center text-2xl"
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className="mb-4">
          <LangToggle />
        </div>
        {NAV_ITEMS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-display)] text-4xl text-white py-2"
          >
            {t.nav[id]}
          </a>
        ))}
      </div>
    </>
  );
}

function OrbitGraphic() {
  const nodes: [number, number, number][] = [
    [200, 46, 5], [200, 354, 4], [46, 200, 4], [354, 200, 5],
    [90, 90, 3.5], [310, 90, 3.5], [90, 310, 3.5], [310, 310, 4],
  ];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <circle cx="200" cy="200" r="154" fill="none" stroke="var(--border)" strokeWidth="1" />
      <circle cx="200" cy="200" r="112" fill="none" stroke="var(--border-hover)" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="200" cy="200" r="112" fill="none" stroke="var(--brand)" strokeOpacity="0.35" strokeWidth="1">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="40s" repeatCount="indefinite" />
      </circle>
      <line x1="200" y1="46" x2="200" y2="354" stroke="var(--border)" strokeWidth="1" />
      <line x1="46" y1="200" x2="354" y2="200" stroke="var(--border)" strokeWidth="1" />
      <circle cx="200" cy="200" r="58" fill="var(--card)" stroke="var(--brand)" strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="200" y="207" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="26" fill="var(--brand)">
        U
      </text>
      {nodes.map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx} cy={cy} r={r}
          fill={i % 3 === 0 ? "var(--warm)" : "var(--brand)"}
        />
      ))}
    </svg>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="hero" className="pt-44 pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <Badge variant="outline" className="mb-6 py-1.5 pl-2 pr-3 gap-2 rounded-full border-border bg-card">
            <StatusIndicator state="active" size="sm" />
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-foreground">
              {t.hero.status}
            </span>
          </Badge>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(46px,7vw,88px)] leading-[0.98] font-semibold tracking-tight mb-3 text-foreground">
            Uzair
            <br />
            <span className="font-medium">
              <TextGradient highlightColor="var(--brand)" baseColor="var(--foreground)" duration={3}>
                Mohammed.
              </TextGradient>
            </span>
          </h1>
          <IllustrationFlourish className="w-40 h-4 text-brand mb-3 opacity-70" />

          <RoleRotator />

          <p className="text-lg text-muted-foreground max-w-md my-6 leading-relaxed">
            {t.hero.statement}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button asChild size="lg" className="rounded-full">
              <a href="#experience">{t.hero.viewWork} →</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="Uzair_Mohammed_Resume.pdf" download>{t.hero.download} ↓</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <a href="#contact">{t.hero.connect}</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.hero.tags.map((tag, i) => (
              <Badge key={tag} variant="secondary" className="gap-2 py-1.5 px-3 rounded-full">
                <Seed variant={i % 2 ? "pink" : "default"} />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto w-full">
          <OrbitGraphic />
          <Card className="absolute top-0 -left-6 py-4 px-4 shadow-lg animate-[bob_5s_ease-in-out_infinite]">
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand block">8.8</span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-foreground">{t.hero.cgpa}</span>
          </Card>
          <Card className="absolute bottom-8 -right-6 py-4 px-4 shadow-lg animate-[bob_5s_ease-in-out_infinite_1.2s]">
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand block">40%</span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-foreground">{t.hero.accuracy}</span>
          </Card>
          <Card className="absolute -bottom-4 left-10 py-4 px-4 shadow-lg animate-[bob_5s_ease-in-out_infinite_2.4s]">
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand block">4</span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted-foreground">{t.hero.builds}</span>
          </Card>
        </div>
      </div>
      <style>{`@keyframes bob {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}`}</style>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  seed = "default",
  illustration,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  seed?: "default" | "pink";
  illustration?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-10 mb-12">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-brand font-semibold">
          <Seed variant={seed} /> {eyebrow}
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(30px,4vw,44px)] leading-tight text-foreground font-semibold">
          {title}
        </h2>
        {sub && <p className="mt-3 text-muted-foreground text-[16.5px] max-w-lg">{sub}</p>}
      </div>
      {illustration && (
        <div className="hidden md:block w-[130px] h-[130px] shrink-0 text-brand opacity-90">
          {illustration}
        </div>
      )}
    </div>
  );
}

function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={a.eyebrow}
          title={<>{a.titleA} <em className="text-brand font-medium">{a.titleEm}</em> {a.titleB}</>}
          illustration={<IllustrationAbout className="w-full h-full" />}
        />
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 items-start">
          <div className="space-y-5 text-[16.5px] text-muted-foreground leading-relaxed">
            <p>
              {a.p1a} <strong className="text-foreground font-semibold">{a.p1strong}</strong>{a.p1b}
            </p>
            <p>
              {a.p2a} <strong className="text-foreground font-semibold">{a.p2strong}</strong>{a.p2b}
            </p>
            <p>{a.p3}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat value={8.8} decimals={1} label={a.statCgpa} />
            <Stat value={40} suffix="%" label={a.statAccuracy} />
            <Stat value={90} suffix="%" label={a.statEfficiency} />
            <Stat value={4} label={a.statPlanes} />
            <Card className="col-span-2 bg-secondary border border-border">
              <CardContent className="px-6">
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
                  {a.languagesLabel}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {LANGUAGES.map((l) => (
                    <Badge key={l.en} className="rounded-full py-1.5 px-3 gap-2 border-none bg-white/5 text-white/80">
                      {lang === "ja" ? l.ja : l.en}
                      <span className="font-[family-name:var(--font-mono)] text-[10px] opacity-70">
                        {lang === "ja" ? l.levelJa : l.level}
                      </span>
                    </Badge>
                  ))}
                </div>
                <Separator className="mb-4 opacity-40" />
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
                  {a.jlptLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {JLPT_LADDER.map((jl) => (
                    <div
                      key={jl.level}
                      className={`flex items-center gap-1.5 rounded-full py-1.5 px-3 text-xs font-semibold font-[family-name:var(--font-mono)] ${
                        jl.status === "done"
                          ? "bg-[var(--brand)] text-background"
                          : "bg-transparent border border-white/20 text-white/50"
                      }`}
                    >
                      {jl.status === "done" && (
                        <svg viewBox="0 0 20 20" className="w-3 h-3" fill="none">
                          <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {jl.level}
                      <span className="opacity-70 font-normal">
                        {jl.status === "done" ? a.jlptDone : a.jlptTarget}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { t, lang } = useLang();
  const s = t.skills;
  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={s.eyebrow}
          title={<>{s.titleA} <em className="text-brand font-medium">{s.titleEm}</em>{s.titleB}</>}
          sub={s.sub}
          seed="pink"
          illustration={<IllustrationSkills className="w-full h-full" />}
        />
        <Tabs defaultValue={PROFILE[0].id}>
          <TabsList className="mb-8 flex-wrap h-auto rounded-full p-1">
            {PROFILE.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="rounded-full px-4 py-2 text-sm">
                {lang === "ja" ? cat.labelJa : cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContents>
            {PROFILE.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item) => (
                    <Badge
                      key={item.name}
                      title={lang === "ja" ? item.tipJa : item.tip}
                      variant="secondary"
                      className="rounded-full py-2 px-4 text-sm cursor-default hover:bg-[var(--brand)] hover:text-background transition-colors"
                    >
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </TabsContents>
        </Tabs>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useLang();
  const e = t.experience;
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={e.eyebrow}
          title={<>{e.titleA} <em className="text-brand font-medium">{e.titleEm}</em>{e.titleB}</>}
          illustration={<IllustrationExperience className="w-full h-full" />}
        />
        <Card className="bg-gradient-to-b from-card to-background border border-border overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[var(--brand)]/20 blur-3xl pointer-events-none" />
          <CardContent className="px-8 relative z-10">
            <Accordion type="single" collapsible defaultValue="quest">
              <AccordionItem value="quest" className="border-none">
                <AccordionTrigger className="hover:no-underline py-0 [&>svg]:text-foreground [&>svg]:size-6">
                  <div className="text-left">
                    <CardTitle className="text-2xl text-foreground font-[family-name:var(--font-display)] font-semibold mb-1">
                      {e.role}
                    </CardTitle>
                    <p className="text-brand font-semibold text-sm mb-1">{e.org}</p>
                    <p className="font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
                      {e.meta}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90">
                  <div className="flex gap-10 flex-wrap my-6">
                    <div>
                      <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--warm)]">40%</div>
                      <div className="text-xs text-muted-foreground max-w-[180px] mt-1">{e.accuracyLabel}</div>
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--warm)]">90%</div>
                      <div className="text-xs text-muted-foreground max-w-[180px] mt-1">{e.efficiencyLabel}</div>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-sm text-foreground/85 mb-6">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-1.5 size-1.5 rounded-full bg-[var(--brand)] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <ScrollFade axis="horizontal">
                    <div className="flex items-center gap-2 bg-white/5 rounded-2xl p-4 w-max">
                      {e.pipeline.map((step, i, arr) => (
                        <div key={step} className="flex items-center gap-2">
                          <span
                            className={`font-[family-name:var(--font-mono)] text-[11px] rounded-lg px-3 py-2 whitespace-nowrap ${
                              i === arr.length - 1 ? "bg-[var(--brand)] text-background" : "bg-white/10 text-foreground"
                            }`}
                          >
                            {step}
                          </span>
                          {i < arr.length - 1 && <span className="text-muted-foreground/50 text-xs">→</span>}
                        </div>
                      ))}
                    </div>
                  </ScrollFade>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ProjectInfoCards({ project, labels, open }: { project: (typeof PROJECTS)[number]; labels: { problem: string; approach: string; impact: string }; open: boolean }) {
  const { lang } = useLang();
  const cards = [
    { label: labels.problem, body: lang === "ja" ? project.problemJa : project.problem },
    { label: labels.approach, body: lang === "ja" ? project.approachJa : project.approach },
    { label: labels.impact, body: lang === "ja" ? project.impactJa : project.impact },
  ];
  return (
    <div
      className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
    >
      <div className="overflow-hidden">
        <div className="grid sm:grid-cols-3 gap-3 mt-6">
          {cards.map((c) => (
            <Card key={c.label} className="bg-secondary border border-border">
              <CardContent className="px-4 py-4">
                <p className="font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-wider text-brand font-semibold mb-2">
                  {c.label}
                </p>
                <p className="text-[12.5px] text-muted-foreground leading-relaxed">{c.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ proj, p, lang }: { proj: (typeof PROJECTS)[number]; p: ReturnType<typeof useLang>["t"]["projects"]; lang: "en" | "ja" }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="hover:shadow-xl hover:border-[var(--brand)]/30 transition-all duration-300">
      <CardContent className="px-8 grid md:grid-cols-[1.5fr_1fr] gap-8">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[11.5px] text-brand font-bold mb-2">{proj.index}</p>
          <CardTitle className="text-2xl font-[family-name:var(--font-display)] font-semibold mb-3 text-foreground">
            {proj.title}
          </CardTitle>
          <CardDescription className="text-[15px] mb-4 leading-relaxed">
            {lang === "ja" ? proj.descJa : proj.desc}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-5">
            {proj.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-full font-[family-name:var(--font-mono)] text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
            {(lang === "ja" ? proj.featuresJa : proj.features).map((f) => (
              <div key={f} className="flex items-center gap-2 text-[13.5px] text-muted-foreground">
                <Seed /> {f}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <Button asChild variant="link" className="px-0 text-brand font-bold">
              <a href="https://github.com/Pizzarrific" target="_blank" rel="noopener noreferrer">
                {p.github} ↗
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[12.5px] font-semibold text-foreground hover:border-[var(--brand)]/50 transition-colors"
            >
              {open ? p.detailsHide : p.detailsShow}
              <svg
                viewBox="0 0 20 20"
                className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                fill="none"
              >
                <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <ProjectInfoCards project={proj} labels={{ problem: p.problem, approach: p.approach, impact: p.impact }} open={open} />
        </div>
        <div className="bg-secondary rounded-2xl p-5 flex flex-col justify-center gap-2 relative">
          <IllustrationBuild className="w-10 h-10 text-brand opacity-25 absolute top-3 right-3 pointer-events-none" />
          {(lang === "ja" ? proj.flowJa : proj.flow).map((step, i, arr) => (
            <div key={step} className="relative">
              <div
                className={`font-[family-name:var(--font-mono)] text-[11.5px] rounded-lg px-3 py-2.5 ${
                  i === arr.length - 1 ? "bg-[var(--brand)] text-background" : "bg-card border border-border"
                }`}
              >
                {step}
              </div>
              {i < arr.length - 1 && (
                <div className="text-center text-muted-foreground text-xs">↓</div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function Projects() {
  const { t, lang } = useLang();
  const p = t.projects;
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={p.eyebrow}
          title={<>{p.titleA} <em className="text-brand font-medium">{p.titleEm}</em>{p.titleB}</>}
          sub={p.sub}
          seed="pink"
          illustration={<IllustrationProjects className="w-full h-full" />}
        />
        <div className="flex flex-col gap-6">
          {PROJECTS.map((proj) => (
            <ProjectCard key={proj.title} proj={proj} p={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const { t, lang } = useLang();
  const e = t.education;
  return (
    <section id="education" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={e.eyebrow}
          title={<>{e.titleA} <em className="text-brand font-medium">{e.titleEm}</em>{e.titleB}</>}
          illustration={<IllustrationEducation className="w-full h-full" />}
        />
        <div className="border-l-2 border-border ml-2 space-y-10">
          {EDUCATION.map((it) => (
            <div key={it.title} className="relative pl-8">
              <span className="absolute -left-[7px] top-1 size-3 rounded-full bg-[var(--brand)] border-4 border-background" />
              <p className="font-[family-name:var(--font-mono)] text-xs text-brand font-bold mb-1">{it.year}</p>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground mb-1">
                {lang === "ja" ? it.titleJa : it.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{lang === "ja" ? it.orgJa : it.org}</p>
              <Badge variant="secondary" className="rounded-full font-[family-name:var(--font-mono)] text-xs font-bold">
                {lang === "ja" ? it.scoreJa : it.score}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertsAndAchievements() {
  const { t, lang } = useLang();
  const c = t.certs;
  const ach = t.achievements;
  return (
    <>
      <section id="certs" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead
            eyebrow={c.eyebrow}
            title={<>{c.titleA} <em className="text-brand font-medium">{c.titleEm}</em>{c.titleB}</>}
            seed="pink"
            illustration={<IllustrationCerts className="w-full h-full" />}
          />
          <div className="flex flex-wrap gap-3">
            {CERTS.map((cert) => (
              <Card key={cert.title} className="p-0 hover:-translate-y-1 transition-transform duration-300 max-w-[280px]">
                <CardContent className="px-4 py-4">
                  <p className="font-semibold text-sm text-foreground leading-snug mb-1">
                    {lang === "ja" ? cert.titleJa : cert.title}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-[11px] text-brand">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead
            eyebrow={ach.eyebrow}
            title={<>{ach.titleA} <em className="text-brand font-medium">{ach.titleEm}</em>{ach.titleB}</>}
            illustration={<IllustrationAchievements className="w-full h-full" />}
          />
          <ScrollFade axis="horizontal">
            <div className="flex gap-4 w-max pb-2">
              {ACHIEVEMENTS.map((a, i) => (
                <Card
                  key={a.title}
                  className={`w-64 bg-card border border-border shrink-0 border-l-4 ${i % 2 ? "border-l-[var(--warm)]" : "border-l-[var(--brand)]"}`}
                >
                  <CardContent className="px-6 flex flex-col justify-between h-full min-h-[130px]">
                    <p className="font-[family-name:var(--font-mono)] text-[11px] text-muted-foreground mb-6">
                      {lang === "ja" ? a.tagJa : a.tag}
                    </p>
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {lang === "ja" ? a.titleJa : a.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollFade>
        </div>
      </section>
    </>
  );
}

function Beyond() {
  const { t } = useLang();
  const b = t.beyond;
  return (
    <section id="beyond" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--warm)] font-semibold">
              <Seed variant="pink" /> {b.eyebrow}
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(30px,4vw,44px)] leading-tight text-foreground font-semibold mb-5">
              {b.title}
            </h2>
            <p className="text-[17px] text-foreground/90 italic border-l-2 border-[var(--warm)]/50 pl-4 mb-5 leading-relaxed">
              "{b.quote}"
            </p>
            <p className="text-muted-foreground text-[15.5px] leading-relaxed max-w-md">
              {b.body}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[340px] text-[var(--warm)]">
              <IllustrationPlane className="w-full h-auto" />
            </div>
            <p className="font-[family-name:var(--font-mono)] text-[11px] text-muted-foreground text-center mt-4 tracking-wide">
              {b.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [toast, setToast] = useState<string | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      showToast(c.sentToast);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Failed to send. Try emailing me directly.";
      showToast(msg);
    }
  }

  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Card className="bg-gradient-to-b from-card to-background border border-border p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[var(--brand)]/20 blur-3xl pointer-events-none" />
          <CardContent className="px-0 grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--warm)] font-semibold">
                  <Seed variant="pink" /> {c.eyebrow}
                </div>
                <div className="hidden sm:block w-14 h-14 text-brand opacity-80 shrink-0">
                  <IllustrationOrbitCompact className="w-full h-full" />
                </div>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(30px,4vw,44px)] leading-tight font-semibold text-white mb-4">
                {c.titleA} <em className="text-brand font-medium">{c.titleEm}</em>{c.titleB}
              </h2>
              <p className="text-white/65 max-w-sm mb-7">{c.sub}</p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:mohammeduzair873@gmail.com"
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-2xl px-4 py-4 transition-colors"
                >
                  <span>
                    <span className="block font-[family-name:var(--font-mono)] text-[11px] text-[var(--warm)] mb-0.5">Email</span>
                    <span className="font-semibold text-sm">mohammeduzair873@gmail.com</span>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText("mohammeduzair873@gmail.com");
                      showToast(c.copy);
                    }}
                    className="font-[family-name:var(--font-mono)] text-[11px] text-white/50 hover:text-white"
                  >
                    {c.copy}
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/uzair-mohammed-9060b9308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-2xl px-4 py-4 transition-colors"
                >
                  <span>
                    <span className="block font-[family-name:var(--font-mono)] text-[11px] text-[var(--warm)] mb-0.5">LinkedIn</span>
                    <span className="font-semibold text-sm">/in/uzair-mohammed-9060b9308</span>
                  </span>
                  <span>↗</span>
                </a>
                <a
                  href="https://github.com/Pizzarrific"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-2xl px-4 py-4 transition-colors"
                >
                  <span>
                    <span className="block font-[family-name:var(--font-mono)] text-[11px] text-[var(--warm)] mb-0.5">GitHub</span>
                    <span className="font-semibold text-sm">github.com/Pizzarrific</span>
                  </span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />
              <input
                required
                placeholder={c.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "sending"}
                className="bg-white/7 border border-white/15 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[var(--brand)] placeholder:text-white/40 transition-colors disabled:opacity-50"
              />
              <input
                required
                type="email"
                placeholder={c.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "sending"}
                className="bg-white/7 border border-white/15 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[var(--brand)] placeholder:text-white/40 transition-colors disabled:opacity-50"
              />
              <textarea
                required
                rows={4}
                placeholder={c.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "sending"}
                className="bg-white/7 border border-white/15 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[var(--brand)] placeholder:text-white/40 resize-none transition-colors disabled:opacity-50"
              />
              <Button type="submit" size="lg" className="rounded-xl mt-1" disabled={status === "sending"}>
                {status === "sending" ? c.sendBusy : `${c.sendIdle} \u2192`}
              </Button>
              <span className="text-center text-xs text-white/40">{c.formNote}</span>
            </form>
          </CardContent>
        </Card>
      </div>

      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-semibold z-50 transition-all duration-300 max-w-[90vw] text-center ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {toast}
      </div>
    </section>
  );
}

function SliceProgress() {
  const [offset, setOffset] = useState(157);
  const circumference = 157;
  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setOffset(circumference - Math.min(Math.max(scrolled, 0), 1) * circumference);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-5 z-40 size-14 drop-shadow-lg hover:scale-105 transition-transform"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 60 60" className="-rotate-90 w-full h-full">
        <circle cx="30" cy="30" r="25" fill="none" stroke="var(--border)" strokeWidth="5" />
        <circle
          cx="30" cy="30" r="25" fill="none" stroke="var(--brand)" strokeWidth="5"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset .1s linear" }}
        />
        <circle cx="30" cy="30" r="9" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
        <circle cx="30" cy="30" r="2" fill="var(--brand)" />
      </svg>
    </button>
  );
}

function SplashScreen({ onDone }: { onDone: () => void }) {
  const { lang } = useLang();
  const [phase, setPhase] = useState<"draw" | "hold" | "exit" | "gone">("draw");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("hold"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 1900);
    const t3 = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
      onDone();
    }, 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        phase === "exit" ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08]">
        <BackgroundIllustration className="w-full h-full" />
      </div>
      <div className="relative w-28 h-28 mb-6">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
          <circle
            cx="50" cy="50" r="42" fill="none" stroke="var(--brand)" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={264}
            strokeDashoffset={phase === "draw" ? 264 : 0}
            style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.65,0,0.35,1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-14 h-14 rounded-2xl bg-secondary border border-[var(--brand)]/40 flex items-center justify-center transition-all duration-500 ${
              phase === "draw" ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
          >
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand">U</span>
          </div>
        </div>
      </div>
      <p
        className={`relative font-[family-name:var(--font-display)] text-white text-lg tracking-wide transition-all duration-500 ${
          phase === "draw" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
        Uzair Mohammed
      </p>
      <p
        className={`relative font-[family-name:var(--font-mono)] text-[11px] text-white/50 mt-1 transition-opacity duration-500 ${
          phase === "draw" ? "opacity-0" : "opacity-100"
        }`}
        style={{ transitionDelay: "250ms" }}
      >
        {lang === "ja" ? "ソフトウェア開発者" : "Software Developer"}
      </p>
    </div>
  );
}

function Portfolio() {
  const { t } = useLang();
  const [splashDone, setSplashDone] = useState(false);
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.07]">
        <BackgroundIllustration className="w-full h-full" />
      </div>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <div className={`relative z-10 transition-opacity duration-700 ${splashDone ? "opacity-100" : "opacity-0"}`}>
        <SliceProgress />
        <Nav />
        <Hero />
        <Separator className="max-w-6xl mx-auto" />
        <About />
        <Separator className="max-w-6xl mx-auto" />
        <Skills />
        <Separator className="max-w-6xl mx-auto" />
        <Experience />
        <Separator className="max-w-6xl mx-auto" />
        <Projects />
        <Separator className="max-w-6xl mx-auto" />
        <Education />
        <CertsAndAchievements />
        <Separator className="max-w-6xl mx-auto" />
        <Beyond />
        <Contact />
        <footer className="py-10 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
            {t.footer}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Portfolio />
    </LangProvider>
  );
}
