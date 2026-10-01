import type { Metadata } from "next";
import HvacPage from "components/hvac/HvacPage";

const title = "HVAC Website Design & Development | Sajid Sorker";
const description =
  "Modern, fast, mobile-first websites for HVAC contractors designed to generate more calls, quote requests, and service inquiries.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "HVAC website design",
    "HVAC web developer",
    "contractor website",
    "AC repair website",
    "heating and cooling website",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/hvac-websites",
  },
  openGraph: {
    title,
    description,
    url: "/hvac-websites",
    siteName: "Sajid Sorker",
    type: "website",
    images: ["/images/sajid-sorker.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/sajid-sorker.jpg"],
  },
};

export default function HvacWebsitesRoute() {
  return <HvacPage />;
}
