import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import SideMenu from "./components/SideMenu";

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
