import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fit?: 'cover' | 'contain' | 'fill';
  placeholder?: string;
  lazy?: boolean;
}

export function SmartImage({ 
  src, 
  alt, 
  className = '', 
  fit = 'cover',
  placeholder,
  lazy = true 
}: SmartImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(!lazy);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-src="${src}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [src, lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill'
  }[fit];

  return (
    <div className={`relative overflow-hidden ${className}`} data-src={src}>
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="" 
              className={`w-full h-full ${objectFitClass} opacity-30`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin" />
            </div>
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not found</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {shouldLoad && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full ${objectFitClass} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}