import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl tracking-tighter mb-4">
              <span className="text-primary">APEX</span> RACING
            </div>
            <p className="text-muted-foreground text-sm">
              Pushing the limits of performance and innovation on the track.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Apex Racing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
