"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, Recycle, Wind } from "lucide-react";

const sustainabilityItems = [
  {
    id: 1,
    title: "Climate Action",
    icon: Leaf,
    description: "Committed to carbon neutrality and reducing emissions across all operations",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Water Management",
    icon: Droplet,
    description: "Implementing water conservation and recycling initiatives",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Renewable Energy",
    icon: Sun,
    description: "Leading the transition to clean, sustainable energy sources",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Circular Economy",
    icon: Recycle,
    description: "Promoting waste reduction and resource efficiency",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Green Infrastructure",
    icon: Wind,
    description: "Building eco-friendly and sustainable infrastructure",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop",
  },
];

const AdaniSustainability = () => {
  const [activeItem, setActiveItem] = useState(sustainabilityItems[0]);

  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            For a Sustainable Tomorrow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to environmental stewardship and social responsibility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${activeItem.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4 order-1 lg:order-2">
            {sustainabilityItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem.id === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveItem(item)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    isActive
                      ? "bg-green-600 text-white shadow-xl"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className={`h-6 w-6 mt-1 ${isActive ? "text-white" : "text-green-600"}`} />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-white/90"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaniSustainability;
