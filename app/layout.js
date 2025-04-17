import { Geist, Geist_Mono } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

import "./globals.css";
import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});5

export const metadata = {
  title: "Career Catalyst",
  description: "Career Catalyst is your all-in-one career accelerator. We offer AI-powered mock interviews, skill assessments, job search tools, resume builders, and bite-sized lectures to help you move from job seeker to job slayer. No guesswork, just progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Providers>
              {children}
            </Providers>
          </StackTheme>
        </StackProvider>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>

    </html>
  );
}
