import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Users, HardHat, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a legacy of trust and excellence in infrastructure development.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <span className="text-brand-gold font-semibold uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Driven by Quality, Defined by Integrity</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Propecare Infra Projects was established with a clear vision: to bridge the gap between demand for high-quality infrastructure and the need for reliable, professional execution.
                  </p>
                  <p>
                    From our humble beginnings, we have grown into a multi-disciplinary infrastructure company handling complex projects in building construction, road works, and renewable energy. Our growth is powered by our commitment to delivering projects on time, within budget, and to the highest safety standards.
                  </p>
                  <p>
                    We believe that infrastructure is not just about concrete and steel; it&apos;s about connecting people, enabling commerce, and building the foundations for a sustainable future.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="Construction" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1974&auto=format&fit=crop" alt="Engineer" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                  </div>
                  <div className="space-y-4 pt-12">
                    <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop" alt="Solar" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Team" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The principles that guide every decision we make and every brick we lay.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors">
                <div className="bg-brand-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                  <HardHat size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Safety First</h3>
                <p className="text-gray-400 text-sm">We prioritize the health and well-being of our workforce and stakeholders above all else.</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors">
                <div className="bg-brand-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-gray-400 text-sm">We adhere to rigorous quality control standards to ensure durability and excellence.</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors">
                <div className="bg-brand-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-yellow">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-400 text-sm">We conduct business with transparency, honesty, and ethical practices.</p>
              </div>

               <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors">
                <div className="bg-brand-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-purple">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-gray-400 text-sm">We deliver on our promises, meeting deadlines and exceeding expectations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership / Team (Simplified) */}
        <section className="py-20 bg-gray-50">
             <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership & Team</h2>
                 <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                     Propecare Infra Projects is led by a team of industry veterans with decades of combined experience in civil engineering and project management. Our diverse team of skilled engineers, supervisors, and workforce ensures that every project is in capable hands.
                 </p>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
