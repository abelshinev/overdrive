import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  currentPage: string;
  onNavigate: (target: string) => void; // can be route or section
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    { id: "team", label: "Team" },
    { id: "gallery", label: "Gallery" },
    { id: "milestones", label: "Milestones" },
    { id: "sponsors", label: "Sponsors" },
    { id: "alumni", label: "Alumni" }, // external route
  ];

  const handleClick = (id: string) => {
    setOpen(false);
    onNavigate(id); // delegate to parent
  };

  // Observe visible sections to highlight active nav item
  useEffect(() => {
    const sections = navItems
      .filter((n) => !["alumni"].includes(n.id)) // skip route-only items
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          onNavigate(visible.target.id);
        }
      },
      { threshold: [0.3], rootMargin: "-60px 0px -40%" }
    );

    sections.forEach((s) => observer.observe(s));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Brand */}
            <button
              onClick={() => handleClick("home")}
              className="flex items-center gap-3 text-white"
            >
              <span className="text-2xl font-medium">SAE</span>
              <span className="text-2xl font-extrabold text-primary">
                OVERDRIVE
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`group relative text-gray-300 hover:text-primary uppercase tracking-wider transition-colors ${
                      active ? "text-white" : ""
                    }`}
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: active ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-2"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left px-6 py-3 uppercase ${
                  currentPage === item.id
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
