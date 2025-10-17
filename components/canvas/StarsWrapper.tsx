"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("components/canvas/Stars"), {
  ssr: false,
});

export default function StarsWrapper() {
  return <StarsCanvas />;
}
