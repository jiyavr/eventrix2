import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#df3311]/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="text-3xl font-black mb-4">
              <span className="text-white">EVENT</span>
              <span className="text-[#df3311]">RIX</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating unforgettable experiences for over 20 years.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider">QUICK LINKS</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 text-sm hover:text-[#df3311] transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 text-sm hover:text-[#df3311] transition-colors">
                About
              </Link>
              <Link to="/events" className="text-gray-400 text-sm hover:text-[#df3311] transition-colors">
                Events
              </Link>
              <Link to="/gallery" className="text-gray-400 text-sm hover:text-[#df3311] transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-400 text-sm hover:text-[#df3311] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider">CONTACT</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-[#df3311] transition-colors flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@eventrix.com" className="text-gray-400 text-sm hover:text-[#df3311] transition-colors flex items-center gap-2">
                <Mail size={16} />
                <span>info@eventrix.com</span>
              </a>
              <p className="text-gray-400 text-sm flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Mumbai, India</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#221333] flex items-center justify-center rounded-lg hover:bg-[#df3311] transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#221333] flex items-center justify-center rounded-lg hover:bg-[#df3311] transition-colors"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 EVENTRIX. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Crafted with passion for unforgettable experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
