import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SideMenu from "./SideMenu";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Header />
          <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:flex-row font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col flex-1 gap-[32px] row-start-2 w-full sm:w-3/4 sm:items-start">
              {children}
            </main>
            <SideMenu />
          </div>
        </div>
      </body>
    </html>
  );
}
