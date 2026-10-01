import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sajidsorker.com"),
  title: {
    default: "Sajid Sorker",
    template: "%s",
  },
  description:
    "Highly motivated and very passionate Full Stack Developer with two years of experience in JavaScript, React js, Next js, Firebase, Tailwind CSS, Node js, Express js, MongoDB",
  keywords:
    "Web Development Company, Best Web development agency, Web Development Services, Website Development Company, Website Development Services, Website Development Bangladesh, Web Development Bangladesh, Company, Services, Bangladesh",
  verification: {
    google: "3yNZMVW_AuwCoLV0wk7WxYfo2hsZ4J8nVspHQQ5vg30",
  },
  alternates: {
    canonical: "https://www.sajidsorker.com/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Sajid Sorker",
    title: "Sajid Sorker",
    description:
      "Web Development Company, Best Web development agency, Web Development Services, Website Development Company, Website Development Services, Website Development Bangladesh, Web Development Bangladesh, Company, Services, Bangladesh",
    url: "https://sajidsorker.com/",
    images: ["https://sajidsorker.com/images/sajid-sorker.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@sajid365_sr",
    creator: "@sajid365_sr",
    description:
      "Highly motivated and very passionate Full Stack Developer with three years of experience in Typescript, React js, Next js, Firebase, Tailwind CSS, Material UI, Node js, Express js, MongoDB",
    images: ["https://sajidsorker.com/images/sajid-sorker.jpg"],
  },
  other: {
    "article:publisher": "https://www.facebook.com/sajid365.sr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={urbanist.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
