import { CheckCircle2, Shirt, Sparkles, Trash2 } from "lucide-react";

function BeforeCard() {
  return (
    <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink">Before</h3>
        <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
          messy room
        </span>
      </div>
      <div className="relative min-h-72 overflow-hidden rounded-2xl bg-slate-100">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#d7c2a4]" />
        <div className="absolute left-8 top-10 h-28 w-36 rotate-[-3deg] rounded-2xl bg-[#d5dde2]" />
        <div className="absolute left-12 top-16 h-9 w-24 rounded-full bg-[#bcc7cf]" />
        <div className="absolute bottom-14 right-8 h-16 w-28 rotate-6 rounded-xl bg-[#7b8a87]" />
        <Trash2 aria-hidden="true" className="absolute bottom-24 left-12 h-8 w-8 rotate-12 text-rose-500" />
        <Shirt aria-hidden="true" className="absolute right-20 top-20 h-10 w-10 rotate-[-15deg] text-slate" />
        <div className="absolute bottom-10 left-24 h-4 w-28 rounded-full bg-[#9a8b74]" />
        <div className="absolute right-10 top-12 h-3 w-16 rounded-full bg-[#9a8b74]" />
      </div>
    </div>
  );
}

function AfterCard() {
  return (
    <div className="rounded-3xl border border-emerald/20 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink">After</h3>
        <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-emerald">
          clean room
        </span>
      </div>
      <div className="relative min-h-72 overflow-hidden rounded-2xl bg-[#eef8f6]">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#d9c8af]" />
        <div className="absolute left-8 top-10 h-28 w-36 rounded-2xl bg-white shadow-soft" />
        <div className="absolute left-12 top-16 h-9 w-24 rounded-full bg-mint" />
        <div className="absolute bottom-14 right-8 h-16 w-28 rounded-xl bg-[#f8fbfa] shadow-soft" />
        <Sparkles aria-hidden="true" className="absolute right-12 top-12 h-8 w-8 text-emerald" />
        <CheckCircle2 aria-hidden="true" className="absolute bottom-24 left-12 h-8 w-8 text-emerald" />
        <div className="absolute bottom-10 left-24 h-3 w-28 rounded-full bg-white/80" />
        <div className="absolute right-10 top-24 h-3 w-16 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <BeforeCard />
      <AfterCard />
    </div>
  );
}
