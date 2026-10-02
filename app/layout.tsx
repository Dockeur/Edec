import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LocalizedTree from "./components/localized-tree";
import { MotionProvider } from "./components/motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDEC | Ingénierie environnementale et QHSE",
  description:
    "EDEC accompagne les entreprises et collectivités dans les études environnementales, audits, formations et actions de conformité durable.",
  icons: {
    icon: "/images/edec.png",
    shortcut: "/images/edec.png",
    apple: "/images/edec.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <LocalizedTree>{children}</LocalizedTree>
        </MotionProvider>
      </body>
    </html>
  );
}
