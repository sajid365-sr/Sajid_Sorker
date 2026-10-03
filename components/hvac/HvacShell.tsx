import type { ReactNode } from "react";
import HvacNav from "./HvacNav";
import HvacRails from "./HvacRails";
import MouseGlow from "@components/MouseGlow";

const HvacShell = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-200">
            <MouseGlow />
            <HvacRails />
            <HvacNav />
            {children}
        </div>
    );
};

export default HvacShell;

