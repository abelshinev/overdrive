import { motion } from "motion/react";
import { TimelineItem } from "../components/TimelineItem";

export function MilestonesPage() {
  const milestones = [
    {
      year: "November",
      title: "Team Recruitment & Onboarding",
      description: [
        "Team recruitment & interviews",
        "Sub-team formation (Chassis, Suspension, Powertrain, Aero, Electrical, Management)",
        "SUPRA rulebook orientation",
        "Knowledge transfer from previous batch",
      ],
      image: "https://images.unsplash.com/photo-1736122054520-f17c2adfc7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwb25lJTIwcmFjZSUyMHRyYWNrfGVufDF8fHx8MTc2MDI2Njc4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      side: "right" as const,
    },
    {
      year: "December",
      title: "Concept Development",
      description: [
        "Vehicle concept & design philosophy freeze",
        "Powertrain selection (IC)",
        "Performance targets (weight, lap time, reliability)",
        "Initial vehicle layout & packaging",
        "Rule compliance matrix creation",
      ],
      side: "left" as const,
    },
    {
      year: "February",
      title: "Championship Points Record",
      description: [
        "Final design freeze",
        "Manufacturing drawings release",
        "Supplier finalization & procurement",
        "Manufacturing feasibility checks",
        "Cost report structure preparation"
      ],
      image: "https://images.unsplash.com/photo-1696841749266-7a38fecbcaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjB0cmFjayUyMG1vdGlvbnxlbnwxfHx8fDE3NjAyNjY3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      side: "right" as const,
    },
    {
      year: "March - April",
      title: "Manufacturing & Fabrication",
      description: [
        "Chassis fabrication & welding",
        "Suspension arms, uprights & hubs manufacturing",
        "Brake system & pedal box fabrication",
        "Wiring harness preparation",
        "Aero component manufacturing",
      ],
      side: "left" as const,
    },
    {
      year: "May",
      title: "Assembly & Initial Validation",
      description: [
        "Full vehicle assembly",
        "Engine mounting & drivetrain alignment",
        "Steering, braking & safety system integration",
        "Initial engine start & system checks",
      ],
      image: "https://images.unsplash.com/photo-1705909706873-5432b644ccec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MDI2Njc4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      side: "right" as const,
    },
    {
      year: "June - July",
      title: "Testing, Tuning & Iteration",
      description: [
        "Shakedown testing",
        "Suspension tuning (camber, toe, spring rates)",
        "Brake bias & cooling optimization",
        "Reliability fixes & weight reduction",
        "Driver training & endurance simulations",
      ],
      side: "left" as const,
    },
    {
      year: "August",
      title: "Final Validation & Event Readiness",
      description: [
        "Setup freeze",
        "Mock technical inspection",
        "Static event documentation finalization",
        "Design, Cost & Business presentation rehearsals",
        "Spares & logistics planning",
      ],
      image: "https://images.unsplash.com/photo-1757513915354-d596d3aaf2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcnNwb3J0JTIwdGVhbSUyMGdhcmFnZXxlbnwxfHx8fDE3NjAyNjY3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      side: "right" as const,
    },
    {
      year: "September",
      title: "SAE SUPRA Competition",
      description: [
        "Technical Inspection",
        "Static Events (Design, Cost, Business)",
        "Dynamic Events (Acceleration, Skidpad, Autocross, Endurance)",
        "Post-event teardown & knowledge handover",
      ],
      side: "left" as const,
    },
  ];

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
