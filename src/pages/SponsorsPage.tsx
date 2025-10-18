import { motion } from "motion/react";
import { SponsorLogo } from "../components/SponsorLogo";

export function SponsorsPage() {
  const platinumSponsors = [
    "VELOCITY TECH",
    "PRECISION DYNAMICS",
  ];

  const goldSponsors = [
    "APEX SYSTEMS",
    "MOTORSPORT PRO",
    "RACING ELITE",
    "SPEEDFORCE",
  ];

  const silverSponsors = [
    "PERFORMANCE PLUS",
    "TRACK MASTERS",
    "AERODYNAMIX",
    "FUEL EXPERTS",
    "TIRE INNOVATIONS",
    "DATA ANALYTICS",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,10,10,0.9)), url("https://images.unsplash.com/photo-1757513915354-d596d3aaf2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcnNwb3J0JTIwdGVhbSUyMGdhcmFnZXxlbnwxfHx8fDE3NjAyNjY3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 uppercase tracking-tighter">
            Our Partners
          </h1>
          <p className="text-xl text-muted-foreground">
            Excellence is built on powerful partnerships
          </p>
        </motion.div>
      </section>

      {/* Partnership Message */}
      <section className="bg-background py-16 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground">
              Our success is powered by world-class partners who share our
              passion for innovation, performance, and excellence. Together,
              we're pushing the boundaries of what's possible in motorsport.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platinum Tier */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl mb-2">Platinum Partners</h2>
            <div className="h-1 w-24 bg-accent mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platinumSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SponsorLogo name={sponsor} tier="platinum" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Tier */}
      <section className="bg-card py-16 px-4 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl mb-2">Gold Partners</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goldSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SponsorLogo name={sponsor} tier="gold" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Tier */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl mb-2">Silver Partners</h2>
            <div className="h-1 w-24 bg-gray-500 mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {silverSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SponsorLogo name={sponsor} tier="silver" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-24 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Become a Partner</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us on our journey to the top of motorsport. Explore
              partnership opportunities and accelerate your brand's presence.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-colors">
              Contact Partnership Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
