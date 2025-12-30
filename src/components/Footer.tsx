import { Instagram, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";

interface FooterProps {
  onNavigate?: (target: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleClick = (e: React.MouseEvent, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    }
  };

  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl tracking-tighter mb-4 font-sans">
              <span className="text-primary font-medium">OVERDRIVE</span> RACING
            </div>
            <p className="text-muted-foreground text-md font-sans">
              Pushing the limits of performance and innovation on the track.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wide mb-4 font-sans">Quick Links</h3>
            <ul className="space-y-2 text-md text-muted-foreground font-sans">
              <li><a href="#rset" onClick={(e) => handleClick(e, "rset")} className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#gallery" onClick={(e) => handleClick(e, "gallery")} className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wide mb-4 font-sans">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/racing.overdrive/" target="_blank"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/sae-rset/" target="_blank"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors transition-500"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border text-center text-lg text-muted-foreground font-sans">
          <p>&copy; 2025 OVERDRIVE Racing. All rights reserved.</p>
          <h1 className="uppercase ">Powered by <span className="font-bold text-primary"><a href="https://zeyno.my" target="_blank">Studio Zeyno&trade;</a></span></h1>
        </div>
      </div>
    </footer>
  );
}
