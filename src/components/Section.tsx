import type { ReactNode } from "react";
import { clsx } from "clsx";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children
}: SectionProps) {
  return (
    <section id={id} className={clsx("py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-8 text-slate sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
