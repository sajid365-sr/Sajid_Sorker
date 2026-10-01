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
  const primary =
    "hvac-cta-primary inline-flex min-h-[52px] w-full items-center justify-center rounded-[4px] bg-[#c45c26] px-6 text-[15px] font-semibold tracking-wide text-white transition-[background-color,transform] duration-200 hover:bg-[#a84b1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2a3a] sm:w-auto sm:min-w-[240px]";

  const secondary = onDark
    ? "inline-flex min-h-[52px] w-full items-center justify-center rounded-[4px] border border-[#f7f4ef]/40 bg-transparent px-6 text-[15px] font-semibold tracking-wide text-[#f7f4ef] transition-colors duration-200 hover:border-[#f7f4ef] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26] sm:w-auto"
    : "inline-flex min-h-[52px] w-full items-center justify-center rounded-[4px] border border-[#142433]/20 bg-transparent px-6 text-[15px] font-semibold tracking-wide text-[#142433] transition-colors duration-200 hover:border-[#142433] hover:bg-[#142433] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c26] sm:w-auto";

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
        align === "center" ? "sm:justify-center" : ""
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
