"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Building2 size={40} />,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Users size={40} />,
    value: 500,
    suffix: "+",
    label: "Skilled Workforce",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: <Award size={40} />,
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <TrendingUp size={40} />,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    color: "from-green-500 to-green-600",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold">
      {count}
      {suffix}
    </span>
  );
};

const AdaniImpactStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building excellence through measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto`}
              >
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="text-gray-900 mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdaniImpactStats;
