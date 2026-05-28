import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cleanova Wien | Premium Cleaning Services in Vienna",
  description:
    "Frontend-only portfolio case study for a premium apartment, office, and Airbnb cleaning company in Vienna."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
