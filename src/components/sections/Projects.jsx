import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { Search } from "lucide-react";

import { assetUrl } from "@/lib/assetUrl";
import img3d from "@/assets/projects/3d-portfolio.png.asset.json";
import imgAi from "@/assets/projects/Ai-portfolio.png.asset.json";
import imgSpace from "@/assets/projects/space-portfolio.png.asset.json";
import imgDevhub from "@/assets/projects/devhub.png.asset.json";
import imgBatman from "@/assets/projects/batman-landing.png.asset.json";
import imgMirecall from "@/assets/projects/mirecall-card-vault.png.asset.json";
import imgCuralink from "@/assets/projects/curalink-health.png.asset.json";
import imgPan from "@/assets/projects/pan-admin-dashboard.png.asset.json";
import imgRoamify from "@/assets/projects/roamify-website.png.asset.json";
import imgSk from "@/assets/projects/sk-web.png.asset.json";
import imgPulseChat from "@/assets/projects/temp/pulse-chat.png";
import imgFluid from "@/assets/projects/temp/fluid-studio.png";
import imgNike from "@/assets/projects/temp/nike-web.png";
import imgNifty from "@/assets/projects/temp/nifty-pulse.png";
import imgCrosstalk from "@/assets/projects/temp/crosstalk.png";
import imgTranspulse from "@/assets/projects/temp/transpulse.png";
import imgGlasshouse from "@/assets/projects/temp/glasshouse-cinema.png";
import imgKolink from "@/assets/projects/temp/kolink-ugc.png";

gsap.registerPlugin(ScrollTrigger, Flip);

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.kolink.creator&pcampaignid=web_share";
const IOS_URL = "https://apps.apple.com/us/app/kolink-ugc/id6799990700";

const projects = [
  {
    title: "KoLink UGC",
    category: "Shipped Mobile App",
    description:
      "Paid Instagram Reels campaign platform connecting brands and creators. Campaigns, CPM earnings, wallet payouts — live on the App Store and Google Play.",
    tools: ["React Native", "Expo", "iOS", "Android", "macOS"],
    image: imgKolink,
    type: "iOS + Android",
    link: IOS_URL,
    featured: true,
    tags: ["featured", "mobile"],
    preview: false,
    wide: true,
    stores: [
      { label: "App Store", href: IOS_URL },
      { label: "Play Store", href: PLAY_URL },
    ],
  },
  {
    title: "Glasshouse Cinema",
    category: "Local Media Player",
    description:
      "Web-based local cinema player with glassmorphism UI. Reads local video libraries, custom player controls, and Groq Whisper subtitles for Japanese audio.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "Groq Whisper"],
    image: imgGlasshouse,
    type: "Media Product",
    link: "https://github.com/Kumar-Saurabh-Tiwari/glasshouse-cinema",
    featured: true,
    tags: ["featured", "ai", "web"],
    preview: false,
  },
  {
    title: "NiftyPulse",
    category: "Market Dashboard",
    description:
      "Responsive dashboard for Indian indices and stocks: live Yahoo Finance quotes, charts, market breadth, sector performance, movers, search, and a local watchlist.",
    tools: ["React", "Yahoo Finance", "Charts", "Tailwind CSS"],
    image: imgNifty,
    type: "Live Dashboard",
    link: "https://nifty-pulse-seven.vercel.app",
    featured: true,
    tags: ["featured", "web"],
  },
  {
    title: "CrossTalk — Argument Translator",
    category: "Realtime AI Product",
    description:
      "Live typing is broadcast through Supabase Realtime. After a short pause, the text and language pair go to Groq for translation — two sides, one conversation.",
    tools: ["Supabase Realtime", "Groq", "React", "TypeScript"],
    image: imgCrosstalk,
    type: "AI Translation",
    link: "https://argument-translator-web-eight.vercel.app",
    featured: true,
    tags: ["featured", "ai", "web"],
  },
  {
    title: "TransPulse — Live Captions",
    category: "Speech Studio",
    description:
      "Bilingual captioning studio for a simulated conversation or live microphone capture. Searchable transcript ready to copy or export.",
    tools: ["AI Speech", "React", "Transcription", "Export"],
    image: imgTranspulse,
    type: "AI Captions",
    link: "https://live-translation-tool-roan.vercel.app",
    featured: true,
    tags: ["featured", "ai", "web"],
  },
  {
    title: "3D Portfolio Website",
    category: "Portfolio Website",
    tools: ["React", "Three.js", "GSAP"],
    image: assetUrl(img3d),
    type: "3D Portfolio",
    link: "https://3d.skumar.space/",
    tags: ["web"],
  },
  {
    title: "AI Portfolio Website",
    category: "Portfolio Website",
    tools: ["React", "Next.js", "Tailwind CSS", "GROQ AI"],
    image: assetUrl(imgAi),
    type: "AI Portfolio",
    link: "https://canvas-of-dreams-rosy.vercel.app/",
    tags: ["ai", "web"],
  },
  {
    title: "Space Portfolio Website",
    category: "Portfolio Website",
    tools: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
    image: assetUrl(imgSpace),
    type: "Portfolio Website",
    link: "https://skumar-space.netlify.app/",
    tags: ["web"],
  },
  {
    title: "Pulse Chat — Real-time Chat Application",
    category: "Real-time Chat Application",
    tools: ["React", "TypeScript", "Tailwind CSS", "Socket.io", "Node.js", "Express.js"],
    image: assetUrl(imgPulseChat),
    type: "Real-time Chat Application",
    link: "https://chat.skumar.space/",
    tags: ["web"],
  },
  {
    title: "Fluid Studio - Fluid GASP Animation",
    category: "Fluid Animation",
    tools: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: assetUrl(imgFluid),
    type: "Fluid Animation",
    link: "https://kumar-saurabh-tiwari.github.io/Fluid-Studio/",
    tags: ["web"],
  },
  {
    title: "Parallax Nike Theme",
    category: "Landing Page",
    tools: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: assetUrl(imgNike),
    type: "Landing Page",
    link: "https://kumar-saurabh-tiwari.github.io/parallex-nike-theme/",
    tags: ["web"],
  },
  {
    title: "DevHub It is designed as a resource for developers.",
    category: "Developer Resource Hub",
    tools: ["React", "Next.js", "Tailwind CSS"],
    image: assetUrl(imgDevhub),
    type: "Landing Page",
    link: "https://dev-canvas-one.vercel.app/",
    tags: ["web"],
  },
  {
    title: "Batman Theme Landing Page",
    category: "Cinematic Experience",
    tools: ["React", "Vite", "Tailwind CSS"],
    image: assetUrl(imgBatman),
    type: "Landing Page",
    link: "https://batman-wayne.netlify.app/",
    tags: ["web"],
  },
  {
    title: "MI-Recall Business Card Vault",
    category: "AI Knowledge Vault",
    tools: ["React", "Node.js", "OpenAI"],
    image: assetUrl(imgMirecall),
    type: "Landing Page",
    link: "https://mi-recall-business-contact-web.vercel.app",
    tags: ["ai", "web"],
  },
  {
    title: "CuraLink AI Health Assistant",
    category: "AI Health Assistant",
    tools: ["React", "Node.js", "OpenAI"],
    image: assetUrl(imgCuralink),
    type: "AI Assistant",
    link: "https://curalink-ai-research.vercel.app/",
    tags: ["ai", "web"],
  },
  {
    title: "PAN Admin Dashboard",
    category: "Admin + Payments Platform",
    tools: ["Next.js", "MongoDB", "Stripe"],
    image: assetUrl(imgPan),
    type: "Admin Dashboard",
    link: "https://admin.panglobal.network",
    tags: ["web"],
  },
  {
    title: "Roamify Tickets — Travel UI",
    category: "Responsive UI",
    tools: ["React", "Responsive Design"],
    image: assetUrl(imgRoamify),
    type: "Landing Page",
    link: "https://www.roamifyllc.com",
    tags: ["web"],
  },
  {
    title: "SK Web Hub — Agency Landing",
    category: "Marketing Website",
    tools: ["HTML", "CSS", "JavaScript"],
    image: assetUrl(imgSk),
    type: "Landing Page",
    link: "https://sk-web-hub.vercel.app/",
    tags: ["web"],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
];

function projectMatches(p, query, filter) {
  if (filter !== "all" && !(p.tags || []).includes(filter) && !(filter === "featured" && p.featured)) {
    return false;
  }
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    p.title.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q) ||
    (p.description || "").toLowerCase().includes(q) ||
    p.tools.some((t) => t.toLowerCase().includes(q))
  );
}

function ProjectCard({ p }) {
  const [loaded, setLoaded] = useState(false);
  const [warm, setWarm] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const iframeRef = useRef(null);
  const canPreview = p.preview !== false;

  const handleIntent = () => {
    if (canPreview) setWarm(true);
  };
  const handleEnter = () => {
    if (canPreview) setWarm(true);
    setHovered(true);
  };
  const handleLeave = () => {
    setHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    }
  };
  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1100px) rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 7}deg)`;
  };

  return (
    <article
      ref={cardRef}
      onPointerEnter={handleIntent}
      onFocus={handleIntent}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`proj-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl ${
        p.wide ? "md:col-span-2" : ""
      }`}
      style={{
        backdropFilter: "blur(14px) saturate(150%)",
        boxShadow:
          "0 20px 60px -20px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.06)",
      }}
    >
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: `url(${p.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="proj-shine pointer-events-none absolute inset-0 z-20" />
        {hovered && canPreview && !loaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div
              className="h-10 w-10 rounded-full border-2 border-white/20 border-t-accent"
              style={{ animation: "spin 0.7s linear infinite" }}
            />
          </div>
        )}

        {warm && canPreview && (
          <iframe
            ref={iframeRef}
            src={p.link}
            title={p.title}
            loading="eager"
            sandbox="allow-scripts allow-same-origin"
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 z-10 h-full w-full border-0 transition-opacity duration-200"
            style={{
              opacity: hovered && loaded ? 1 : 0,
              pointerEvents: hovered && loaded ? "auto" : "none",
            }}
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute left-4 top-4 z-30 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/85 backdrop-blur-sm">
          {p.type}
        </div>

        {p.featured && (
          <div className="absolute left-4 bottom-4 z-30 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent backdrop-blur-sm">
            Featured
          </div>
        )}

        <div className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 backdrop-blur-sm transition-all duration-300 group-hover:border-accent/60 group-hover:text-accent">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </div>
      </a>

      <div className="relative flex flex-1 flex-col gap-3 p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {p.category}
        </span>
        <h4 className="font-display text-xl font-light leading-tight text-white md:text-2xl">
          {p.title}
        </h4>
        {p.description && (
          <p className="text-sm leading-relaxed text-white/65">{p.description}</p>
        )}
        <div className="mt-1 flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
        {p.stores ? (
          <div className="mt-3 flex flex-wrap gap-3">
            {p.stores.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-accent hover:text-accent"
              >
                {s.label} →
              </a>
            ))}
          </div>
        ) : (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 transition-colors group-hover:text-accent"
          >
            Visit Site <span>→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const rootRef = useRef(null);
  const gridRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const isFirstFilter = useRef(true);

  const filteredProjects = useMemo(
    () => projects.filter((p) => projectMatches(p, searchQuery, filter)),
    [searchQuery, filter],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".proj-search-wrap",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".proj-card",
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".proj-grid",
            start: "top 85%",
          },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!gridRef.current || isFirstFilter.current) {
      isFirstFilter.current = false;
      return;
    }

    const state = Flip.getState(".proj-card");

    Flip.from(state, {
      duration: 0.55,
      ease: "power2.inOut",
      stagger: 0.04,
      absolute: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
        ),
      onLeave: (elements) =>
        gsap.to(elements, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.in",
        }),
    });
  }, [filteredProjects]);

  return (
    <section
      ref={rootRef}
      id="projects"
      className="relative px-6 py-32 md:py-48"
    >
      <div className="relative mx-auto max-w-7xl">
        <div id="apps" className="projects-header mb-12 scroll-mt-28 md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs text-accent">05</span>
            <span className="h-px w-8 bg-accent" />
            <span className="track-wide text-[10px] uppercase text-white/60">
              Projects
            </span>
          </div>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
            Selected <span className="italic text-accent">work</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Recent product work recruiters can open in one click — store-shipped
            mobile, live market data, realtime translation, and cinematic UI.
          </p>
        </div>

        <div className="proj-search-wrap mb-10 md:mb-14">
          <div className="mb-5 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                data-active={filter === f.id}
                onClick={() => setFilter(f.id)}
                className="filter-chip rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 hover:-translate-y-0.5"
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-md">
            <Search
              size={16}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
              aria-hidden
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, category, type, or tools…"
              aria-label="Search projects"
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 pl-12 text-sm text-white placeholder-gray-400 backdrop-blur-md transition-all duration-300 focus:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:shadow-[0_0_24px_oklch(0.78_0.14_78/0.2)]"
            />
          </div>
          {(searchQuery.trim() || filter !== "all") && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>

        <div
          ref={gridRef}
          className="proj-grid grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="proj-no-results mt-12 rounded-2xl border border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur-md">
            <p className="font-display text-xl text-white/80">
              No projects match your search.
            </p>
            <p className="mt-2 text-sm text-white/50">
              Try a different keyword — title, category, type, or tool name.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
