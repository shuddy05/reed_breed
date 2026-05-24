import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const wfVisualSans = Geist({
  variable: "--font-wf-visual-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reed Breed Technologies | AI-Powered Growth Systems",
  description: "We help SMEs automate sales, marketing & customer engagement — so your business grows while you sleep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${wfVisualSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-text-secondary">
        {children}
      </body>
    </html>
  );
}
