import { useState } from "react";
import { motion } from "motion/react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/ui/button";
import { teamMembers, getTeamMembersByCategory } from "../lib/teamMembers";
import { TeamMemberProfile } from "./TeamMemberProfile";
import { Link } from "react-router-dom";

export function TeamPage() {

    const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

    const [showAlumni, setShowAlumni] = useState(false);
      const drivers = getTeamMembersByCategory("drivers");
  const leadership = getTeamMembersByCategory("leadership");
  const engineering = getTeamMembersByCategory("engineering");

    const handleMemberClick = (memberId: string) => {
    // Scroll to the top of the team section first, with offset to scroll up more
    const teamSection = document.getElementById("team");
    if (teamSection) {
      const yOffset = -100; // Offset to scroll up more
      const y = teamSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    // Then show the profile after a short delay to allow scroll to complete
    setTimeout(() => {
      setSelectedMemberId(memberId);
    }, 300);
  };

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

      {/* Drivers Section */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl mb-12 uppercase tracking-tighter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Drivers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drivers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard
                  {...member}
                  onClick={() => handleMemberClick(member.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-card py-16 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl mb-12 uppercase tracking-tighter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Leadership
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard
                  {...member}
                  onClick={() => handleMemberClick(member.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="bg-background py-16 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl mb-12 uppercase tracking-tighter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Engineering
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {engineering.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard
                  {...member}
                  onClick={() => handleMemberClick(member.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        <section className="bg-card py-16 px-4 border-t border-border">
        {/* Alumni Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 uppercase tracking-tighter">Alumni</h2>
            <Link to="/alumni" className="text-sm text-primary underline mb-4 inline-block">
              
            <Button
              variant="outline"
              onClick={() => setShowAlumni(!showAlumni)}
              className="bg-primary hover:bg-white cursor-pointer p-8 text-xl hover:text-white hover:border-primary"
            >
              Visit Our Alumni Page
            </Button>
            </Link>
            <br />
          </div>

        </div>
      </section>
  </div>
    );    
}
