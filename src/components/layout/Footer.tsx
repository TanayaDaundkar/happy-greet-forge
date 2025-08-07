
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone, Instagram } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
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

  const ctaButtons = [
    { text: "Start My Career Journey", href: "/coming-soon", primary: true },
    { text: "Explore Knowledge Hub", href: "/coming-soon" },
    { text: "Join Our Community", href: "/community" },
    { text: "Schedule Mentorship", href: "/coming-soon" },
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
            <p className="text-gray-300 font-lexend mb-6 max-w-md text-left mx-0 sm:mx-auto leading-relaxed">
              Blending traditional Gurukul mentorship with<br className="hidden sm:block" />
            AI-driven career development, we empower<br className="hidden sm:block" />
              learners at every stage of their journey.
            </p>
            {/* <p className="text-gray-300 font-lexend mb-6 max-w-lg text-left mx-auto">
  Blending traditional Gurukul mentorship with AI-driven career development, we empower learners at every stage of their journey.
</p> */}
            
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
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-colors text-[#40C7E8]" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-colors text-[#40C7E8]" aria-label="X">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-colors text-[#40C7E8]" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-colors text-[#40C7E8]" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-colors text-[#40C7E8]" aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="mt-6 lg:mt-0">
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
