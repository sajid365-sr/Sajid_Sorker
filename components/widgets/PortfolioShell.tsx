import type { ReactNode } from "react";
import Header from "@widgets/Header";
import Mail from "@widgets/Mail";
import Socials from "@widgets/Socials";
import Glassify from "@components/Glassify";
import MouseGlow from "@components/MouseGlow";

const PortfolioShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-base container bg-slate-950">
      <Socials />
      <Mail />
      <Glassify />
      <MouseGlow />
      <Header />
      {children}
    </div>
  );
};

export default PortfolioShell;
