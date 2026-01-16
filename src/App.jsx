import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './mobile.css';
import Background from './components/Background';
import ScrollController from './components/ScrollController';
import GlobalUI from './components/GlobalUI';

// CursorEffect removed - using custom NEURODANCE cursor instead

function App() {
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [audioInstance, setAudioInstance] = useState(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    // 1. Audio Preloading
    const audio = new Audio('/bg.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.crossOrigin = 'anonymous';

    const checkAudioReady = () => new Promise(resolve => {
      if (audio.readyState >= 3) {
        resolve(true);
      } else {
        audio.addEventListener('canplaythrough', () => resolve(true), { once: true });
        audio.addEventListener('error', () => resolve(true), { once: true });
      }
    });

    // 2. Optimized Image Preloading
    const frameCount = 481;
    const isMobile = window.innerWidth <= 768;
    
    // On mobile, use every 2nd frame (240 frames) for faster load
    // On desktop, load critical frames first then fill in
    const frameStep = isMobile ? 2 : 1;
    const criticalStep = 10; // Load every 10th frame first for quick preview
    
    const loadList = new Array(frameCount).fill(null);
    imagesRef.current = loadList;
    
    const currentFrame = index => `/backimages/img_${index.toString().padStart(3, '0')}.webp`;

    // Load a single image
    const loadImage = (frameNum) => new Promise(resolve => {
      const img = new Image();
      img.src = currentFrame(frameNum);
      img.onload = () => {
        loadList[frameNum - 1] = img;
        imagesRef.current = [...loadList];
        resolve(true);
      };
      img.onerror = () => resolve(false);
    });

    // Load images in batches to prevent browser overload
    const loadBatch = async (frameNumbers, onProgress) => {
      const batchSize = 10;
      let loaded = 0;
      
      for (let i = 0; i < frameNumbers.length; i += batchSize) {
        const batch = frameNumbers.slice(i, i + batchSize);
        await Promise.all(batch.map(loadImage));
        loaded += batch.length;
        if (onProgress) onProgress(loaded, frameNumbers.length);
      }
    };

    const preloadImages = async () => {
      // Phase 1: Load critical frames (every 10th) - ~48 images
      const criticalFrames = [];
      for (let i = 1; i <= frameCount; i += criticalStep) {
        criticalFrames.push(i);
      }
      
      await loadBatch(criticalFrames, (loaded, total) => {
        setProgress(Math.round((loaded / total) * 60)); // 0-60%
      });
      
      // Update images for initial display
      setImages([...imagesRef.current]);
      
      // Phase 2: Load remaining frames in background (non-blocking)
      const remainingFrames = [];
      for (let i = 1; i <= frameCount; i += frameStep) {
        if (!criticalFrames.includes(i)) {
          remainingFrames.push(i);
        }
      }
      
      // Show site after critical frames + audio ready
      return true;
    };

    // Load remaining frames after site is shown
    const loadRemainingFrames = async () => {
      const criticalStep = 10;
      const frameStep = window.innerWidth <= 768 ? 2 : 1;
      const criticalFrames = [];
      for (let i = 1; i <= frameCount; i += criticalStep) {
        criticalFrames.push(i);
      }
      
      const remainingFrames = [];
      for (let i = 1; i <= frameCount; i += frameStep) {
        if (!criticalFrames.includes(i)) {
          remainingFrames.push(i);
        }
      }
      
      // Load in background without blocking UI
      const batchSize = 15;
      for (let i = 0; i < remainingFrames.length; i += batchSize) {
        const batch = remainingFrames.slice(i, i + batchSize);
        await Promise.all(batch.map(loadImage));
        setImages([...imagesRef.current]);
        // Small delay between batches to keep UI responsive
        await new Promise(r => setTimeout(r, 50));
      }
    };

    // Run critical loading
    Promise.all([preloadImages(), checkAudioReady()]).then(() => {
      setProgress(100);
      setAudioInstance(audio);
      setTimeout(() => {
        setIsLoaded(true);
        // Continue loading remaining frames in background
        loadRemainingFrames();
      }, 300);
    });

  }, []);

  return (
    <>
      {/* Custom NEURODANCE-style purple cursor applied via CSS */}

      {/* SACRED Static Background (DO NOT MODIFY) */}
      <div className="static-background"></div>

      {/* Video Canvas Background */}
      <Background images={images} isLoaded={isLoaded} />

      {/* Film Grain Overlay */}
      <div className="film-grain"></div>

      {/* Vignette Overlay */}
      <div className="vignette"></div>

      {/* Scanlines */}
      <div className="scanlines"></div>

      {/* Loader */}
      <div className="loader" id="loader" style={{ opacity: isLoaded ? 0 : 1, visibility: isLoaded ? 'hidden' : 'visible' }}>
        <div className="loader-content">
          <div className="loader-title">ENTHUSIA 5.0</div>
          <div className="loader-subtitle">INITIALIZING REALITY...</div>
          <div className="loader-bar">
            <div className="loader-progress" id="loaderProgress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="loader-percent">{progress}%</div>
        </div>
      </div>

      {isLoaded && (
        <>
          {/* Main Content */}
          <div className="main-content">
            <ScrollController />
          </div>
          <GlobalUI audioInstance={audioInstance} />
        </>
      )}
    </>
  );
}

export default App;
