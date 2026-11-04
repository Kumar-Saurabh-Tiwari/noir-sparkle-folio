import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "Results-driven Full Stack Developer with 3+ years shipping production web and mobile products. I design scalable MERN, Next.js, and Angular systems, then take the same product thinking to iOS and Android with React Native and Expo — including KoLink UGC, live on the App Store and Google Play. Comfortable across LLM pipelines (OpenAI, Groq, Claude, Copilot), realtime sync, Firebase, Supabase, AWS, Azure, Docker, CI/CD, and RBAC. Daily driver: macOS, Cursor, GitHub Copilot, and Claude for high-velocity delivery.";

export function About() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-eyebrow", {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });

      gsap.set(".about-word", { opacity: 0.15, y: 8 });
      gsap.to(".about-word", {
        opacity: 1,
        y: 0,
        ease: "none",
        stagger: 0.018,
        scrollTrigger: {
          trigger: ".about-panel",
          start: "top 85%",
          end: "bottom 55%",
          scrub: 0.8,
        },
      });

      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".about-stats", start: "top 90%" },
        },
      );

      gsap.fromTo(
        ".about-panel",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { k: "3+", v: "Years Experience" },
    { k: "25+", v: "Projects Shipped" },
    { k: "2", v: "App Stores Live" },
    { k: "AI+", v: "LLM Product Work" },
  ];

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative px-6 py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="about-eyebrow sticky top-32">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs text-accent">01</span>
              <span className="h-px w-8 bg-accent" />
              <span className="track-wide text-[10px] uppercase text-white/60">
                About
              </span>
            </div>
            <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
              A builder who ships{" "}
              <span className="italic text-accent">across screens.</span>
            </h2>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="about-panel liquid-glass rounded-2xl p-8 text-white shadow-xl md:p-12">
            <p className="font-display text-xl font-light leading-[1.55] tracking-tight text-white text-balance md:text-3xl">
              {paragraph.split(" ").map((w, i) => (
                <span
                  key={i}
                  className="about-word inline-block pr-[0.25em] will-change-[opacity,transform]"
                >
                  {w}
                </span>
              ))}
            </p>

            <div className="about-stats mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="about-stat">
                  <div className="font-display text-4xl font-light text-accent md:text-5xl">
                    {s.k}
                  </div>
                  <div className="track-wide mt-2 text-[10px] uppercase text-white/60">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
