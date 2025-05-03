import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
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
          <div className="flex flex-col gap-20 sm:p-20 md:flex-row font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col w-full sm:w-3/4">{children}</main>
            <SideMenu />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
