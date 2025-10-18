import { motion } from "motion/react";
import { useState } from "react";

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

export function GalleryItem({ image, title, category, onClick }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="aspect-square relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white text-xl mb-2">{title}</h3>
          <p className="text-primary text-sm uppercase tracking-wide">{category}</p>
        </motion.div>

        {/* Red Border on Hover */}
        <motion.div
          className="absolute inset-0 border-4 border-primary pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
