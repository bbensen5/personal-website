import type { Metadata } from "next";
import { DM_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import { Navbar } from './components/nav'

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Bianca Bensen | Portfolio",
  description: "Computer science student interested in data science, creating new things, and exploring the world of tech.",

  alternates: {
    canonical: "https://biancabensen.vercel.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bianca Bensen | Portfolio",
    description: "Computer science student interested in data science, creating new things, and exploring the world of tech.",
    images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Bianca Bensen | Portfolio",
    },
  ],
  },

  openGraph: {
    title: "Bianca Bensen | Portfolio",
    description: "Computer science student interested in data science, creating new things, and exploring the world of tech.",
    url: "https://biancabensen.vercel.app",
    images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Bianca Bensen | Portfolio",
    },
  ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${unbounded.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <main className="flex-auto min-w-0 flex flex-col">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
