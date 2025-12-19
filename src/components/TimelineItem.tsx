import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { JSX } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: Array<string>;
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
  // Desktop logic: if side is right, we want content on right.
  // The original used "flex-row" for right, which meant:
  // Item1(Content), Item2(Node), Item3(Spacer)
  // So "flex-row" naturally puts Content on LEFT.
  // Wait, if flex-row -> Content, Node, Spacer. That means Content is on Left. 
  // If use flex-row-reverse -> Spacer, Node, Content. Content is on Right.
  // So: side="left" (Content on left) -> flex-row.
  // side="right" (Content on right) -> flex-row-reverse.
  // Original was: side="right" ? "flex-row" : "flex-row-reverse"
  // If original worked, then my understanding of "side" was inverted or their CSS was.
  // Assuming "side=right" means "Content on Right", then "flex-row" (Content-Node-Spacer) is WRONG.
  // However, I will preserve the *original desktop behavior* by keeping that conditional for `md:`.

  // Mobile logic:
  // We want: Node(Left) -- Content(Right).
  // So we need [Node, Content].
  // DOM is [Content, Node, Spacer].
  // To get [Node, Content] visually without DOM change:
  // use flex-row-reverse on mobile? -> Spacer, Node, Content. (Hide spacer) -> Node, Content.
  // Yes!

  return (
    <motion.div
      className={`flex items-start md:items-center gap-4 md:gap-8 mb-12 md:mb-16 ${
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
          className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
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
              className="mt-4 w-full h-48 object-cover rounded"
            />
          )}
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0 mt-6 md:mt-0">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
