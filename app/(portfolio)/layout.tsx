import PortfolioShell from "components/widgets/PortfolioShell";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PortfolioShell>{children}</PortfolioShell>;
}
