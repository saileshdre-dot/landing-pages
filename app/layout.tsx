import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anek_Latin } from "next/font/google";
import "./globals.css";

const begum = localFont({
  src: [
    {
      path: "../public/fonts/fonnts.com-Begum-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/fonnts.com-Begum-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/fonnts.com-Begum-Semibold-.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-begum",
  display: "swap",
});

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HADO by Beyond - Waterfront Apartments in Dubai Islands",
  description: "Discover HADO by Beyond - Ultra-Japanese design waterfront apartments in Dubai Islands. 1-4BR units starting from 2.4M AED. 30% capital appreciation potential. Q2 2029 handover.",
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${begum.variable} ${anekLatin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
