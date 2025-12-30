import { motion } from "motion/react";
import { SponsorLogo } from "../components/SponsorLogo";
import sponsors from "../lib/sponsors";

export function SponsorsPage() {


  const SponsorCard = ({ sponsor }: { sponsor: typeof sponsors.premium[0] }) => (
    <motion.div
      className="bg-black/40 border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={sponsor.image} alt={sponsor.name} className="w-full mb-6 object-contain" />
      <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">
        {sponsor.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 italic">{sponsor.tagline}</p>
      <p className="text-base text-gray-300 leading-relaxed">{sponsor.description}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,10,10,0.9)), url("/sponsorship/sponserheader.jpeg")',
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
            Powering Performance. Fueling Ambition.
          </p>
        </motion.div>
      </section>

      {/* Title Sponsor */}
      <section className="bg-background py-20 px-4 border-b border-border">
        <div className="w-full md:w-5/6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mx-auto w-full md:w-5/6 px-4"
          >
            <h2 className="text-4xl md:text-6xl uppercase tracking-tight text-primary mb-12 md:mb-20 font-bold">
              TITLE SPONSOR
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
              <img src="sponsorship/dbizai.png" alt="" className="w-full h-auto md:h-[40vh] object-contain md:w-auto" />
              <div className="text-left my-auto">
                <h3 className="text-4xl md:text-5xl font-bold mb-3">{sponsors.title.name}</h3>
                <p className="text-lg text-muted-foreground mb-6 italic">{sponsors.title.tagline}</p>
                <p className="text-base text-gray-300 leading-relaxed">{sponsors.title.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Sponsors */}
      <section className="bg-black/50 py-20 px-4 border-b border-border">
        <div className="w-full md:w-5/6 mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl uppercase tracking-tight text-primary mb-12 font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            PREMIUM SPONSORS
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.premium.map((sponsor, idx) => (
              <SponsorCard key={idx} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Partner */}
      <section className="bg-background py-20 px-4 border-b border-border">
        <div className="w-full md:w-5/6 mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl uppercase tracking-tight text-primary mb-12 md:mb-4 font-bold">
              PERFORMANCE PARTNER
            </h2>
            <div>
              {sponsors.performance.map((sponsor, idx) => (
                <div key={idx} className="mb-12 last:mb-0 flex flex-col md:flex-row gap-8 md:gap-20 items-center" >
                  <img src={sponsor.image} alt={sponsor.name} className="w-full md:w-1/3 md:mr-12 object-contain" />
                  <div className="text-left my-auto">
                    <h3 className="text-4xl md:text-5xl font-bold mb-3">{sponsor.name}</h3>
                    <p className="text-lg text-muted-foreground mb-6 italic">{sponsor.tagline}</p>
                    <p className="text-base text-gray-300 leading-relaxed">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
              Together, We Race Beyond Limits.
            </p>
            <a href="/contact">
              <button className="bg-primary hover:bg-primary/90 !text-black text-lg font-medium px-8 py-4 rounded-lg transition-colors"
                style={{ color: "#000" }}>
                Contact Partnership Team
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
