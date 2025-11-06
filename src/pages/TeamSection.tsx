import { useState } from "react";
import { motion } from "motion/react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/ui/button";
import { teamMembers, getTeamMembersByCategory } from "../data/teamMembers";
import { TeamMemberProfile } from "./TeamMemberProfile";
import { Link } from "react-router-dom";

export function TeamPage() {

    const [showAlumni, setShowAlumni] = useState(false);

    return (
        <section className="bg-card py-16 px-4 border-t border-border">
        {/* Alumni Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 uppercase tracking-tighter">Alumni</h2>
            <Link to="/alumni" className="text-sm text-primary underline mb-4 inline-block">
              
            <Button
              variant="outline"
              onClick={() => setShowAlumni(!showAlumni)}
              className="hover:bg-primary hover:text-white hover:border-primary"
            >
              Visit the Alumni Page
            </Button>
            </Link>
            <br />
          </div>

        </div>
      </section>

    );    
}
