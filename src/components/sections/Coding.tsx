import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { n: "01", t: "Full-Stack Architecture", d: "End-to-end system design across MERN, Next.js and Angular — from schema to deployment." },
  { n: "02", t: "Native Mobile Apps", d: "React Native and Expo apps shipped to the App Store and Google Play, with store listings, EAS builds, and release cadence." },
  { n: "03", t: "Real-Time Systems", d: "WebSockets, Supabase Realtime, and Firebase sync for live translation, chat, and collaborative product flows." },
  { n: "04", t: "LLM Product Work", d: "Groq, OpenAI, Claude, Copilot, and Whisper wired into captions, translation, RAG, and agent-assisted engineering." },
  { n: "05", t: "Cloud & DevOps", d: "AWS & Azure deployments, Docker, GitHub Actions and CI/CD pipelines that ship reliably from macOS." },
  { n: "06", t: "Motion & Craft", d: "GSAP, Framer Motion, and glassmorphism UI that feel premium in the first five seconds — the recruiter test." },
];

export function Coding() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cap-card",
        { opacity: 0, y: 50, rotateX: 8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".cap-grid", start: "top 88%" },
        },
      );

      gsap.fromTo(
        ".coding-headline .h-word",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "expo.out",
          stagger: 0.08,
          duration: 1.1,
          scrollTrigger: { trigger: ".coding-headline", start: "top 85%" },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative px-6 py-32 md:py-48"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs text-accent">04</span>
          <span className="h-px w-8 bg-accent" />
          <span className="track-wide text-[10px] uppercase text-white/60">
            Coding & Experience
          </span>
        </div>

        <h2 className="coding-headline font-display text-4xl font-light leading-[1] tracking-tight text-white md:text-7xl">
          {"Where craft".split(" ").map((w, i) => (
            <span key={i} className="mr-4 inline-block overflow-hidden">
              <span className="h-word inline-block">{w}</span>
            </span>
          ))}
          <br />
          {"meets systems.".split(" ").map((w, i) => (
            <span key={i} className="mr-4 inline-block overflow-hidden">
              <span className="h-word inline-block italic text-accent">{w}</span>
            </span>
          ))}
        </h2>

        <div className="cap-grid mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
          {capabilities.map((c) => (
            <div
              key={c.n}
              className="cap-card liquid-glass group relative overflow-hidden rounded-2xl p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.14 78 / 0.12), transparent 50%)",
                }}
              />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 font-mono text-xs text-accent">{c.n}</div>
                <h3 className="font-display text-2xl font-light leading-tight text-white">
                  {c.t}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {c.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
