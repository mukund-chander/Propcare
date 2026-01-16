import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Propecare Infra Projects - Excellence in Infrastructure",
  description: "Leading infrastructure subcontractor specializing in highways, expressways, and urban development projects across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScrolling>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </SmoothScrolling>
      </body>
    </html>
  );
}
