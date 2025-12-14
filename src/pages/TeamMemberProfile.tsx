import { motion } from "motion/react";
import { useEffect } from "react";
import { getTeamMemberById } from "../lib/teamMembers";
import { Button } from "../components/ui/button";
import { ArrowLeft, Mail, Linkedin, Instagram, Twitter } from "lucide-react";

interface TeamMemberProfileProps {
  memberId: string;
  onClose: () => void;
}

export function TeamMemberProfile({ memberId, onClose }: TeamMemberProfileProps) {
  const member = getTeamMemberById(memberId);

  // Scroll to team section when profile opens, with offset to scroll up more
  useEffect(() => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      const yOffset = -100; // Offset to scroll up more
      const y = teamSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [memberId]);

  if (!member) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Team Member Not Found</h1>
          <Button onClick={onClose}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-end pt-20 md:pt-24"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${member.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-4 left-4 z-50">
          <Button
            variant="outline"
            size="lg"
            onClick={onClose}
            className="backdrop-blur-lg bg-black/50 border-white/20 hover:bg-white/10 hover:border-primary"
          >
            <ArrowLeft className="mr-2" />
            Back to Team
          </Button>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary uppercase tracking-wide text-sm mb-2">
              {member.role}
            </p>
            <h1 className="text-5xl md:text-7xl mb-4 uppercase tracking-tighter">
              {member.name}
            </h1>
            {member.yearsWithTeam && (
              <p className="text-xl text-muted-foreground">
                {member.yearsWithTeam}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Biography Section */}
          <div className="md:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl uppercase tracking-tighter mb-6 text-primary">
                Biography
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {member.fullBio}
              </p>
            </motion.section>

            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl uppercase tracking-tighter mb-6 text-primary">
                Key Achievements
              </h2>
              <ul className="space-y-3">
                {member.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-3 mt-1">▸</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl uppercase tracking-tighter mb-6 text-primary">
                Contact
              </h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${member.contact.email}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="mr-3" />
                  {member.contact.email}
                </a>
                {member.contact.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${member.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="mr-3" />
                    linkedin.com/in/{member.contact.linkedin}
                  </a>
                )}
                {member.contact.instagram && (
                  <a
                    href={`https://instagram.com/${member.contact.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="mr-3" />
                    {member.contact.instagram}
                  </a>
                )}
                {member.contact.twitter && (
                  <a
                    href={`https://twitter.com/${member.contact.twitter.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="mr-3" />
                    {member.contact.twitter}
                  </a>
                )}
              </div>
            </motion.section>
          </div>

          {/* Stats Sidebar */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl uppercase tracking-tighter mb-6 text-primary">
                Career Statistics
              </h2>
              <div className="space-y-6">
                {member.stats?.races !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Races
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.races}
                    </p>
                  </div>
                )}
                {member.stats?.wins !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Wins
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.wins}
                    </p>
                  </div>
                )}
                {member.stats?.podiums !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Podiums
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.podiums}
                    </p>
                  </div>
                )}
                {member.stats?.championships !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Championships
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.championships}
                    </p>
                  </div>
                )}
                {member.stats?.poles !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Pole Positions
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.poles}
                    </p>
                  </div>
                )}
                {member.stats?.fastLaps !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Fastest Laps
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.fastLaps}
                    </p>
                  </div>
                )}
                {member.stats?.projects !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Major Projects
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.projects}
                    </p>
                  </div>
                )}
                {member.stats?.innovations !== undefined && (
                  <div className="border-b border-border pb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Innovations
                    </p>
                    <p className="text-4xl font-medium text-primary">
                      {member.stats.innovations}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

