import type { Metadata } from "next";
import HvacDemoPage from "components/hvac/HvacDemoPage";

export const metadata: Metadata = {
  title: "HVAC Website Demo | Sajid Sorker",
  description:
    "Demonstration HVAC contractor website showing a conversion-focused layout, not a live client.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://www.sajidsorker.com/hvac-demo",
  },
};

export default function HvacDemoRoute() {
  return <HvacDemoPage />;
}
