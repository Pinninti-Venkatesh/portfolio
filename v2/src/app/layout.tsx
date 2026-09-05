import type { Metadata, Viewport } from "next";
import "./globals.css";
import { person } from "@/content/site";

const title = `${person.name} · ${person.role}`;
const description =
  "Staff engineer building high-scale APIs and distributed systems in Node.js, Go and AWS. Six years on platforms that hold 100k+ requests per minute.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iamvenkatesh.in"),
  title: {
    default: title,
    template: `%s · ${person.name}`,
  },
  description,
  keywords: [
    "backend engineer", "Node.js", "TypeScript", "Go", "Kafka",
    "distributed systems", "AWS", "microservices", "Bengaluru",
  ],
  authors: [{ name: person.name }],
  openGraph: {
    title,
    description,
    url: "https://www.iamvenkatesh.in",
    siteName: person.name,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
