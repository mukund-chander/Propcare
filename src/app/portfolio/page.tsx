"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MoveRight } from "lucide-react";

// Mock Data for Projects
const projects = [
  {
    id: 1,
    title: "Sunrise Residential Complex",
    category: "Building Construction",
    description: "A 12-story residential tower with 48 premium units and modern amenities.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    status: "Completed"
  },
  {
    id: 2,
    title: "NH-44 Highway Expansion",
    category: "Highway / Road",
    description: "Widening and resurfacing of 15km stretch of national highway including drainage works.",
    image: "/images/projects/highway-expansion.png",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Green Energy Solar Park",
    category: "Solar Projects",
    description: "5MW ground-mounted solar power plant installation for private industrial client.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    status: "Completed"
  },
  {
    id: 4,
    title: "Tech Park Commercial Hub",
    category: "Building Construction",
    description: "Civil works for a Grade-A commercial building in Electronic City.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    status: "Completed"
  },
  {
    id: 5,
    title: "City Roads Development",
    category: "Highway / Road",
    description: "Internal concrete road development for municipal corporation.",
    image: "/images/projects/city-roads-development.png",
    status: "Completed"
  },
  {
    id: 6,
    title: "Industrial Rooftop Solar",
    category: "Solar Projects",
    description: "500kW rooftop solar installation for a manufacturing unit.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
    status: "In Progress"
  },
];

const filters = [
  { name: "All Projects", value: "All" },
  { name: "Building", value: "Building Construction" },
  { name: "Roads / Highway", value: "Highway / Road" },
  { name: "Solar", value: "Solar Projects" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow bg-gray-50">
        {/* Page Header */}
        <section className="bg-white py-16 md:py-24 border-b border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our precision and expertise across diverse infrastructure sectors.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="pt-10 pb-6 px-6">
            <div className="container mx-auto flex flex-wrap gap-2 justify-center">
                {filters.map((filter) => (
                  <button
                    key={filter.name}
                    onClick={() => setActiveCategory(filter.value)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === filter.value
                        ? "bg-brand-gold text-white shadow-md transform scale-105"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-brand-gold hover:text-brand-gold"
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
            </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-in-up">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                       src={project.image}
                       alt={project.title}
                       fill
                       className="object-cover group-hover:scale-110 transition-transform duration-500"
                       unoptimized
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gray-900 rounded-full">
                        {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                            {project.status}
                        </span>
                     </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <button className="text-brand-gold font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Details <MoveRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
