import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { hover, motion } from "motion/react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
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
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      onNavigate(id);
    }
  };

  // close mobile menu on navigation
  const handleNav = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  // Scroll-spy: observe sections and inform parent which is active
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          onNavigate(visible.target.id);
        }
      },
      { threshold: [0.25, 0.45, 0.6] }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Brand */}
            <button
              onClick={() => handleNav("home")}
              className="flex items-center gap-3 text-white ml-1 md:ml-0 cursor-pointer"
              aria-label="Go to Home"
            >
              <span className="text-2xl md:text-base tracking-tight font-medium">SAE</span>
              <span className="text-2xl md:text-base px-2 font-extrabold text-primary">
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
                    onClick={() => handleNav(item.id)}
                    className="group relative px-1 py-3 mt-2 text-lg text-gray-400 hover:text-red-500 transition-colors"
                    aria-current={active ? "page" : undefined}
                  >
                    <span
                      className={`uppercase tracking-wider cursor-pointer transition-colors ${
                        active ? "text-white" : "text-gray-300"
                      } `}
                    >
                      {item.label}
                    </span>

                    {/* animated underline */}
                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{
                        scaleX: active ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </button>
                );
              })}
            </nav>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen((s) => !s)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="p-2 rounded-md text-white hover:bg-white/5 focus:outline-none"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/6">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-3 py-3 rounded-md transition-colors ${
                    currentPage === item.id
                      ? "text-white bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/3"
                  }`}
                >
                  <span className="uppercase tracking-wider">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}