import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryItem } from "../components/GalleryItem";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";

export function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<Array<{ image: string; title: string; category: string }>>([]);

  useEffect(() => {
    fetch("/gallery/manifest.json")
      .then((r) => {
        if (!r.ok) throw new Error("manifest not found");
        return r.json();
      })
      .then((manifest: Array<{ file: string; title?: string; category?: string }>) => {
        const mapped = manifest.map((m) => ({
          image: `/gallery/${m.file}`,
          title: m.title || m.file,
          category: m.category || "gallery",
        }));
        setImages(mapped);
      })
      .catch(() => setImages([]));
  }, []);

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,10,10,0.9)), url("https://images.unsplash.com/photo-1705909706873-5432b644ccec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MDI2Njc4M3ww&ixlib=rb-4.1.0&q=80&w=1080")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 uppercase tracking-tighter">
            Visual Archive
          </h1>
          <p className="text-xl text-muted-foreground">
            Capturing moments of speed, precision, and victory
          </p>
        </motion.div>
      </section>

      {/* Filter Buttons */}
      <section className="bg-background py-8 px-4 border-b border-border sticky top-20 z-40 backdrop-blur-lg bg-background/80">
        <div className="max-w-7xl mx-auto flex gap-4 justify-center flex-wrap">
          {[
            { label: "All", value: "all" },
            { label: "Events", value: "events" },
            { label: "Car", value: "car" },
            { label: "Team", value: "team" },
            { label: "Behind the Scenes", value: "behind-the-scenes" },
          ].map((item) => (
            <Button
              key={item.value}
              variant={filter === item.value ? "default" : "outline"}
              onClick={() => setFilter(item.value)}
              className={
                filter === item.value
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }
            >
              {item.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
            {filteredImages.length === 0 ? (
              <div className="col-span-3 text-center text-muted-foreground py-20">
                No gallery images found. Add images to <strong>/public/gallery</strong> or update the manifest.
              </div>
            ) : (
              filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  layout
                >
                  <GalleryItem {...image} onClick={() => setSelectedImage(index)} />
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary z-10"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl max-h-[90vh]"
            >
              <img
                src={filteredImages[selectedImage].image}
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-2xl">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-primary uppercase tracking-wide text-sm mt-2">
                  {filteredImages[selectedImage].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
