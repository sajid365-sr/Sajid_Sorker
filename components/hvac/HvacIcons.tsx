import type { problems } from "./hvacContent";

type ProblemIcon = (typeof problems)[number]["icon"];

const iconClass = "h-5 w-5";

const HvacProblemIcon = ({ name }: { name: ProblemIcon }) => {
  const props = {
    className: iconClass,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  if (name === "phone") {
    return (
      <svg {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5.5c0-.8.7-1.5 1.5-1.5H7c.6 0 1.1.4 1.3 1l.8 2.2c.2.6 0 1.2-.5 1.6L7.4 10c.8 1.6 2 2.9 3.6 3.6l1.2-1.2c.4-.4 1-.7 1.6-.5l2.2.8c.6.2 1 .7 1 1.3v2.5c0 .8-.7 1.5-1.5 1.5C8.8 18 3 12.2 3 5.5z"
        />
      </svg>
    );
  }

  if (name === "mobile") {
    return (
      <svg {...props}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path strokeLinecap="round" d="M11 18h2" />
      </svg>
    );
  }

  if (name === "cta") {
    return (
      <svg {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h10M12 5l7 7-7 7"
        />
      </svg>
    );
  }

  if (name === "design") {
    return (
      <svg {...props}>
        <rect x="4" y="5" width="16" height="12" rx="1.5" />
        <path strokeLinecap="round" d="M8 17v2M16 17v2M4 9h16" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h6v4H4zM14 7h6v4h-6zM9 13h6v4H9z"
      />
      <path strokeLinecap="round" d="M7 11v2M17 11v2M12 11v2" />
    </svg>
  );
};

export default HvacProblemIcon;
