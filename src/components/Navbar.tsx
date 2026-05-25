import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'home', href: '#home' },
    { label: 'about', href: '#about' },
    { label: 'clients', href: '#clients' },
    { label: 'stack', href: '#skills' },
    { label: 'experience', href: '#experience' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-emerald-400/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-emerald-400/20 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_10px_40px_rgba(34,197,94,0.12)]">
              HS
            </div>
            <div className="hidden sm:block text-sm tracking-wide text-slate-300">Hansika Shamal</div>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-sm text-slate-300">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="rounded-full px-3 py-2 hover:bg-white/5 hover:text-white transition-colors duration-200"
              >
                ~/{item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)]" />
            Online
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-emerald-400/10 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2 text-slate-300">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full rounded-full px-3 py-2 text-left text-sm hover:bg-white/5 hover:text-white"
              >
                ~/{item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
