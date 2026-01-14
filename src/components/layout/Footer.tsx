import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-brand-brown/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-brand-gold">Propecare Infra Projects</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building strong foundations for a sustainable future. We specialize in residential, commercial, and industrial infrastructure, delivering quality and precision in every project.
            </p>
            <div className="flex space-x-4">
              {/* Add social icons here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-brand-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-400 hover:text-brand-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Propecare Infra Projects. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="text-brand-gold">Safety First</span> &bull; <span className="text-brand-gold">Quality Always</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
