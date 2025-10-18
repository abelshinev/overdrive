import { motion } from "motion/react";
import { Trophy } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  side: "left" | "right";
}

export function TimelineItem({
  year,
  title,
  description,
  image,
  side,
}: TimelineItemProps) {
  return (
    <motion.div
      className={`flex items-center gap-8 mb-16 ${
        side === "right" ? "flex-row" : "flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: side === "right" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Content */}
      <div className={`flex-1 ${side === "right" ? "text-right" : "text-left"}`}>
        <motion.div
          className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-primary text-sm uppercase tracking-wide mb-2">
            {year}
          </div>
          <h3 className="text-2xl mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {image && (
            <img
              src={image}
              alt={title}
              className="mt-4 w-full h-48 object-cover rounded"
            />
          )}
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </motion.div>
  );
}
