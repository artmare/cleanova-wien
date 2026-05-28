import {
  ArrowUpRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  PhoneCall
} from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { BookingForm } from "@/components/BookingForm";
import { ButtonLink } from "@/components/ButtonLink";
import { HeroVisual } from "@/components/HeroVisual";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Section } from "@/components/Section";
import {
  automationItems,
  faqs,
  services,
  testimonials,
  trustItems
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <a className="focus-ring flex items-center gap-3 rounded-full" href="#">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
            CW
          </span>
          <span className="text-base font-semibold tracking-tight text-ink">
            Cleanova Wien
          </span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-slate hover:text-emerald" href="#services">
            Services
          </a>
          <a className="text-sm font-medium text-slate hover:text-emerald" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium text-slate hover:text-emerald" href="#booking">
            Booking
          </a>
        </nav>
        <a
          className="focus-ring hidden min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-emerald sm:inline-flex"
          href="#booking"
        >
          Book now
        </a>
      </header>

      <section className="relative overflow-hidden pb-14 pt-10 sm:pb-20 lg:pt-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="reveal">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Premium Cleaning Services in Vienna
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
              Fast, reliable and detail-focused cleaning for apartments, offices
              and Airbnb properties.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#booking">Book a Cleaning</ButtonLink>
              <ButtonLink href="#pricing" variant="secondary">
                Get a Free Quote
              </ButtonLink>
            </div>
            <p className="mt-6 flex max-w-xl items-start gap-2 text-sm leading-6 text-slate">
              <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-emerald" />
              Trusted by fictional Vienna hosts, busy households, and small
              offices who need a cleaner first impression.
            </p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-line bg-mist">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <div className="flex items-center gap-3 text-sm font-semibold text-ink" key={item}>
              <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-emerald" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <Section
        id="services"
        title="Cleaning services built around real Vienna schedules."
        description="Clear packages for homes, offices, and short-stay apartments, with detail-focused standards from the first visit."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, price, Icon }) => (
            <article
              className="group rounded-3xl border border-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-emerald/40"
              key={title}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-emerald">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-slate">{description}</p>
              <p className="mt-5 text-sm font-semibold text-emerald">{price}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        className="bg-mist"
        title="Get a fast cleaning estimate before you book."
        description="Use the frontend-only calculator to preview a realistic price range and appointment length."
      >
        <PriceCalculator />
      </Section>

      <Section
        title="Automation included"
        description="The website is designed as a lead-generation system, ready to connect to practical business automation when the fictional client grows."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {automationItems.map(({ title, description, Icon }) => (
            <article className="rounded-3xl border border-line bg-white p-6 shadow-card" key={title}>
              <Icon aria-hidden="true" className="mb-5 h-7 w-7 text-emerald" />
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="bg-mist"
        title="A visible before-and-after promise."
        description="Elegant CSS-based placeholders show the transformation without using copyrighted or stock imagery."
      >
        <BeforeAfter />
      </Section>

      <Section id="booking" className="bg-white">
        <BookingForm />
      </Section>

      <Section
        className="bg-mist"
        title="What Vienna clients would say."
        description="Fictional testimonials written to feel specific, local, and realistic for a premium service business."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure className="rounded-3xl border border-line bg-white p-6 shadow-card" key={testimonial.name}>
              <blockquote className="text-base leading-8 text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <div className="mx-auto max-w-4xl divide-y divide-line rounded-3xl border border-line bg-white shadow-card">
          {faqs.map((faq) => (
            <details className="group p-5 open:bg-mist/50 sm:p-6" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
                {faq.question}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-emerald transition group-open:rotate-45"
                />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-ink">
                CW
              </span>
              <span className="text-lg font-semibold">Cleanova Wien</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Premium apartment, office, and Airbnb cleaning for Vienna clients.
              A fictional portfolio case study built for conversion and automation.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  aria-label={`Social link ${index + 1}`}
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-emerald"
                  href="#"
                  key={index}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
              Services
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Apartment Cleaning</li>
              <li>Office Cleaning</li>
              <li>Airbnb Turnover</li>
              <li>Deep Cleaning</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 text-mint" />
                Vienna, Austria
              </li>
              <li className="flex gap-2">
                <PhoneCall aria-hidden="true" className="h-4 w-4 text-mint" />
                +43 660 000000
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Imprint
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
