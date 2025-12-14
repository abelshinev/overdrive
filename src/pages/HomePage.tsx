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
        title="Presenting Our Team"
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
              <h2 className="text-4xl md:text-5xl mb-6">
                Launch of Overdrive Socials
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
                fugit possimus nesciunt suscipit non dicta ipsum ad repellat ut 
                eligendi sapiente, minus iusto temporibus asperiores a esse.
              </p>
              <a href="https://www.instagram.com/p/DNIUzhEzovL/">
                <Button
                  onClick={() => onNavigate("events")}
                  className="bg-primary hover:bg-primary/90 "
                >
                  View Post on Instagram
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
                src = "post.png"
                alt="Instagram Post"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-card py-24 px-4 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Races", value: "24" },
              { label: "Podiums", value: "8" },
              { label: "Championships", value: "3" },
              { label: "Team Members", value: "120+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
