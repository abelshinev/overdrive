import { motion } from "motion/react";
import { Check } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: Array<string>;
  image?: string;
  side: "left" | "right";
  isFirst?: boolean;
}

export function TimelineItem({
  year,
  title,
  description,
  image,
  side,
  isFirst,
}: TimelineItemProps) {
  // Desktop logic: if side is right, we want content on right.
  // ... (comments preserved) ...

  return (
    <motion.div
      className={`flex items-start md:items-center gap-4 md:gap-8 mb-8 md:mb-16 ${
        // Mobile: always flex-row-reverse to put Node(Left) and Content(Right) (assuming DOM: Content, Node)
        // Wait, flex-row-reverse of [Content, Node] is [Node, Content]. Correct.
        "flex-row-reverse"
        } ${
        // Desktop: Restore original logic
        side === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      initial={{ opacity: 0, x: side === "right" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Content */}
      <div className={`flex-1 ${
        // Mobile: always text-left
        "text-left"
        } ${
        // Desktop: conditional
        side === "right" ? "md:text-right" : "md:text-left"
        }`}>
        <motion.div
          className={`bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors ${isFirst && "opacity-60 "
            }`}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-primary text-sm uppercase tracking-wide mb-2">
            {year}
          </div>
          <h3 className="text-2xl mb-3">{title}</h3>
          <ul className="text-muted-foreground">{
            description.map((point, idx) => (
              <li className="list-disc ml-8 leading-relaxed text-left " key={idx}>{point}</li>
            ))
          } </ul>
          {image && (
            <img
              src={image}
              alt={title}
              className="mt-4 w-full h-32 md:h-48 object-cover rounded"
            />
          )}
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0 mt-6 md:mt-0">
        <div className="w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center" />
        {isFirst && (
          <Check className="absolute inset-0 w-5 h-5 mx-auto my-auto text-black" strokeWidth={3} />
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
