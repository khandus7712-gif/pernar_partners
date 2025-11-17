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
    }
  | {
      asChild: true;
      href?: never;
      onClick?: never;
      children: ReactNode;
      variant?: "primary" | "secondary" | "ghost";
      className?: string;
    };

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props as any;
  
  const baseStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-secondary bg-transparent border-transparent hover:bg-[#F9FAFB]"
  } as const;

  const variantKey = variant as keyof typeof baseStyles;
  const classes = `${baseStyles[variantKey]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} onClick={(props as any).onClick}>
      {children}
    </button>
  );
}


