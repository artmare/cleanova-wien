import {
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Home,
  Hotel,
  Mail,
  ReceiptText,
  RotateCcw,
  Sparkles,
  Timer,
  UsersRound
} from "lucide-react";

export const trustItems = [
  "24h response",
  "Flexible scheduling",
  "English / German / Ukrainian",
  "Vienna based"
];

export const services = [
  {
    title: "Apartment Cleaning",
    description:
      "Reliable weekly, bi-weekly, or one-time cleaning for private homes across Vienna.",
    price: "from EUR 59",
    Icon: Home
  },
  {
    title: "Office Cleaning",
    description:
      "Quiet, consistent cleaning for small teams, studios, and professional workspaces.",
    price: "from EUR 89",
    Icon: Building2
  },
  {
    title: "Airbnb Turnover",
    description:
      "Guest-ready resets with linen checks, surface detailing, and fast scheduling.",
    price: "from EUR 69",
    Icon: Hotel
  },
  {
    title: "Deep Cleaning",
    description:
      "Detailed top-to-bottom care for move-ins, seasonal resets, and post-renovation dust.",
    price: "from EUR 149",
    Icon: Sparkles
  }
];

export const automationItems = [
  {
    title: "Email-ready requests",
    description: "Booking submissions can be routed to a shared team inbox.",
    Icon: Mail
  },
  {
    title: "CRM client records",
    description: "New leads can be saved with property type, date, and notes.",
    Icon: UsersRound
  },
  {
    title: "Smart reminders",
    description: "Clients and cleaners can receive automatic appointment reminders.",
    Icon: CalendarClock
  },
  {
    title: "Invoice generation",
    description: "Finished jobs can trigger invoice drafts and payment follow-ups.",
    Icon: ReceiptText
  }
];

export const testimonials = [
  {
    quote:
      "Cleanova handled our Airbnb turnovers in Leopoldstadt during a busy week. The apartment was guest-ready every time and communication was excellent.",
    name: "Marta K.",
    role: "Airbnb host, 2nd district"
  },
  {
    quote:
      "Our small office near Neubaugasse feels noticeably fresher. The team works quickly, notices the details, and fits around our working hours.",
    name: "Daniel S.",
    role: "Studio owner, 7th district"
  },
  {
    quote:
      "I booked a deep clean after moving into my flat in Favoriten. Clear quote, punctual arrival, and a result that felt genuinely premium.",
    name: "Olena P.",
    role: "Private apartment client"
  }
];

export const faqs = [
  {
    question: "How fast can I book?",
    answer:
      "Most requests receive a response within 24 hours. Same-week appointments are often possible depending on the district and service type."
  },
  {
    question: "Do you bring cleaning supplies?",
    answer:
      "Yes. Cleanova can bring professional cleaning supplies. If you prefer specific products for sensitive surfaces, mention them in your booking request."
  },
  {
    question: "Do you clean Airbnb apartments?",
    answer:
      "Yes. Airbnb turnover cleaning includes fast resets, bathroom and kitchen detailing, floor care, and a final guest-ready quality check."
  },
  {
    question: "Can I request recurring cleaning?",
    answer:
      "Yes. Weekly, bi-weekly, and monthly recurring plans can be arranged for apartments and small offices."
  },
  {
    question: "Which areas of Vienna do you serve?",
    answer:
      "The service is positioned for Vienna-based clients across central and outer districts, with scheduling confirmed after the address is reviewed."
  }
];

export const heroChecks = [
  { label: "Kitchen surfaces polished", Icon: CheckCircle2 },
  { label: "Bathroom detail reset", Icon: Sparkles },
  { label: "Floors vacuumed and mopped", Icon: RotateCcw },
  { label: "Final inspection completed", Icon: ClipboardCheck }
];

export const quickStats = [
  { value: "2-4h", label: "typical visit", Icon: Timer },
  { value: "24h", label: "response time", Icon: CalendarClock }
];
