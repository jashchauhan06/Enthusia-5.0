import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useVideoViewport } from '@/hooks/useVideoViewport';

interface CustomVideoPlayerProps {
  publicId: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  customControls?: {
    muteButton?: React.ReactNode;
    unmuteButton?: React.ReactNode;
  };
  onPlay?: () => void;
  onPause?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onVolumeChange?: (volume: number) => void;
}

// Mobile detection utility
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768);
};

// Safari detection utility
const isSafariBrowser = (): boolean => {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent;
  // Detect Safari but exclude Chrome/Chromium (which also contains "Safari" in UA)
  return /^((?!chrome|android).)*safari/i.test(ua);
};

export function CustomVideoPlayer({
  publicId,
  className = '',
  autoPlay = false,
  muted = false,
  loop = true,
  poster,
  customControls,
  onPlay,
  onPause,
  onTimeUpdate,
  onVolumeChange
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize the autoplay hook
  const { isInViewport } = useVideoViewport(videoRef, {
    threshold: 0.5,
    rootMargin: '0px',
    enabled: true
  });

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  
  // Generate Cloudinary video URL with optimizations
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${publicId}`;
  const posterUrl = poster || `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto,so_0/${publicId}.jpg`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;



    const isMobile = isMobileDevice();
    const isSafari = isSafariBrowser();


    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(video.duration);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      setCurrentTime(currentTime);
      onTimeUpdate?.(currentTime, video.duration);
    };

    const handlePlay = () => {

      setIsPlaying(true);
      onPlay?.();
    };

    const handlePause = () => {

      setIsPlaying(false);
      onPause?.();
    };

    const handleVolumeChange = () => {
      const newVolume = video.volume;
      setVolume(newVolume);
      setIsMuted(video.muted);
      onVolumeChange?.(newVolume);
    };

    const handleEnded = () => {

      setIsPlaying(false);
      if (!loop) {
        setCurrentTime(0);
      }
    };

    // Fallback timeout for mobile and Safari (both have unreliable video events)
    let loadingTimeout: NodeJS.Timeout;
    if (isMobile || isSafari) {

      loadingTimeout = setTimeout(() => {

        setIsLoading(false);
        if (video.duration && !isNaN(video.duration)) {
          setDuration(video.duration);
        }
      }, 2000); // 2 second timeout
    }

    // Listen to both loadeddata and canplay for better cross-browser support
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);
    video.addEventListener('ended', handleEnded);

    return () => {

      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onPlay, onPause, onTimeUpdate, onVolumeChange, loop]);

  // Auto-play based on viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = isMobileDevice();
    const isSafari = isSafariBrowser();
    
    // Don't wait for loading completion on mobile or Safari
    if (isMobile || isSafari || !isLoading) {
      const handleAutoPlay = async () => {
        try {
          if (isInViewport && !isPlaying) {
            await video.play();
          } else if (!isInViewport && isPlaying) {
            await video.pause();
          }
        } catch (error) {
          // Silently handle auto-play errors
        }
      };

      handleAutoPlay();
    }
  }, [isInViewport, isPlaying, isLoading]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume === 0) {
      video.muted = true;
    } else if (video.muted) {
      video.muted = false;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`relative group ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Loading Spinner - Only show if actually loading (not on mobile/Safari after timeout) */}
      {isLoading && !isMobileDevice() && !isSafariBrowser() && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Custom Controls Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent">
        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* Progress Bar */}
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-3"
          >
            <div
              className="h-full bg-white rounded-full transition-all duration-100"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-3">
              {/* Volume */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="hover:opacity-80 transition-opacity"
                >
                  {customControls?.muteButton && customControls?.unmuteButton ? (
                    isMuted ? customControls.muteButton : customControls.unmuteButton
                  ) : (
                    isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />
                  )}
                </button>
                
                <input
                  ref={volumeRef}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>
            </div>

            {/* Time Display */}
            <div className="text-xs">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
