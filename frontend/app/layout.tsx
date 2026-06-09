import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Reed Breed Creative Consulting",
  description: "We help SMEs automate sales, marketing & customer engagement — so your business grows while you sleep.",
};

import { AuthProvider } from "@/context/auth-context";
import { Chatbot } from "@/components/ui/chatbot";
import { Cursor } from "@/components/ui/cursor";
import { Preloader } from "@/components/ui/preloader";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-text-secondary">
        <AuthProvider>
          <Suspense fallback={null}>
            <Preloader />
          </Suspense>
          <Cursor />
          {children}
          <Chatbot />
        </AuthProvider>
      </body>
    </html>
  );
}
