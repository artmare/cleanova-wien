create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  property_type text not null check (property_type in ('apartment', 'office', 'airbnb')),
  preferred_date date,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'scheduled', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.booking_requests enable row level security;

comment on table public.booking_requests is 'Future-ready lead capture table for Cleanova Wien booking requests. No public policies are added because the current website remains frontend-only.';
