import { useState } from "react";
import { motion } from "motion/react";
import { EventCard } from "../components/EventCard";
import { Button } from "../components/ui/button";

export function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const events = [
    {
      title: "Bahrain Grand Prix",
      date: "March 2, 2025",
      location: "Sakhir, Bahrain",
      image: "https://images.unsplash.com/photo-1735636134481-1c6ef7f8df49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjaXJjdWl0JTIwYWVyaWFsfGVufDF8fHx8MTc2MDE4MjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      isPast: false,
    },
    {
      title: "Saudi Arabian Grand Prix",
      date: "March 9, 2025",
      location: "Jeddah, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1736122054520-f17c2adfc7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwb25lJTIwcmFjZSUyMHRyYWNrfGVufDF8fHx8MTc2MDI2Njc4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      isPast: false,
    },
    {
      title: "Australian Grand Prix",
      date: "March 16, 2025",
      location: "Melbourne, Australia",
      image: "https://images.unsplash.com/photo-1696841749266-7a38fecbcaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjB0cmFjayUyMG1vdGlvbnxlbnwxfHx8fDE3NjAyNjY3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isPast: false,
    },
    {
      title: "Monaco Grand Prix",
      date: "January 15, 2025",
      location: "Monte Carlo, Monaco",
      image: "https://images.unsplash.com/photo-1757513915354-d596d3aaf2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcnNwb3J0JTIwdGVhbSUyMGdhcmFnZXxlbnwxfHx8fDE3NjAyNjY3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      isPast: true,
      result: "P2",
    },
    {
      title: "Italian Grand Prix",
      date: "December 3, 2024",
      location: "Monza, Italy",
      image: "https://images.unsplash.com/photo-1705909706873-5432b644ccec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MDI2Njc4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      isPast: true,
      result: "P5",
    },
    {
      title: "Japanese Grand Prix",
      date: "November 20, 2024",
      location: "Suzuka, Japan",
      image: "https://images.unsplash.com/photo-1735636134481-1c6ef7f8df49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjaXJjdWl0JTIwYWVyaWFsfGVufDF8fHx8MTc2MDE4MjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      isPast: true,
      result: "P3",
    },
  ];

  const filteredEvents = events.filter((event) => {
    if (filter === "upcoming") return !event.isPast;
    if (filter === "past") return event.isPast;
    return true;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,10,10,0.9)), url("https://images.unsplash.com/photo-1736122054520-f17c2adfc7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwb25lJTIwcmFjZSUyMHRyYWNrfGVufDF8fHx8MTc2MDI2Njc4MXww&ixlib=rb-4.1.0&q=80&w=1080")',
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
            Race Calendar
          </h1>
          <p className="text-xl text-muted-foreground">
            Follow our journey across the world's most prestigious circuits
          </p>
        </motion.div>
      </section>

      {/* Filter Buttons */}
      <section className="bg-background py-8 px-4 border-b border-border sticky top-20 z-40 backdrop-blur-lg bg-background/80">
        <div className="max-w-7xl mx-auto flex gap-4 justify-center">
          {[
            { label: "All Events", value: "all" },
            { label: "Upcoming", value: "upcoming" },
            { label: "Past Events", value: "past" },
          ].map((item) => (
            <Button
              key={item.value}
              variant={filter === item.value ? "default" : "outline"}
              onClick={() => setFilter(item.value as any)}
              className={
                filter === item.value
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }
            >
              {item.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
