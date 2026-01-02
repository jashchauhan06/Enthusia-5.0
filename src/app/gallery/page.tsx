"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryCategories = ["All", "TechFest", "Cultural", "Campus", "Highlights"];

const galleryImages = [
    { id: 1, src: null, title: "Hackathon Winners", category: "TechFest", gradient: "from-neon-blue to-electric-purple" },
    { id: 2, src: null, title: "Dance Performance", category: "Cultural", gradient: "from-magenta to-cyber-pink" },
    { id: 3, src: null, title: "Workshop Session", category: "TechFest", gradient: "from-electric-purple to-magenta" },
    { id: 4, src: null, title: "Campus View", category: "Campus", gradient: "from-aurora-green to-neon-blue" },
    { id: 5, src: null, title: "Opening Ceremony", category: "Highlights", gradient: "from-cyber-pink to-magenta" },
    { id: 6, src: null, title: "Band Performance", category: "Cultural", gradient: "from-neon-blue to-aurora-green" },
    { id: 7, src: null, title: "Robotics Competition", category: "TechFest", gradient: "from-electric-purple to-neon-blue" },
    { id: 8, src: null, title: "Art Exhibition", category: "Cultural", gradient: "from-magenta to-electric-purple" },
    { id: 9, src: null, title: "Prize Distribution", category: "Highlights", gradient: "from-neon-blue to-magenta" },
    { id: 10, src: null, title: "Gaming Arena", category: "TechFest", gradient: "from-aurora-green to-electric-purple" },
    { id: 11, src: null, title: "Fashion Show", category: "Cultural", gradient: "from-cyber-pink to-electric-purple" },
    { id: 12, src: null, title: "Drone View", category: "Campus", gradient: "from-neon-blue to-cyber-pink" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    const currentIndex = selectedImage !== null
        ? filteredImages.findIndex((img) => img.id === selectedImage)
        : -1;

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setSelectedImage(filteredImages[currentIndex - 1].id);
        }
    };

    const goToNext = () => {
        if (currentIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentIndex + 1].id);
        }
    };

    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-magenta/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-electric-purple/15 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/30">
                            <Camera className="w-3 h-3" />
                            Memories
                        </span>

                        <h1
                            className="text-4xl sm:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            <span className="text-gradient">Gallery</span>
                        </h1>

                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Relive the best moments from previous ENTHUSIA editions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {galleryCategories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeCategory === category
                                        ? "bg-gradient-to-r from-magenta to-electric-purple text-white shadow-lg shadow-magenta/25"
                                        : "glass text-text-secondary hover:text-text-primary"
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setSelectedImage(image.id)}
                                className="cursor-pointer group"
                            >
                                <GlassCard className="overflow-hidden aspect-square relative" hover>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient} opacity-60 group-hover:opacity-80 transition-opacity`} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Camera className="w-12 h-12 text-white/50" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-sm font-medium">{image.title}</p>
                                        <p className="text-white/60 text-xs">{image.category}</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation */}
                        {currentIndex > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                                className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                        )}
                        {currentIndex < filteredImages.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                                className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        )}

                        {/* Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-4xl max-h-[80vh] aspect-video relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {filteredImages.find((img) => img.id === selectedImage) && (
                                <>
                                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${filteredImages.find((img) => img.id === selectedImage)?.gradient} flex items-center justify-center`}>
                                        <Camera className="w-24 h-24 text-white/30" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                                        <p className="text-white text-xl font-bold">
                                            {filteredImages.find((img) => img.id === selectedImage)?.title}
                                        </p>
                                        <p className="text-white/60">
                                            {filteredImages.find((img) => img.id === selectedImage)?.category}
                                        </p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
