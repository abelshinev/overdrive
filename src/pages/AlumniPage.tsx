import { useState } from "react";
import { motion } from "motion/react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/ui/button";
import { teamMembers, getTeamMembersByCategory } from "../data/teamMembers";
import { TeamMemberProfile } from "./TeamMemberProfile";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function AlumniPage() {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);


  const allAlumni = getTeamMembersByCategory("alumni");
  const faculty = allAlumni.filter(member => 
    member.id === "vineeth-krishna" || member.id === "john-paul"
  );
  const alumni = allAlumni.filter(member => 
    member.id !== "vineeth-krishna" && member.id !== "john-paul"
  );
  

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

  const handleCloseProfile = () => {
    setSelectedMemberId(null);
  };

  // Show member profile if one is selected
  if (selectedMemberId) {
    return <TeamMemberProfile memberId={selectedMemberId} onClose={handleCloseProfile} />;
  }

  return (
    <>
      <section className="bg-card py-16 px-4 border-t border-border">
        {/* Faculty Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 uppercase tracking-tighter">Faculty</h2>
            <br />
          </div>

          {
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {faculty.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamCard
                    {...member}
                    isAlumni={true}
                    onClick={() => handleMemberClick(member.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          }
        </div>
      </section>

      <section className="bg-background py-16 px-4 border-t border-border">
        {/* Alumni Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 uppercase tracking-tighter">Alumni</h2>
            <br />
          </div>

          {
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {alumni.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamCard
                    {...member}
                    isAlumni={true}
                    onClick={() => handleMemberClick(member.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          }
        </div>
      </section>
    </>

  );
}
