
import React, { useEffect, useRef } from 'react';

const Background = ({ images, isLoaded }) => {
    const canvasRef = useRef(null);
    const frameIndexRef = useRef(0);
    const animationFrameRef = useRef(null);

    // Configuration from original script
    const frameCount = 481;
    const normalSpeed = 0.5;

    const activeScrollSpeedRef = useRef(0);
    const scrollSensitivity = 6;
    const friction = 0.97;

    useEffect(() => {
        const handleWheel = (e) => {
            activeScrollSpeedRef.current += e.deltaY * 0.008 * scrollSensitivity;
            if (activeScrollSpeedRef.current > 15) activeScrollSpeedRef.current = 15;
            if (activeScrollSpeedRef.current < -15) activeScrollSpeedRef.current = -15;
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    useEffect(() => {
        if (!isLoaded || !images.length) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Find nearest available frame (for progressive loading)
        const findNearestFrame = (targetIndex) => {
            if (images[targetIndex] && images[targetIndex].complete) {
                return targetIndex;
            }
            
            // Search nearby frames
            for (let offset = 1; offset < 20; offset++) {
                const before = targetIndex - offset;
                const after = targetIndex + offset;
                
                if (before >= 0 && images[before] && images[before].complete) {
                    return before;
                }
                if (after < images.length && images[after] && images[after].complete) {
                    return after;
                }
            }
            
            // Fallback: find any available frame
            for (let i = 0; i < images.length; i++) {
                if (images[i] && images[i].complete) return i;
            }
            return -1;
        };

        const renderLoop = () => {
            activeScrollSpeedRef.current *= friction;
            if (Math.abs(activeScrollSpeedRef.current) < 0.001) activeScrollSpeedRef.current = 0;

            const step = normalSpeed + activeScrollSpeedRef.current;
            frameIndexRef.current += step;

            if (frameIndexRef.current >= frameCount) frameIndexRef.current = 0;
            else if (frameIndexRef.current < 0) frameIndexRef.current = frameCount - 1;

            let imgIndex = Math.floor(frameIndexRef.current);
            if (imgIndex >= images.length) imgIndex = 0;
            if (imgIndex < 0) imgIndex = images.length - 1;

            // Find nearest available frame if current isn't loaded
            const actualIndex = findNearestFrame(imgIndex);
            const img = actualIndex >= 0 ? images[actualIndex] : null;

            if (img && img.complete && canvas) {
                const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
            }

            animationFrameRef.current = requestAnimationFrame(renderLoop);
        };

        renderLoop();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isLoaded, images]);

    return (
        <>
            <canvas
                ref={canvasRef}
                id="hero-canvas"
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="film-grain"></div>
            <div className="scanlines"></div>
            <div className="vignette"></div>
        </>
    );
};

export default Background;
