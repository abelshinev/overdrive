import { motion } from "motion/react";

interface SponsorLogoProps {
  name: string;
  tier?: "platinum" | "gold" | "silver";
}

export function SponsorLogo({ name, tier = "silver" }: SponsorLogoProps) {
  const tierColors = {
    platinum: "border-accent hover:border-accent",
    gold: "border-yellow-500 hover:border-yellow-400",
    silver: "border-gray-500 hover:border-gray-400",
  };

  return (
    <motion.div
      className={`bg-card border-2 ${tierColors[tier]} rounded-lg p-8 flex items-center justify-center h-32 transition-all hover:bg-muted`}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-2xl tracking-wider text-muted-foreground group-hover:text-white transition-colors uppercase">
        {name}
      </div>
    </motion.div>
  );
}
