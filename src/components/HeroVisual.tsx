import { CalendarDays, Check, Clock, ShieldCheck } from "lucide-react";
import { heroChecks, quickStats } from "@/lib/data";

export function HeroVisual() {
  return (
    <div
      aria-label="Example cleaning booking checklist"
      className="float-card relative mx-auto w-full max-w-lg"
    >
      <div className="absolute -left-4 top-10 hidden h-28 w-28 rounded-3xl bg-mint sm:block" />
      <div className="absolute -right-3 bottom-8 hidden h-24 w-24 rounded-full border border-emerald/20 sm:block" />
      <div className="relative rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-emerald">Next available</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              Apartment refresh
            </h2>
          </div>
          <div className="rounded-2xl bg-mint p-3 text-emerald">
            <ShieldCheck aria-hidden="true" className="h-6 w-6" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-mist p-4">
            <CalendarDays aria-hidden="true" className="mb-3 h-5 w-5 text-emerald" />
            <p className="text-sm font-semibold text-ink">Tomorrow</p>
            <p className="text-sm text-slate">09:30, Vienna</p>
          </div>
          <div className="rounded-2xl bg-mist p-4">
            <Clock aria-hidden="true" className="mb-3 h-5 w-5 text-emerald" />
            <p className="text-sm font-semibold text-ink">3 hours</p>
            <p className="text-sm text-slate">Regular cleaning</p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {heroChecks.map(({ label, Icon }) => (
            <div
              className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3"
              key={label}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-emerald">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-ink">{label}</span>
              <Check aria-hidden="true" className="ml-auto h-4 w-4 text-emerald" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {quickStats.map(({ value, label, Icon }) => (
            <div className="rounded-2xl bg-ink p-4 text-white" key={label}>
              <Icon aria-hidden="true" className="mb-3 h-5 w-5 text-mint" />
              <p className="text-xl font-semibold">{value}</p>
              <p className="text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
