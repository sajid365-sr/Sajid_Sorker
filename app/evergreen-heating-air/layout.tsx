import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evergreen Heating & Air | HVAC Services in Dallas–Fort Worth",
  description:
    "Explore AC repair, heating, installation, and HVAC maintenance services for homes across the Dallas–Fort Worth area.",
};

export default function EvergreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
