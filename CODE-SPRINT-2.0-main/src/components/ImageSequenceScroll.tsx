import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader2, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceScrollProps {
    className?: string;
    children?: React.ReactNode;
}

export function ImageSequenceScroll({ className, children }: ImageSequenceScrollProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const scrollHintRef = useRef<HTMLDivElement>(null);
    const chevronRef = useRef<SVGSVGElement>(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Store loaded images
    const framesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            // Use Vite's import.meta.glob to get all images
            // This ensures we get the correct hashed URLs in production
            const modules = import.meta.glob<{ default: string }>('/src/assets/enthusia_intro/*.jpg', {
                eager: true,
            });

            // Sort keys to ensure correct frame order (frame_001, frame_002, etc.)
            const sortedKeys = Object.keys(modules).sort((a, b) => {
                const aNum = parseInt(a.match(/frame_(\d+)\.jpg/)?.[1] || "0");
                const bNum = parseInt(b.match(/frame_(\d+)\.jpg/)?.[1] || "0");
                return aNum - bNum;
            });

            const imageUrls = sortedKeys.map(key => modules[key].default);
            const totalFrames = imageUrls.length;

            let loadedCount = 0;
            const loadedFrames: HTMLImageElement[] = [];

            // Preload images
            const promises = imageUrls.map((url, index) => {
                return new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => {
                        loadedFrames[index] = img; // maintain order
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
                        resolve();
                    };
                    img.onerror = () => {
                        loadedCount++; // Count error as processed to finish loading
                        resolve(); // Resolve anyway to not block
                    };
                });
            });

            await Promise.all(promises);
            framesRef.current = loadedFrames.filter(Boolean); // Remove any failed loads
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || !containerRef.current || framesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Helper to render a specific frame
        const renderFrame = (index: number) => {
            const img = framesRef.current[index];
            if (!img) return;

            // Calculate "cover" dimensions
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                // Image is wider than canvas -> crop width
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imgRatio;
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = 0;
            } else {
                // Image is taller than canvas -> crop height
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                offsetX = 0;
                offsetY = (canvasHeight - drawHeight) / 2;
            }

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        // Handle resizing
        const handleResize = () => {
            if (containerRef.current) {
                // Set canvas internal resolution to match display size for sharpness
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Re-render current frame
                const self = ScrollTrigger.getById("image-sequence");
                if (self) {
                    // Recalculate based on current progress
                    const frameIndex = Math.min(
                        framesRef.current.length - 1,
                        Math.floor(self.progress * (framesRef.current.length - 1))
                    );
                    renderFrame(frameIndex);
                } else {
                    renderFrame(0);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        // GSAP ScrollTrigger
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: "image-sequence",
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=400%", // Pin for 400% of viewport height
                    pin: true,
                    scrub: 0.5,
                },
            });

            // 1. Animate Frames (0 to 100%)
            tl.to({}, { // Use an empty object or a dummy property to drive the onUpdate
                duration: 1, // This duration is relative to the timeline's total duration
                ease: "none",
                onUpdate: function () {
                    // Calculate frame based on this tween's progress
                    const progress = this.progress();
                    const frameIndex = Math.min(
                        framesRef.current.length - 1,
                        Math.floor(progress * (framesRef.current.length - 1))
                    );
                    renderFrame(frameIndex);
                }
            });

            // 2. Animate Overlay Fade In (Last 20% of the scroll)
            // We use a separate tween or insert it into the timeline overlapping the end
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    opacity: 1,
                    duration: 0.2,
                    ease: "power2.in"
                }, "<0.8"); // Start at 80% of the previous animation's duration
            }

            // 3. Fade out scroll hint immediately on scroll
            if (scrollHintRef.current) {
                gsap.to(scrollHintRef.current, {
                    opacity: 0,
                    duration: 0.2, // Quick fade out
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=100", // valid pixel value
                        scrub: true
                    }
                });
            }

            // 4. Infinite Scroll Animation for Chevron
            if (chevronRef.current) {
                gsap.fromTo(chevronRef.current,
                    { y: -5, opacity: 1 },
                    {
                        y: 10,
                        opacity: 0,
                        duration: 1.5,
                        repeat: -1,
                        ease: "power2.inOut"
                    }
                );
            }

        }, containerRef);

        return () => {
            window.removeEventListener("resize", handleResize);
            ctx.revert();
        };
    }, [imagesLoaded]);

    return (
        <div ref={containerRef} className={`relative h-screen w-full overflow-hidden bg-black ${className}`}>
            {/* Loading Spinner */}
            {!imagesLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black text-white">
                    <Loader2 className="w-10 h-10 animate-spin mb-4" />
                    <p className="font-mono text-sm">Loading Experience... {loadingProgress}%</p>
                </div>
            )}

            <canvas
                ref={canvasRef}
                className="absolute inset-0 block w-full h-full object-cover"
            />

            {/* Scroll Indicator */}
            <div
                ref={scrollHintRef}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
                <div className="flex flex-col items-center gap-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                    <span className="text-white text-xs font-bold font-mono tracking-[0.2em] uppercase">Scroll to Explore</span>
                    <ChevronDown ref={chevronRef} className="text-white w-6 h-6" />
                </div>
            </div>

            {/* Fade Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-background pointer-events-none opacity-0 z-0"
            />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
