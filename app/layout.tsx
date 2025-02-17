import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitcoin Careers",
  description: "Job Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6VTM86JQMS" />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6VTM86JQMS');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5VMWRZVJ');
            `,
          }}
        />
      </head>

      <body className={`${plus_jakarta_sans.className}`}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VMWRZVJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }} // Fixed JSX object syntax
          ></iframe>
        </noscript>

        {/* Plausible Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://plausible.io/js/script.outbound-links.js"
          data-domain="bitcoincareers.xyz/jobs"
          data-api="https://plausible.io/api/event"
        />

        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Header />
          <div className="relative">
            <div className="pattern size-full absolute"></div>
            <section className="main-section relative h-[50vh] flex flex-col justify-center text-sm sm:text-base px-7 pt-28 items-start gap-3 md:text-center md:items-center">
              <div className="sm:max-w-[35rem] md:max-w-[40rem] mb-8">
                <h1 className="font-bold text-4xl block text-orangish pb-2">
                  Empowering Bitcoin Talent
                </h1>
                <p>Jobs, Education & Rewards all powered by Bitcoin.</p>
              </div>
            </section>
            <SecondaryNavbar />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
