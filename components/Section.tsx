import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  alt = false
}: SectionProps) {
  return (
    <section id={id} className={`section-spacing ${alt ? "section-alt" : ""} ${className}`}>
      <div className="container-responsive">
        {(title || subtitle) && (
          <header className="mb-16 text-center">
            {subtitle && (
              <p className="text-sm font-bold text-[#ff6a00] mb-4 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-center">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}


