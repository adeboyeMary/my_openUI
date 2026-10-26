import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/Header";
import Links from "@/components/section7/Links";
import styles from "./page.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenUI Concept Landing Page",
  description:
    "A highly responsive, accessible frontend landing page built using the Open UI philosophy and SCSS architecture.",
  keywords: [
    "Frontend Developer",
    "Open UI",
    "SCSS",
    "Next.js Components",
    "Responsive Design",
    "Web Accessibility",
  ],
  authors: [{ name: "MaryAdeboye" }],
  openGraph: {
    title: "OpenUI Concept Landing Page",
    description:
      "A highly responsive, accessible frontend landing page built using the Open UI philosophy and SCSS architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenUI Concept Landing Page",
    description:
      "A highly responsive, accessible frontend landing page built using the Open UI philosophy and SCSS architecture.",
  },
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />

        <main>{children}</main>

        <footer className={styles.footer}>
          <Links />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
