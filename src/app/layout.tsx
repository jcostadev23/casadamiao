import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import "./globals.css";

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casa damiao",
  description: "Casa damiao é um site de uma instituição de acolhimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FS3QHZV0EQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FS3QHZV0EQ');
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-3 bg-blue-900"></div>
        <NavBar />
        <div className="w-full max-w-[1400px] mx-auto justify-self-center p-10 items-center md:px-20">
          <div className="flex flex-col gap-20 md:flex-row font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col w-full text-justify">
              {children}
            </main>
            <SideMenu />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
