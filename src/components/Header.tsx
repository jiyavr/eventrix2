import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EVENTS', path: '/events' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-3xl font-black tracking-tight">
          <span className="text-white">EVENT</span>
          <span className="text-[#df3311]">RIX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold tracking-wider transition-all duration-300 hover:text-[#df3311] ${
                location.pathname === link.path ? 'text-[#df3311]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-[#221333]/98 backdrop-blur-lg transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bold tracking-wider transition-all duration-300 ${
                location.pathname === link.path ? 'text-[#df3311]' : 'text-white hover:text-[#df3311]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
