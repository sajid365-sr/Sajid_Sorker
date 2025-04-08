import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever we need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Portfolio website",
    description:
      "This is my personal website. Designed and developed with a conscious effort.",
    tech: ["Next js 13", "Tailwind CSS", "TypeScript", "Framer motion"],
    code: "",
    live: "https://sajidsorker.com",
    thumbnail: "portfolio-v2.png",
  },
  {
    title: "Traveon",
    description:
      "AI Travel Assistant. Intelligent assistant generating real-time travel itineraries based on user preferences, flight routes, and budgets. Features conversational travel advice via chat.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Clerk Auth",
      "Gemini API",
    ],
    code: "",
    live: "https://traveon-blue.vercel.app/",
    thumbnail: "traveon.png",
    featured: true,
  },
  {
    title: "Outfitique",
    description:
      "AI Fashion & Styling App. AI-powered fashion app offering wardrobe management, style recommendations, and virtual try-on features, including background removal and contextual style advice.",
    tech: [
      "Next JS",
      "Prisma",
      "TypeScript",
      "Supabase",
      "Clerk Auth",
      "Gemini API",
      "Hugging Face",
    ],
    code: "",
    live: "https://outfitique.vercel.app/",
    thumbnail: "outfitique.png",
    featured: true,
  },
  {
    title: "Nutrily",
    description:
      "Mobile-friendly app that scans food items to analyze nutritional content and health impacts based on dietary preferences using AI insights.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Clerk Auth",
      "Gemini API",
    ],
    code: "",
    live: "https://nutrily-blue.vercel.app/",
    thumbnail: "nutrily.png",
    featured: true,
  },

  {
    title: "Jahid Enterprise",
    description:
      "A business portfolio website. I use this system for front end “REACT, Tailwind CSS, Axios, react-query” and for Backend “Node js, Express js, MongoDB",
    tech: ["React", "tailwind CSS", "MongoDB", "Node js", "Firebase"],
    live: "https://jahid-enterprise-r9d2.vercel.app/",
    thumbnail: "jahid_enterprise.png",
  },

  {
    title: "Atonu Enterprise",
    description:
      "A business portfolio website. I use this system for front end “REACT, Tailwind CSS, Axios, react-query” and for Backend “Node js, Express js, MongoDB",
    tech: ["React", "tailwind CSS", "MongoDB", "Node js", "Firebase"],
    live: "https://atonu-enterprise.web.app/",
    thumbnail: "atonu_enterprise.png",
  },

  {
    title: "Next Store",
    description:
      "I have created an e-commerce store using Next js, React, Sanity io and live payment integration with Stripe",
    tech: ["Next js", "React", "Sanity io", "Stripe"],
    code: "",
    live: "https://next-store-blue.vercel.app/",
    thumbnail: "next_store.png",
  },
  {
    title: "3D Portfolio",
    description:
      "I have a 3d-portfolio website using Three js ans React three.",
    tech: ["Next js", "Three js", "Three"],
    code: "",
    live: "https://3d-portfolio-dun.vercel.app/",
    thumbnail: "3d_portfolio.png",
  },
];
