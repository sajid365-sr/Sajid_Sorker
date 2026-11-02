import Link from "next/link";

type HvacCtasProps = {
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  align?: "start" | "center";
  onDark?: boolean;
};

const HvacCtas = ({
  primaryHref = "#audit",
  secondaryHref = "/hvac-demo",
  primaryLabel = "Get a Free Website Audit",
  secondaryLabel = "See the Demo",
  align = "start",
  onDark = false,
}: HvacCtasProps) => {
  // Primary CTA: Cyan-to-blue gradient with portfolio glow
  const primary =
    "hvac-cta-primary inline-flex min-h-[52px] w-full items-center justify-center rounded-lg px-6 font-mono text-[15px] font-semibold tracking-wide text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:w-auto sm:min-w-[240px]";

  // Secondary CTA: Cyan-400 outline button with hover fill
  const secondary =
    "inline-flex min-h-[52px] w-full items-center justify-center rounded-lg border-2 border-cyan-400 bg-transparent px-6 font-mono text-[15px] font-semibold tracking-wide text-cyan-400 transition-colors duration-200 hover:bg-cyan-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:w-auto";

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${align === "center" ? "sm:justify-center" : ""
        }`}
    >
      <a href={primaryHref} className={primary}>
        {primaryLabel}
      </a>
      <Link href={secondaryHref} className={secondary}>
        {secondaryLabel}
      </Link>
    </div>
  );
};

export default HvacCtas;
