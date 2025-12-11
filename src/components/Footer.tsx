import { Instagram, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl tracking-tighter mb-4">
              <span className="text-primary font-medium">OVERDRIVE</span> RACING
            </div>
            <p className="text-muted-foreground text-md">
              Pushing the limits of performance and innovation on the track.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2 text-md text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="mailto:overdriveracingrset@gmail.com" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wide mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/racing.overdrive/" target="_blank"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Youtube size={18} />
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

        <div className="mt-12 border-t border-border text-center text-lg text-muted-foreground">
          <p>&copy; 2025 OVERDRIVE Racing. All rights reserved.</p>
          <h1 className="uppercase">Powered by <span className="font-bold font- text-primary"><a href="https://zeyno.my" target="_blank">Studio Zeyno</a></span></h1>
        </div>
      </div>
    </footer>
  );
}
