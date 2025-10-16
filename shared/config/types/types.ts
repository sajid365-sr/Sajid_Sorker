import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

// social data types
export type SocialTypes = {
  name: string;
  icon: IconType;
  url: string;
};

// button props
export type ButtonProps = {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
  targetBlank?: boolean;
  onClick?: () => void;
  children?: ReactNode;
};

// project data types
export type ProjectTypes = {
  title: string;
  description?: string;
  tech: Array<string>;
  code?: string;
  live: string;
  thumbnail: string;
  featured?: boolean;
  secondary?: boolean;
};

// worked data types
export type WorkedTypes = {
  label: string;
  description: Array<string>;
  deadline: string;
  title: string;
  company: string;
  url: string;
  id: number;
  category: string;
};
