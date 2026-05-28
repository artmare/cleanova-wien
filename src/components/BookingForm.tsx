"use client";

import { type FormEvent, useState } from "react";
import { Send, Sparkles } from "lucide-react";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald">
          Book a Cleaning
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Tell us what needs to shine.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate">
          Share a few details and Cleanova will confirm availability, pricing, and
          the next available slot. No pressure, no hidden commitment.
        </p>
        <div className="mt-6 rounded-3xl border border-line bg-mist p-5">
          <Sparkles aria-hidden="true" className="mb-4 h-6 w-6 text-emerald" />
          <p className="font-semibold text-ink">Fast lead response</p>
          <p className="mt-2 text-sm leading-6 text-slate">
            This portfolio form is frontend-only, but it is structured for email,
            CRM, reminder, and invoice automation.
          </p>
        </div>
      </div>

      <form
        className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-1" htmlFor="name">
            <span className="mb-2 block text-sm font-semibold text-ink">Name</span>
            <input
              className="focus-ring h-12 w-full rounded-2xl border border-line px-4 text-sm text-ink"
              id="name"
              name="name"
              placeholder="Anna Meyer"
              required
              type="text"
            />
          </label>
          <label className="block sm:col-span-1" htmlFor="contact">
            <span className="mb-2 block text-sm font-semibold text-ink">
              Phone or email
            </span>
            <input
              className="focus-ring h-12 w-full rounded-2xl border border-line px-4 text-sm text-ink"
              id="contact"
              name="contact"
              placeholder="+43 660 000000"
              required
              type="text"
            />
          </label>
          <label className="block" htmlFor="booking-property">
            <span className="mb-2 block text-sm font-semibold text-ink">
              Property type
            </span>
            <select
              className="focus-ring h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-ink"
              id="booking-property"
              name="property"
              required
            >
              <option>Apartment</option>
              <option>Office</option>
              <option>Airbnb</option>
            </select>
          </label>
          <label className="block" htmlFor="date">
            <span className="mb-2 block text-sm font-semibold text-ink">
              Preferred date
            </span>
            <input
              className="focus-ring h-12 w-full rounded-2xl border border-line px-4 text-sm text-ink"
              id="date"
              name="date"
              required
              type="date"
            />
          </label>
          <label className="block sm:col-span-2" htmlFor="message">
            <span className="mb-2 block text-sm font-semibold text-ink">Message</span>
            <textarea
              className="focus-ring min-h-32 w-full resize-y rounded-2xl border border-line px-4 py-3 text-sm text-ink"
              id="message"
              name="message"
              placeholder="Tell us the district, property size, and any special details."
            />
          </label>
        </div>

        <button
          className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-emerald sm:w-auto"
          type="submit"
        >
          Send booking request
          <Send aria-hidden="true" className="h-4 w-4" />
        </button>

        {submitted && (
          <p
            className="mt-5 rounded-2xl bg-mint px-4 py-3 text-sm font-semibold text-emerald"
            role="status"
          >
            Thank you! We will contact you shortly.
          </p>
        )}
      </form>
    </div>
  );
}
