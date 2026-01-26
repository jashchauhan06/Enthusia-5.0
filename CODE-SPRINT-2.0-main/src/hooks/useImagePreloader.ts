import { useState, useEffect } from 'react';

// Critical images that should be preloaded
const CRITICAL_IMAGES = [
  '/codesprint-app/images/card_bg.png',
  '/codesprint-app/images/mask.png',
  '/codesprint-app/images/money_heist_bg.png',
  '/codesprint-app/dev-favicon.svg',
  '/codesprint-app/images/team/Sunidhi.jpg',
  '/codesprint-app/images/team/Prathmesh.png',
  '/codesprint-app/images/team/Jash.jpg',
  '/codesprint-app/images/team/Soumya.png',
];

// Additional images that can be loaded after critical ones
const SECONDARY_IMAGES: string[] = [];

interface UseImagePreloaderReturn {
  isLoading: boolean;
  progress: number;
  loadedImages: number;
  totalImages: number;
}

export function useImagePreloader(): UseImagePreloaderReturn {
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = CRITICAL_IMAGES.length + SECONDARY_IMAGES.length;

  useEffect(() => {
    let mounted = true;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        const handleComplete = () => {
          if (mounted) {
            setLoadedImages(prev => prev + 1);
          }
          resolve();
        };
        
        img.onload = handleComplete;
        img.onerror = handleComplete; // Still count as loaded to prevent hanging
        
        // Set a timeout to prevent hanging on slow images
        setTimeout(handleComplete, 3000);
        
        img.src = src;
      });
    };

    const preloadImages = async () => {
      try {
        // Load critical images first (in parallel but with limit)
        const criticalBatches = [];
        const batchSize = 4; // Limit concurrent requests
        
        for (let i = 0; i < CRITICAL_IMAGES.length; i += batchSize) {
          const batch = CRITICAL_IMAGES.slice(i, i + batchSize);
          criticalBatches.push(Promise.all(batch.map(preloadImage)));
        }
        
        await Promise.all(criticalBatches);
        
        // Then load secondary images (smaller batches)
        for (let i = 0; i < SECONDARY_IMAGES.length; i += 2) {
          const batch = SECONDARY_IMAGES.slice(i, i + 2);
          await Promise.all(batch.map(preloadImage));
        }
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        if (mounted) {
          // Add a small delay to ensure smooth transition
          setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, 300);
        }
      }
    };

    preloadImages();

    return () => {
      mounted = false;
    };
  }, []);

  const progress = Math.min(Math.round((loadedImages / totalImages) * 100), 100);

  return {
    isLoading,
    progress,
    loadedImages,
    totalImages,
  };
}