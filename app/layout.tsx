import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parthiv",
  description: "Portfolio website of Parthiv Parmar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          sans.className,
          "bg-gray-950 text-white antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
