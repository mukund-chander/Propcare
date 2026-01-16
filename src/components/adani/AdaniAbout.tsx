"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AdaniAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
              alt="Leadership"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building a Legacy of Excellence
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                "At Propecare, we believe in creating infrastructure that stands the test of time. 
                Our commitment to quality, safety, and sustainability drives every project we undertake."
              </p>
              <p>
                With decades of experience in construction, highways, and renewable energy, we continue 
                to push boundaries and set new standards in the industry.
              </p>
              <p className="text-brand-gold font-semibold">
                Together, we build for a sustainable tomorrow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdaniAbout;
