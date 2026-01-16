"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Don't show Header/Footer on pages that have their own Adani components
  const hasAdaniLayout = pathname === "/" || pathname === "/about" || pathname === "/portfolio" || pathname === "/contact";

  if (hasAdaniLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
