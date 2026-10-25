/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE. Edit this file to update the site.
 *  Anything marked  // EDIT  is a placeholder you should check.
 * ─────────────────────────────────────────────────────────────
 */

import type { LucideIcon } from "lucide-react";
import type { IconName } from "tech-stack-icons";
import {
  Bot,
  Code,
  Globe,
  Hammer,
  LayoutDashboard,
  Handshake,
  MessagesSquare,
  PenTool,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Zap,
} from "lucide-react";

/* ─── About me & contact ─────────────────────────────────────── */

export const site = {
  name: "Mohit Puhal",
  firstName: "Mohit",
  role: "Senior Software Engineer",
  url: "https://mohitpuhal.com", // EDIT: your production domain (no trailing slash)
  headline: "I turn your business idea into software that works and earns.",
  headlineHighlight: "works and earns.", // must be the last words of the headline
  subheadline: "Websites, web platforms, mobile apps and AI automation. I design, build and launch them myself.",
  description:
    "Mohit Puhal builds websites, web platforms, mobile apps and AI automation for founders and growing businesses. Designed, built and launched end to end.",
  /**
   * Your photo. Put a portrait (about 800×1000px) in /public, e.g. /public/me.jpg,
   * then set: photo: "/me.jpg". Leave empty to show a placeholder.
   */
  photo: "/me.jpg",
  location: "India",
  email: "mohitofficial2320@gmail.com",
  phone: "+91 70182 04228",
  phoneHref: "tel:+917018204228",
  whatsappNumber: "917018204228",
  whatsappMessage: "Hi Mohit, I'd like to discuss a project.",
  copyrightYear: 2026, // EDIT once a year (kept static so pages stay fully prerendered)
} as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Apps", href: "#apps" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

/* ─── Brands I've built for (logo strip) ─────────────────────── */

export const brands: { name: string; logo?: string }[] = [
  { name: "Saral Rojgar", logo: "/brands/saral-rojgar.png" },
  { name: "RatNawn AI", logo: "/brands/ratnawn-tech.png" },
  { name: "ZFour HR" },
  { name: "Chhota CFO" },
  { name: "Make Fit Simple", logo: "/work/make-fit-simple-icon.jpg" },
  { name: "Time Growth", logo: "/work/time-growth-icon.jpg" },
  { name: "Stoneboy", logo: "/brands/stoneboy.jpg" },
  { name: "Mapstop Holidays" },
];

/* ─── Numbers ────────────────────────────────────────────────── */

export type Stat = { value: number; suffix?: string; label: string };

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Projects delivered" }, // EDIT
  { value: 8, suffix: "+", label: "Live products" }, // EDIT
  { value: 6, suffix: "+", label: "Industries" }, // EDIT
  { value: 6, suffix: "+", label: "Years building" }, // EDIT
];

/* ─── Websites & platforms ───────────────────────────────────── */

export type ProjectLink = {
  label: string;
  href: string;
  kind: "web" | "play" | "appstore";
};

export type Project = {
  slug: string;
  name: string;
  /** Short category shown as a tag. */
  type: string;
  /** One line. Business owners skim, so keep it short. */
  line: string;
  tech: string[];
  links: ProjectLink[];
  /** Desktop screenshot in /public/work. */
  image?: string;
  /** Fallback thumbnail colours if no image. */
  gradient: [string, string];
};

export const projects: Project[] = [
  {
    slug: "saral-rojgar",
    name: "Saral Rojgar",
    type: "Jobs marketplace",
    line: "Connects skilled workers with small and medium businesses. Find jobs or hire, fast.",
    tech: ["Next.js", "Node.js", "PostgreSQL"], // EDIT
    links: [{ label: "Visit site", href: "https://saralrojgar.com/", kind: "web" }],
    image: "/work/saral-rojgar.jpg",
    gradient: ["#f5b942", "#c2410c"],
  },
  {
    slug: "ratnawn-tech",
    name: "RatNawn AI",
    type: "AI products",
    line: "Voice agents, GenAI workflows and AI products that work in the real world.",
    tech: ["Next.js", "Python", "OpenAI"], // EDIT
    links: [{ label: "Visit site", href: "https://ratnawnai.com/", kind: "web" }],
    image: "/work/ratnawn-tech.jpg",
    gradient: ["#6366f1", "#0ea5e9"],
  },
  {
    slug: "zfour",
    name: "ZFour HR",
    type: "HR platform",
    line: "Attendance, field tracking, reports and HR in one dashboard.",
    tech: ["React", "Node.js", "MongoDB"], // EDIT
    links: [{ label: "Visit site", href: "https://ratnawntech.zfourhr.com/", kind: "web" }],
    image: "/work/zfour.jpg",
    gradient: ["#10b981", "#065f46"],
  },
  {
    slug: "chhota-cfo",
    name: "Chhota CFO",
    type: "Finance services",
    line: "Virtual CFO services for startups and MSMEs, from incorporation to IPO.",
    tech: ["HTML", "Bootstrap", "PHP"], // EDIT
    links: [{ label: "Visit site", href: "https://www.chhotacfo.com/", kind: "web" }],
    image: "/work/chhota-cfo.jpg",
    gradient: ["#eab308", "#1e3a8a"],
  },
  {
    slug: "stoneboy",
    name: "Stoneboy",
    type: "Construction tech",
    line: "Construction project management, construction tech and materials.",
    tech: ["Next.js", "Tailwind CSS"], // EDIT
    links: [{ label: "Visit site", href: "https://www.stoneboy.co/", kind: "web" }],
    image: "/work/stoneboy.jpg",
    gradient: ["#f97316", "#44403c"],
  },
  {
    slug: "mapstop-holidays",
    name: "Mapstop Holidays",
    type: "Travel and tours",
    line: "Holiday packages and tours, with quick enquiries from every page.",
    tech: ["Next.js", "Vercel"], // EDIT
    links: [{ label: "Visit site", href: "https://www.mapstopholidays.com/", kind: "web" }],
    image: "/work/mapstop-holidays.jpg",
    gradient: ["#06b6d4", "#15803d"],
  },
];

/* ─── Mobile apps ────────────────────────────────────────────── */

export type App = {
  slug: string;
  name: string;
  type: string;
  line: string;
  icon: string;
  /** Phone screenshots (portrait). */
  screens?: string[];
  /** Width / height of the screenshots. Defaults to "600 / 1300". */
  screenAspect?: string;
  /** Or a wide screenshot if there are no phone screens. */
  image?: string;
  tech: string[];
  links: ProjectLink[];
};

export const apps: App[] = [
  {
    slug: "saral-rojgar-app",
    name: "Saral Rojgar",
    type: "iOS + Android app · Jobs",
    line: "Job seekers find local work and apply in a tap. Employers post jobs and hire.",
    icon: "/work/saral-rojgar-app-icon.jpg",
    screens: ["/work/saral-rojgar-app-1.jpg", "/work/saral-rojgar-app-2.jpg", "/work/saral-rojgar-app-3.jpg"],
    tech: ["React Native", "Node.js"], // EDIT
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/saral-rojgar/id6779567011", kind: "appstore" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ratnawnai.saralrojgar",
        kind: "play",
      },
    ],
  },
  {
    slug: "ratnawn-ai-app",
    name: "RatNawn AI",
    type: "Android app · AI",
    line: "Turns plain product photos into catalogue-ready AI images and videos.",
    icon: "/work/ratnawn-app-icon.jpg",
    screens: ["/work/ratnawn-app-1.jpg", "/work/ratnawn-app-2.jpg", "/work/ratnawn-app-3.jpg"],
    tech: ["React Native", "Python", "GenAI"], // EDIT
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ratnawnai.RatNawnAI",
        kind: "play",
      },
    ],
  },
  {
    slug: "time-growth",
    name: "Time Growth",
    type: "iOS app · Productivity",
    line: "Plan your day, track goals and stay focused with a built-in focus timer.",
    icon: "/work/time-growth-icon.jpg",
    screens: ["/work/time-growth-1.jpg", "/work/time-growth-2.jpg", "/work/time-growth-3.jpg"],
    tech: ["Swift", "SwiftUI", "Firebase"], // EDIT
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/time-growth/id6740776827", kind: "appstore" },
    ],
  },
  {
    slug: "make-fit-simple",
    name: "Make Fit Simple",
    type: "iOS + Android app · Fitness",
    line: "Strength programs for busy moms. Workouts, recipes and progress in one app.",
    icon: "/work/make-fit-simple-icon.jpg",
    screens: ["/work/make-fit-simple-app-1.jpg", "/work/make-fit-simple-app-2.jpg", "/work/make-fit-simple-app-3.jpg"],
    screenAspect: "600 / 1067",
    tech: ["React Native", "Firebase"], // EDIT
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/make-fit-simple/id1664954162", kind: "appstore" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.deliciouslyfitnhealthy.makefitsimple",
        kind: "play",
      },
      { label: "Web app", href: "https://www.deliciouslyfitnhealthy.com/app", kind: "web" },
    ],
  },
];

/* ─── Services ───────────────────────────────────────────────── */

export const services: { icon: LucideIcon; title: string; line: string }[] = [
  { icon: Globe, title: "Business websites", line: "Fast sites that bring in enquiries." },
  { icon: LayoutDashboard, title: "Web platforms", line: "Dashboards and portals that replace spreadsheets." },
  { icon: Smartphone, title: "Mobile apps", line: "iOS and Android, launched on the stores." },
  { icon: Bot, title: "AI and automation", line: "Let software do the repetitive work." },
  { icon: ShoppingCart, title: "E-commerce and bookings", line: "Take orders and payments 24/7." },
];

/* ─── How I work ─────────────────────────────────────────────── */

export const process: { icon: LucideIcon; title: string; timeline: string; line: string }[] = [
  { icon: Search, title: "Talk", timeline: "Day 1", line: "Free call. You get a clear plan and fixed price." },
  { icon: PenTool, title: "Design", timeline: "Week 1", line: "See the screens before any code is written." },
  { icon: Hammer, title: "Build", timeline: "From 4 weeks", line: "Weekly updates on a live preview link." },
  { icon: Rocket, title: "Launch", timeline: "Go live", line: "I put it live: domain, hosting and app stores." },
];

/* ─── Why me ─────────────────────────────────────────────────── */

export const reasons: { icon: LucideIcon; title: string }[] = [
  { icon: MessagesSquare, title: "You talk to me directly, no middlemen" },
  { icon: Zap, title: "Most projects live in 4 to 8 weeks" },
  { icon: Code, title: "Clean code you fully own" },
  { icon: Handshake, title: "Fixed price, agreed before we start" },
];

/* ─── Tech marquee ───────────────────────────────────────────── */

/** `icon` is a name from https://tech-stack-icons.com */
export const techStack: { name: string; icon: IconName }[] = [
  { name: "Next.js", icon: "nextjs2" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "React Native", icon: "reactnative" },
  { name: "Swift", icon: "swift" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Firebase", icon: "firebase" },
  { name: "AWS", icon: "aws" },
  { name: "Vercel", icon: "vercel" },
  { name: "OpenAI", icon: "openai" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
];

/* ─── Testimonials ───────────────────────────────────────────── */

/**
 * Testimonials from real clients.
 * The quotes below are DRAFTS. Send each one to that client, let them edit it,
 * then fill in their real `name` and set `approved: true`. Only approved quotes
 * are shown, and the whole section stays hidden until at least one is approved.
 */
export type Testimonial = {
  name: string; // EDIT: the client's real name
  role: string;
  company: string;
  quote: string;
  approved: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "",
    role: "Founder",
    company: "Saral Rojgar",
    quote:
      "Mohit built our job platform and our iOS and Android apps. Employers and job seekers can now find each other in minutes.",
    approved: false,
  },
  {
    name: "",
    role: "Founder",
    company: "RatNawn AI",
    quote:
      "He turned our AI ideas into a working app. Our customers create product images and videos in a few taps.",
    approved: false,
  },
  {
    name: "",
    role: "Director",
    company: "Chhota CFO",
    quote: "Our new website looks professional and brings in enquiries from startups and MSMEs. Easy to work with.",
    approved: false,
  },
  {
    name: "",
    role: "Founder",
    company: "Make Fit Simple",
    quote: "Our fitness app went live on the App Store and Google Play. Our members use it every day.",
    approved: false,
  },
  {
    name: "",
    role: "Founder",
    company: "Stoneboy",
    quote: "Mohit understood construction quickly and built exactly what we needed. Clear communication throughout.",
    approved: false,
  },
  {
    name: "",
    role: "Founder",
    company: "Mapstop Holidays",
    quote: "Our travel website shows our packages beautifully and makes it easy for customers to enquire.",
    approved: false,
  },
];

/* ─── FAQ ────────────────────────────────────────────────────── */

export const faqs: { q: string; a: string }[] = [
  {
    q: "How much does it cost?",
    a: "You get a fixed price after a free call, so there are no surprises. It depends on what you need.",
  },
  {
    q: "How long does it take?",
    a: "Websites take about 4 weeks. Platforms and apps usually take 6 to 12 weeks.",
  },
  {
    q: "Who owns the code?",
    a: "You do. All code, designs and accounts are handed over to you.",
  },
];
