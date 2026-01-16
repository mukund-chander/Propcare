import React from "react";
import AdaniNavbar from "@/components/adani/AdaniNavbar";
import AdaniHero from "@/components/adani/AdaniHero";
import AdaniAbout from "@/components/adani/AdaniAbout";
import AdaniBusinesses from "@/components/adani/AdaniBusinesses";
import AdaniSustainability from "@/components/adani/AdaniSustainability";
import AdaniMedia from "@/components/adani/AdaniMedia";
import AdaniFooter from "@/components/adani/AdaniFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AdaniNavbar />
      <AdaniHero />
      <AdaniAbout />
      <AdaniBusinesses />
      <AdaniSustainability />
      <AdaniMedia />
      <AdaniFooter />
    </div>
  );
}
