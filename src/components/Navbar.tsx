import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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
              className="flex items-center gap-3 text-white ml-1 md:ml-0"
              aria-label="Go to Home"
            >
              <span className="text-2xl md:text-base tracking-tight font-medium">SAE</span>
              <span className="text-2xl md:text-base tracking-tight font-extrabold text-red-500">
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
                    className="group relative px-1 py-3 mt-2 text-lg text-gray-200 hover:text-red-500 transition-colors"
                    aria-current={active ? "page" : undefined}
                  >
                    <span className={`uppercase tracking-wider ${active ? "text-white" : ""}`}>
                      {item.label}
                    </span>

                    <span
                      className={`
                        block h-[2px] bg-red-500 origin-left transition-transform duration-300 ease-out mt-2
                        ${active ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100
                      `}
                      style={{ transformOrigin: "left" }}
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