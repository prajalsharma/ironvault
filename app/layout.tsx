import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/Header";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const GTMID: string = process.env.NEXT_PUBLIC_GTM_ID || "";

export const metadata: Metadata = {
  title: "BitCoin Careers",
  description: "Job Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId={GTMID} />
      </head>
      <body className={`${plus_jakarta_sans.className}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTMID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

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
