import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Events", id: "events" },
    { name: "Team", id: "team" },
    { name: "Gallery", id: "gallery" },
    { name: "Milestones", id: "milestones" },
    { name: "Sponsors", id: "sponsors" },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="text-2xl tracking-tighter text-white hover:text-primary transition-colors"
          >
            SAE <span className="text-primary">OVERDRIVE</span> 
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm tracking-wide uppercase transition-colors relative ${
                  currentPage === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`block w-full text-left text-lg tracking-wide uppercase transition-colors ${
                    currentPage === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
