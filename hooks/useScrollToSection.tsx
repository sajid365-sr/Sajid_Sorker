"use client";

import { useRouter } from "next/navigation";

export const useScrollToSection = () => {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    // If current path isn't home, navigate first
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust based on navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn(`No element found with id "${id}"`);
    }
  };

  return { scrollToSection };
};
