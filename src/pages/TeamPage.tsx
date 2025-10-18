import { useState } from "react";
import { motion } from "motion/react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/ui/button";

export function TeamPage() {
  const [showAlumni, setShowAlumni] = useState(false);

  const currentTeam = [
    {
      name: "Marcus Steel",
      role: "Lead Driver",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "7 years of championship experience with 12 podium finishes.",
    },
    {
      name: "Sofia Ramirez",
      role: "Performance Driver",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Rising star with exceptional technical skills and precision driving.",
    },
    {
      name: "James Chen",
      role: "Team Principal",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "15+ years of motorsport leadership and strategic excellence.",
    },
    {
      name: "Elena Volkov",
      role: "Chief Engineer",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Pioneering aerodynamics specialist with groundbreaking innovations.",
    },
    {
      name: "David Martinez",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Master tactician behind our race-winning strategies.",
    },
    {
      name: "Lisa Thompson",
      role: "Performance Analyst",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Data-driven approach to maximizing car and driver performance.",
    },
  ];

  const alumni = [
    {
      name: "Robert Hamilton",
      role: "Former Lead Driver",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "2018-2022 | 3 Championship titles",
      isAlumni: true,
    },
    {
      name: "Maria Santos",
      role: "Former Team Principal",
      image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "2015-2023 | Led team to championship glory",
      isAlumni: true,
    },
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
            Meet The Team
          </h1>
          <p className="text-xl text-muted-foreground">
            The passionate individuals driving our success
          </p>
        </motion.div>
      </section>

      {/* Current Team */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Current Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="bg-card py-16 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6">Team Alumni</h2>
            <Button
              variant="outline"
              onClick={() => setShowAlumni(!showAlumni)}
              className="hover:bg-primary hover:text-white hover:border-primary"
            >
              {showAlumni ? "Hide Alumni" : "Show Alumni"}
            </Button>
          </div>

          {showAlumni && (
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {alumni.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamCard {...member} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
