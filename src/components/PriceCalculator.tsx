"use client";

import { useMemo, useState } from "react";
import { Calculator, Clock3, Euro, Info } from "lucide-react";
import {
  calculateEstimate,
  cleaningOptions,
  type CleaningType,
  propertyOptions,
  type PropertySize,
  type PropertyType,
  sizeOptions
} from "@/lib/pricing";

function Field<T extends string>({
  id,
  label,
  value,
  options,
  onChange
}: {
  id: string;
  label: string;
  value: T;
  options: Array<{ label: string; value: T }>;
  onChange: (value: T) => void;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <select
        className="focus-ring h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm font-medium text-ink shadow-sm"
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function PriceCalculator() {
  const [propertyType, setPropertyType] = useState<PropertyType>("apartment");
  const [size, setSize] = useState<PropertySize>("medium");
  const [cleaningType, setCleaningType] = useState<CleaningType>("regular");

  const estimate = useMemo(
    () => calculateEstimate(propertyType, size, cleaningType),
    [propertyType, size, cleaningType]
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-emerald">
            <Calculator aria-hidden="true" className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-xl font-semibold text-ink">Estimate your cleaning</h3>
            <p className="text-sm text-slate">Adjust the details for a quick guide price.</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <Field
            id="property-type"
            label="Property type"
            value={propertyType}
            options={propertyOptions}
            onChange={setPropertyType}
          />
          <Field
            id="property-size"
            label="Size"
            value={size}
            options={sizeOptions}
            onChange={setSize}
          />
          <Field
            id="cleaning-type"
            label="Cleaning type"
            value={cleaningType}
            options={cleaningOptions}
            onChange={setCleaningType}
          />
        </div>
      </div>

      <aside
        className="rounded-3xl bg-ink p-5 text-white shadow-soft sm:p-8"
        aria-live="polite"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
          Your estimate
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-5">
            <Euro aria-hidden="true" className="mb-4 h-6 w-6 text-mint" />
            <p className="text-sm text-white/70">Estimated price</p>
            <p className="mt-1 text-4xl font-semibold">EUR {estimate.price}</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-5">
            <Clock3 aria-hidden="true" className="mb-4 h-6 w-6 text-mint" />
            <p className="text-sm text-white/70">Estimated duration</p>
            <p className="mt-1 text-4xl font-semibold">{estimate.duration}</p>
          </div>
        </div>
        <p className="mt-5 flex gap-2 text-sm leading-6 text-white/70">
          <Info aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-mint" />
          Final pricing depends on address, surface condition, and special requests.
        </p>
      </aside>
    </div>
  );
}
