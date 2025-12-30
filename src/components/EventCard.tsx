import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  isPast?: boolean;
  result?: string;
  summary?: string;
  hideButton?: boolean;
}

export function EventCard({
  title,
  date,
  location,
  image,
  isPast = false,
  result,
  summary,
  hideButton,
}: EventCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-card border border-border h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="aspect-video relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {isPast && result && (
          <Badge className="absolute top-4 right-4 bg-primary text-black">
            {result}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-medium mb-3">{title}</h3>

        <div className="flex flex-col gap-2 mb-4 text-lg text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span>{location}</span>
          </div>
        </div>

        {/* Summary / details panel */}
        {summary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={open ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden mb-4"
          >
            <div className=" text-md text-muted-foreground">{summary}</div>
          </motion.div>
        )}

        <div className="mt-auto">
          {!hideButton && (
            <Button
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
              onClick={() => {
                // Toggle summary panel when button clicked
                setOpen((v) => !v);
              }}
            >
              {isPast ? (open ? "Close Results" : "View Results") : "Learn More"}
            </Button>
          )}
        </div>
      </div>

      {/* Accent Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
