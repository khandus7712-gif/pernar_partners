import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps =
  | {
      asChild?: false;
      href?: string;
      onClick?: () => void;
      children: ReactNode;
      variant?: "primary" | "secondary" | "ghost";
      className?: string;
      type?: "button" | "submit" | "reset";
      disabled?: boolean;
    }
  | {
      asChild: true;
      href?: never;
      onClick?: never;
      children: ReactNode;
      variant?: "primary" | "secondary" | "ghost";
      className?: string;
      type?: "button" | "submit" | "reset";
      disabled?: boolean;
    };

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", type = "button", disabled = false } = props as any;
  
  const baseStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-secondary bg-transparent border-transparent hover:bg-[#F9FAFB]"
  } as const;

  const variantKey = variant as keyof typeof baseStyles;
  const classes = `${baseStyles[variantKey]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if ("href" in props && props.href && !disabled) {
    return (
      <Link href={props.href as any} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={(props as any).onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}


