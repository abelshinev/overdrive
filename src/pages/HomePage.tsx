import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { Button } from "../components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {


  return (
    <div className="font border-4 ">
      <Hero
        image="herobg.jpg"
        title="FROM THE HOUSE OF SAE RSET"
        subtitle="Where precision engineering meets unrelenting speed"
        ctaText="Explore Our Journey"
        onCtaClick={() => {
          const victorySection = document.getElementById("victory-section");
          if (victorySection) {
            victorySection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />

      {/* Featured News Section */}
      <section id="victory-section" className="bg-background py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="text-primary text-sm uppercase tracking-wide mb-4">
                Latest Update
              </div>
              <h2 className="text-3xl md:text-5xl mb-6">
                From the workshop to an international track: Overdrive Racing
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Follow us on our journey to victory
              </p>
              <a href="https://www.instagram.com/racing.overdrive/" target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-primary hover:bg-primary/90 text-black"
                >
                  Visit our Instagram
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
            </div>
            <motion.div
              className="relative  rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="post.png"
                alt="Instagram Post"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
