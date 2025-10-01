import classNames from "classnames";

import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import { ProjectTypes, SocialTypes, WorkedTypes } from "./types";

// whenever we need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Projects", "Contact"];

// skill list
export const skills = [
  "Javascript",
  "React js",
  "Next js",
  "Tailwind CSS",
  "Material UI",
  "Firebase",
  "Node js",
  "Express js",
  "MongoDB",
  "AI Chatbot",
  "Wordpress",
];

// worked data
export const worked_data: WorkedTypes[] = [
  {
    id: 0,
    label: "Mutual Trust Bank",
    description: [
      "Handled day-to-day account operations including deposits, withdrawals, and account maintenance.",
      "Prepared and maintained accurate documentation and financial records with strong attention to detail.",
      "Developed customer service skills by dealing with diverse clients and resolving banking-related issues.",
      "Built a strong foundation in time management, operational accuracy, and multitasking under pressure.",
    ],
    deadline: "September 2020 – January 2022",
    title: "Accounts Manager",
    company: "Mutual Trust Bank PLC",
    url: "https://mutualtrustbank.com",
  },
  {
    id: 1,
    label: "Mutual Trust Bank",
    description: [
      "Lead the Agent Banking Center operations, ensuring smooth daily workflow and compliance with banking policies.",
      "Supervise staff and manage office activities with a focus on efficiency, accountability, and teamwork.",
      "Ensure proper documentation, reporting, and record-keeping to maintain transparency and trust.",
      "Deliver excellent customer service by understanding client needs, solving problems, and fostering long-term relationships.",
      "Demonstrated strong communication and leadership skills while coordinating with head office and local stakeholders.",
      "Recognized for dedication, hard work, and ability to manage high workloads under tight deadlines.",
    ],
    deadline: "January 2022 – Present",
    title: "Office In Charge",
    company: "Mutual Trust Bank PLC",
    url: "https://mutualtrustbank.com",
  },
  {
    id: 2,
    label: "Trendirect",
    description: [
      "Specialized in sourcing 100% original and authentic products directly from China.",
      "Managed the entire process of procurement, quality checking, and shipment (Air & Sea) to Bangladesh.",
      "Developed a streamlined system to track expenses, earnings, and product deliveries efficiently.",
      "Enhanced customer trust by ensuring transparency, timely delivery, and competitive pricing.",
      "Built a reliable platform for businesses and individuals to access international products seamlessly.",
    ],
    deadline: "2024 – Present",
    title: "Co-Founder & CEO",
    company: "Trendirect",
    url: "https://trendirect.com",
  },
];

// project data
export const projects: ProjectTypes[] = [
  // {
  //   title: "Portfolio website",
  //   description:
  //     "This is my personal website. Designed and developed with a conscious effort.",
  //   tech: ["Next js 13", "Tailwind CSS", "TypeScript", "Framer motion"],
  //   code: "",
  //   live: "https://sajidsorker.com",
  //   thumbnail: "portfolio-v2.png",
  // },
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
    code: "https://github.com/sajid365-sr/Traveon",
    live: "https://traveon-blue.vercel.app/",
    thumbnail: "traveon.png",
  },
  {
    title: "Legal Connect",
    description:
      "A modern legal services platform that connects clients with professional lawyers. Features include client and lawyer signup, secure authentication, profile management, and case handling. Built for seamless interaction between clients and legal professionals.",
    tech: [
      "Next.js",
      "React",
      "Prisma ORM",
      "MongoDB",
      "NextAuth.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    code: "https://github.com/sajid365-sr/lawyer",
    live: "https://lawyerconnect.vercel.app/",
    thumbnail: "legal_connect.png",
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
    code: "https://github.com/sajid365-sr/outfitique",
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
    code: "https://github.com/sajid365-sr/nutrily",
    live: "https://nutrily-blue.vercel.app/",
    thumbnail: "nutrily.png",
    featured: true,
  },

  {
    title: "Jahid Enterprise",
    description:
      "A business portfolio website. I use this system for front end “REACT, Tailwind CSS, Axios, react-query” and for Backend “Node js, Express js, MongoDB",
    tech: ["React", "tailwind CSS", "MongoDB", "Node js", "Firebase"],
    code: "https://github.com/sajid365-sr/jahid_enterprise",
    live: "https://jahid-enterprise-r9d2.vercel.app/",
    thumbnail: "jahid_enterprise.png",
  },
  {
    title: "Digishelve",
    description:
      "Digishelve is a digital product selling platform that provides instant downloads and a seamless shopping experience for premium digital goods.",
    tech: ["Wordpress", "Elementor"],
    live: "https://digishelve.com/",
    thumbnail: "digishelve.png",
  },

  // {
  //   title: "Atonu Enterprise",
  //   description:
  //     "A business portfolio website. I use this system for front end “REACT, Tailwind CSS, Axios, react-query” and for Backend “Node js, Express js, MongoDB",
  //   tech: ["React", "tailwind CSS", "MongoDB", "Node js", "Firebase"],
  //   live: "https://atonu-enterprise.web.app/",
  //   thumbnail: "atonu_enterprise.png",
  // },

  {
    title: "Next Store",
    description:
      "I have created an e-commerce store using Next js, React, Sanity io and live payment integration with Stripe",
    tech: ["Next js", "React", "Sanity io", "Stripe"],
    code: "https://github.com/sajid365-sr/Next_Store",
    live: "https://next-store-blue.vercel.app/",
    thumbnail: "next_store.png",
  },
  {
    title: "3D Portfolio",
    description:
      "I have a 3d-portfolio website using Three js ans React three.",
    tech: ["Next js", "Three js", "Three"],
    code: "https://github.com/sajid365-sr/3D_Portfolio",
    live: "https://3d-portfolio-dun.vercel.app/",
    thumbnail: "3d_portfolio.png",
  },
];

// social media data
export const socialData: SocialTypes[] = [
  { icon: FiGithub, url: "https://github.com/sajid365-sr" },
  { icon: FiLinkedin, url: "https://www.linkedin.com/in/sajid365-sr/" },
  { icon: FiTwitter, url: "https://twitter.com/sajid365_sr" },
  { icon: FiFacebook, url: "https://web.facebook.com/sajidsorker/" },
];
