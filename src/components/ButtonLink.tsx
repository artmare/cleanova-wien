import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  return (
    <a
      className={clsx(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200",
        variant === "primary"
          ? "bg-ink text-white shadow-card hover:-translate-y-0.5 hover:bg-emerald"
          : "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-emerald hover:text-emerald"
      )}
      href={href}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
