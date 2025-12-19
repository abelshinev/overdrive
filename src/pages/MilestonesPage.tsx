import { motion } from "motion/react";
import { TimelineItem } from "../components/TimelineItem";
import milestones from "../lib/milestones";

export function MilestonesPage() {

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,10,10,0.9)), url("https://images.unsplash.com/photo-1735636134481-1c6ef7f8df49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjaXJjdWl0JTIwYWVyaWFsfGVufDF8fHx8MTc2MDE4MjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080")',
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
            Our Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            Key moments that shaped our legacy
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-24 px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2 hidden md:block" />

          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} {...milestone} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-card py-24 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">The Journey Continues</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're constantly pushing boundaries and setting new standards in
              motorsport. Join us as we write the next chapter of our story.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
