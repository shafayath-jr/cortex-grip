import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Manrope, Stack_Sans_Notch } from "next/font/google";
import "./globals.css";

const stack_sans_notch = Stack_Sans_Notch({
  variable: "--font-stack-sans-notch",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortexgrip",
  description: "Next-Gen Intelligence for Workspaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        stack_sans_notch.variable,
        manrope.variable,
        "font-manrope",
      )}
    >
      <body className="min-h-full flex flex-col text-slate-100 selection:bg-secondary-500/30 selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
