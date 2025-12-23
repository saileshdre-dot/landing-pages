import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anek_Latin } from "next/font/google";
import Script from "next/script";
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MY67KBK574"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MY67KBK574');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PLV22TTR');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLV22TTR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
