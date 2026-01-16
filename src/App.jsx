import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // 1. Audio Preloading
    const audio = new Audio('/bg.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.crossOrigin = 'anonymous';

    // We'll track audio readiness 
    // audio.readyState >= 3 (HAVE_FUTURE_DATA) means we can play
    const checkAudioReady = () => new Promise(resolve => {
      if (audio.readyState >= 3) {
        resolve(true);
      } else {
        audio.addEventListener('canplaythrough', () => resolve(true), { once: true });
        audio.addEventListener('error', () => {
          console.error("Audio Load Error");
          resolve(true); // Fail gracefully
        }, { once: true });
      }
    });

    // 2. Image Preloading
    const frameCount = 481;
    const loadList = new Array(frameCount);

    const preloadImages = () => new Promise(resolve => {
      let count = 0;
      const currentFrame = index => `/backimages/img_${index.toString().padStart(3, '0')}.webp`;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          count++;
          // Weight images as 80% of progress, audio is 20% (implicitly handled by the wait)
          setProgress(Math.round((count / frameCount) * 100));
          if (count === frameCount) {
            setImages(loadList);
            resolve(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load frame ${i}`);
          count++;
          if (count === frameCount) {
            setImages(loadList);
            resolve(true);
          }
        };
        loadList[i - 1] = img;
      }
    });

    // Run both in parallel but ensure audio waits
    Promise.all([preloadImages(), checkAudioReady()]).then(() => {
      setAudioInstance(audio);
      setTimeout(() => setIsLoaded(true), 500);
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
