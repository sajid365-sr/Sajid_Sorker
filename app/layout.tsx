// app/layout.tsx
import "./globals.css";
import Header from "@widgets/Header";
import Mail from "@widgets/Mail";
import Socials from "@widgets/Socials";
import Meta from "@components/Meta";
import { Urbanist } from "next/font/google";
import Glassify from "@components/Glassify";
import Footer from "@widgets/Footer";
import MouseGlow from "@components/MouseGlow";

// font
const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={urbanist.className}>
      <head>
        <Meta />
      </head>

      <body className="text-base bg-white dark:bg-slate-900 dark:text-slate-200">
        <Socials />
        <Mail />
        <Glassify />
        <MouseGlow />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
