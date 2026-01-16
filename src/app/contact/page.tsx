"use client";

import React, { useState } from "react";
import Button from "@/components/ui/LegacyButton";
import PageHero from "@/components/layout/PageHero";
import AdaniNavbar from "@/components/adani/AdaniNavbar";
import AdaniFooter from "@/components/adani/AdaniFooter";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <AdaniNavbar />
      <div className="min-h-screen flex flex-col font-sans">
        <main className="flex-grow bg-gray-50">
          
          <PageHero
            title="Get in Touch"
            subtitle="Have a project in mind? We'd love to hear from you."
            backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
          />

          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Contact Info */}
                <div className="bg-gray-900 text-white p-10 md:w-1/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-brand-gold">Contact Information</h3>
                    <p className="text-gray-400 mb-8">
                      Fill out the form and our team will get back to you within 24 hours.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-800 p-3 rounded-lg text-brand-gold">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Call Us</p>
                          <p className="font-semibold">+91 99887 76655</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-800 p-3 rounded-lg text-brand-gold">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email Us</p>
                          <p className="font-semibold">info@propecareinfra.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gray-800 p-3 rounded-lg text-brand-gold">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Head Office</p>
                          <p className="font-semibold">
                            #123, Infrastructure Heights,<br />
                            Outer Ring Road, Bangalore - 560103<br />
                            Karnataka, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 transition-transform hover:scale-[1.02] duration-500">
                     <div className="h-48 w-full bg-gray-800 rounded-xl overflow-hidden relative shadow-2xl border border-gray-700">
                         <iframe 
                           src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3918.5287778265874!2d77.96548!3d10.847328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUwJzUwLjQiTiA3N8KwNTcnNTUuNyJF!5e0!3m2!1sen!2sin!4v1768554868280!5m2!1sen!2sin" 
                           width="100%" 
                           height="100%" 
                           style={{ border: 0 }} 
                           allowFullScreen={true} 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                           className="grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-700 opacity-80 hover:opacity-100"
                         ></iframe>
                     </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-10 md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  
                  {formStatus === "success" ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-xl">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Send size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                      <p className="text-gray-600">Thank you for reaching out. We will respond shortly.</p>
                      <button 
                          onClick={() => setFormStatus("idle")}
                          className="mt-6 text-brand-deep-purple font-semibold hover:underline"
                      >
                          Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                            placeholder="+91 99000 00000"
                          />
                        </div>
                        <div className="space-y-2">
                           <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                           <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white"
                           >
                              <option value="">Select a Topic</option>
                              <option value="Construction">Construction Inquiry</option>
                              <option value="Roads">Highway/Road Projects</option>
                              <option value="Solar">Solar Energy Solutions</option>
                              <option value="Careers">Careers / HR</option>
                              <option value="Other">Other</option>
                           </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>

                      <Button 
                          type="submit" 
                          variant="primary" 
                          className="w-full md:w-auto"
                          disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <AdaniFooter />
    </>
  );
}
