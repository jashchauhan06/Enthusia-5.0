import type { Metadata } from "next";
import { Inter, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENTHUSIA 5.0 | TechFest + Cultural Fest | SIT Nagpur",
  description: "Experience the Parallel Universe at ENTHUSIA 5.0 - The flagship TechFest and Cultural Festival of Symbiosis Institute of Technology, Nagpur. Join us for an extraordinary celebration of technology, innovation, and culture.",
  keywords: ["ENTHUSIA", "TechFest", "Cultural Fest", "SIT Nagpur", "Symbiosis", "College Festival", "Tech Events", "Cultural Events"],
  authors: [{ name: "SIT Nagpur" }],
  openGraph: {
    title: "ENTHUSIA 5.0 | TechFest + Cultural Fest",
    description: "Experience the Parallel Universe at ENTHUSIA 5.0",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable} antialiased bg-bg-primary text-text-primary`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
          <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
