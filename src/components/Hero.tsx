import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
  showScrollIndicator?: boolean;
}

export function Hero({
  image,
  title,
  subtitle,
  ctaText,
  onCtaClick,
  showScrollIndicator = true,
}: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${image})`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6 text-white uppercase">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {ctaText && (
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
            >
              {ctaText}
            </Button>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>
        )}
      </div>
    </div>
  );
}
