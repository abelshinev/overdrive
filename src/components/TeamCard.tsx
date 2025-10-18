import { motion } from "motion/react";
import { useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  isAlumni?: boolean;
}

export function TeamCard({ name, role, image, bio, isAlumni = false }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[3/4] relative">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover ${
            isAlumni ? "grayscale opacity-60" : ""
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl mb-1">{name}</h3>
          <p className="text-primary text-sm uppercase tracking-wide mb-2">{role}</p>

          {/* Bio on hover */}
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-300 overflow-hidden"
          >
            {bio}
          </motion.p>
        </div>

        {/* Red accent bar on hover */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
