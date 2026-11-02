import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evergreen Heating & Air | HVAC Services",
  description:
    "Professional HVAC installation, repair, and maintenance services. Serving homeowners across the region with honest, reliable heating and air conditioning solutions.",
};

export default function EvergreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
