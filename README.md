# Cleanova Wien

Cleanova Wien is a fictional premium cleaning company website built as a portfolio case study for a web and automation agency. The project presents a realistic lead-generation website for apartment cleaning, office cleaning, Airbnb turnover, and deep cleaning services in Vienna.

## Project Overview

- Company: Cleanova Wien
- Industry: apartment and office cleaning
- Location: Vienna, Austria
- Audience: private apartments, Airbnb owners, small offices, and English/German/Ukrainian-speaking clients in Vienna
- Goal: demonstrate a polished client-ready website with conversion-focused copy, service positioning, interactive pricing, and booking flow

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React client components for the calculator and booking form
- CSS-based visuals only, with no stock photos or copyrighted imagery
- Frontend-only site; Supabase is prepared for future automation, not required for the current UI

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality Checks

```bash
npm run lint
npm run build
```

## Portfolio Positioning

This project is designed to look like a real local-service client project rather than a generic template. It includes:

- a premium hero section with strong calls to action
- trust signals for response time, scheduling, languages, and location
- clear service cards with starting prices
- a frontend-only price calculator
- a booking form with a success state
- before/after placeholder visuals created with CSS
- testimonials and FAQ content tailored to Vienna clients
- an automation section that shows how the project can grow beyond a static website

## Supabase Preparation

A Supabase project named `cleanova-wien` was created for future automation experiments. The current website remains frontend-only and does not require Supabase environment variables to run.

- Supabase project ref: `tyilpzcjwkchxjtaqdpe`
- Region: `eu-central-1`
- Prepared table: `public.booking_requests`
- Row Level Security: enabled

## Future Automation Ideas

- Send booking requests to email or Slack.
- Save client details to a CRM such as HubSpot, Airtable, Notion, or Supabase.
- Trigger automated reminders before appointments.
- Generate invoices automatically after completed cleanings.
- Add a dashboard for cleaning requests, status tracking, and recurring clients.
