import { motion } from "motion/react";
import { useState } from "react";

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

export function GalleryItem({ image, title, category, onClick }: GalleryItemProps) {
  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="aspect-square relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
}
