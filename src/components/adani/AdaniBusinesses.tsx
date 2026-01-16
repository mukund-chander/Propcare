"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Truck, Zap, Factory, Leaf, Globe } from "lucide-react";

const businesses = [
  {
    id: 1,
    name: "Energy & Utilities",
    icon: Zap,
    description: "Leading renewable energy and power generation",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Transport & Logistics",
    icon: Truck,
    description: "Comprehensive logistics and transportation solutions",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Infrastructure",
    icon: Building2,
    description: "Building world-class infrastructure projects",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Manufacturing",
    icon: Factory,
    description: "Advanced manufacturing and industrial solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Sustainability",
    icon: Leaf,
    description: "Green initiatives and environmental solutions",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Global Operations",
    icon: Globe,
    description: "International presence and partnerships",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
];

const AdaniBusinesses = () => {
  const [activeBusiness, setActiveBusiness] = useState(businesses[0]);

  return (
    <section id="businesses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diversified portfolio across multiple sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Business Grid */}
          <div className="grid grid-cols-2 gap-4">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              return (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveBusiness(business)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeBusiness.id === business.id
                      ? "bg-brand-gold text-white shadow-xl scale-105"
                      : "bg-white hover:shadow-lg"
                  }`}
                >
                  <Icon className="h-8 w-8 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{business.name}</h3>
                  <p className={`text-sm ${
                    activeBusiness.id === business.id ? "text-white/90" : "text-gray-600"
                  }`}>
                    {business.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Featured Business */}
          <motion.div
            key={activeBusiness.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${activeBusiness.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">{activeBusiness.name}</h3>
              <p className="text-lg">{activeBusiness.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdaniBusinesses;
