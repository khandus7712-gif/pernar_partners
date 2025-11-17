import { ReactNode } from "react";

type CardProps = {
  title?: string;
  description?: string;
  icon?: ReactNode | string;
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
};

export default function Card({
  title,
  description,
  icon,
  children,
  footer,
  className = ""
}: CardProps) {
  return (
    <div className={`card ${className}`}>
      {icon && (
        <div className="card-icon" aria-hidden>
          {icon}
        </div>
      )}
      {title && (
        <h3 className="card-title">{title}</h3>
      )}
      {description && (
        <p className="card-desc">{description}</p>
      )}
      {children}
      {footer && (
        <div className="mt-4 pt-4 border-t border-[#334155]">
          {footer}
        </div>
      )}
    </div>
  );
}


