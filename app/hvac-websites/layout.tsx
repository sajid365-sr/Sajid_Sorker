import type { ReactNode } from "react";
import HvacShell from "components/hvac/HvacShell";

export default function HvacWebsitesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <HvacShell>{children}</HvacShell>;
}

