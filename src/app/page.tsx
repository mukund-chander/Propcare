import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Shield, Truck, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 z-0 opacity-20">
             {/* Using a pattern or gradient as fallback for image */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/30 via-gray-900 to-gray-900" />
             <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          </div>
          
          <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                Building Strong Foundations for a <span className="text-brand-gold">Sustainable Future</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Propecare Infra Projects delivers high-quality infrastructure solutions across construction, highways, and solar projects with a commitment to safety, precision, and timely execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" variant="primary">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button href="/portfolio" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-brand-gold font-semibold uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Comprehensive Infrastructure Solutions</h2>
              <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-14 w-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Shield size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Building Construction</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end execution for residential, commercial, and industrial construction projects delivering excellence at every level.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Residential Complexes</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Commercial Towers</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Industrial Warehouses</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="group bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-14 w-14 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Truck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Highway & Road Works</h3>
                <p className="text-gray-600 mb-4">
                  Durable road infrastructure built to national standards using modern equipment and advanced paving techniques.
                </p>
                 <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> National Highways</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> City Roads</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Pavement Works</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="group bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-14 w-14 bg-brand-yellow/10 rounded-lg flex items-center justify-center mb-6 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-colors">
                  <Sun size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Solar Projects</h3>
                <p className="text-gray-600 mb-4">
                  Sustainable energy solutions supporting India’s renewable energy goals with efficiency and long-term reliability.
                </p>
                 <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Utility-Scale Solar</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Rooftop Installations</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Solar Parks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY OVERVIEW */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] w-full bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80&w=2012&auto=format&fit=crop" alt="Construction Site" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <p className="text-white font-bold text-lg">Bangalore, India</p>
                    </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-brand-purple font-semibold uppercase tracking-wider">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Reliable Partners for National Growth</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Propecare Infra Projects is a growing infrastructure company specializing in construction, road development, and solar projects. With a focus on quality, safety, and efficiency, the company delivers reliable solutions for both public and private sector clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900">Safety First</h4>
                            <p className="text-sm text-gray-500">Zero-compromise safety policy</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900">Modern Technology</h4>
                            <p className="text-sm text-gray-500">Advanced machinery & methods</p>
                        </div>
                    </div>
                </div>
                <Button href="/about" variant="secondary">Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-20 bg-white relative overflow-hidden">
             {/* Decorative blob */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl rounded-bl-full" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-deep-purple/5 rounded-full blur-3xl rounded-tr-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-deep-purple text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                     <Sun size={120} />
                 </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-1 bg-brand-yellow block" /> Our Vision
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed italic">
                  “To be a trusted infrastructure partner delivering sustainable and high-quality projects that contribute to national growth.”
                </p>
              </div>

              <div className="bg-brand-brown text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <Shield size={120} />
                 </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-1 bg-brand-orange block" /> Our Mission
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed italic">
                  “To execute infrastructure projects with uncompromising safety, superior quality, and timely delivery through skilled manpower and modern technology.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-gold">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Great?</h2>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                    Partner with Propecare Infra Projects for your next infrastructure venture.
                </p>
                <div className="flex justify-center gap-4">
                    <Button href="/contact" variant="secondary" size="lg" className="bg-white text-brand-gold hover:bg-gray-100 border-none">
                        Get a Quote
                    </Button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
