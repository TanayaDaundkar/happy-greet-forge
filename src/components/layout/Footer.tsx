import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Knowledge Hub", href: "/coming-soon" },
        { name: "Community", href: "/community" },
        { name: "Pricing", href: "/pricing-page" },
        { name: "Enterprise Solutions", href: "/enterprise" },
        { name: "About", href: "/about" },
        { name: "AI Updates", href: "/ai-updates" },
      ]
    },
    {
      title: "Resources", 
      links: [
        { name: "Blog", href: "/coming-soon" },
        { name: "Case Studies", href: "/coming-soon" },
        { name: "Events", href: "/coming-soon" },
        { name: "Help Center", href: "/coming-soon" },
        { name: "FAQs", href: "/coming-soon" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/coming-soon" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/coming-soon" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/coming-soon" },
        { name: "Terms of Service", href: "/coming-soon" },
        { name: "Cookie Policy", href: "/coming-soon" },
        { name: "Security", href: "/coming-soon" },
      ]
    }
  ];

  return (
    <footer className="text-white border-t border-gray-600 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                alt="Gurukul Code" 
                src="/lovable-uploads/Logos-05-removebg-preview.png" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-300 font-lexend mb-6 max-w-md text-left leading-relaxed">
              Blending traditional Gurukul mentorship with<br className="hidden sm:block" />
              AI-driven career development, we empower<br className="hidden sm:block" />
              learners at every stage of their journey.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-300 font-lexend mb-6">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#40C7E8]" />
                hello@gurukulcode.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#40C7E8]" />
                +919922089689
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 text-[#40C7E8]">
              <Instagram className="h-5 w-5" />
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-lexend font-semibold mb-4 text-[#40C7E8]">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white font-lexend transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end text-sm text-gray-300 font-lexend">
            <div className="text-right max-w-sm w-full">
              © {currentYear} Gurukul Code. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
