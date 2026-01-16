import React, { useEffect, useRef } from 'react';

const GlobalUI = ({ audioInstance }) => {
    const leftCanvasRef = useRef(null);
    const rightCanvasRef = useRef(null);
    const audioRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const animationFrameRef = useRef(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        // Use provided audio or create new
        const audio = audioInstance || new Audio('/bg.mp3');
        if (!audioInstance) {
            audio.loop = true;
            audio.volume = 0.5;
            audio.crossOrigin = 'anonymous';
        }
        audioRef.current = audio;

        const initAudio = () => {
            // Only init context if not already done
            if (audioContextRef.current) {
                if (audioContextRef.current.state === 'suspended') {
                    audioContextRef.current.resume();
                }
                return;
            }

            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioContextRef.current = new AudioContext();
                analyserRef.current = audioContextRef.current.createAnalyser();
                analyserRef.current.fftSize = 2048;

                // Create source from the EXISTING audio element
                // Wrap in try-catch because re-connecting the same audio element 
                // to a new context (on remount) might throw an error.
                try {
                    const source = audioContextRef.current.createMediaElementSource(audio);
                    source.connect(analyserRef.current);
                    analyserRef.current.connect(audioContextRef.current.destination);
                } catch (err) {
                    console.warn("Visualizer connection failed (audio already connected?):", err);
                    // We continue without connecting the visualizer, but audio still plays.
                }
            } catch (e) {
                console.error("Audio Init Error", e);
            }
        };

        const renderVisualizer = () => {
            animationFrameRef.current = requestAnimationFrame(renderVisualizer);
            if (!analyserRef.current) return;

            const bufferLength = analyserRef.current.fftSize;
            const dataArray = new Uint8Array(bufferLength);
            analyserRef.current.getByteTimeDomainData(dataArray);

            [leftCanvasRef.current, rightCanvasRef.current].forEach(cvs => {
                if (!cvs) return;
                const ctx = cvs.getContext('2d');
                if (cvs.width !== cvs.offsetWidth || cvs.height !== cvs.offsetHeight) {
                    cvs.width = cvs.offsetWidth;
                    cvs.height = cvs.offsetHeight;
                }

                ctx.clearRect(0, 0, cvs.width, cvs.height);
                ctx.lineWidth = 3;
                ctx.strokeStyle = '#ffffff';
                ctx.shadowBlur = 15;
                ctx.shadowColor = '#ffffff';
                ctx.globalAlpha = 0.8;
                ctx.beginPath();

                const sliceWidth = cvs.width / bufferLength;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    const v = dataArray[i] / 128.0;
                    const y = (v * cvs.height) / 2;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                    x += sliceWidth;
                }
                ctx.lineTo(cvs.width, cvs.height / 2);
                ctx.stroke();
            });
        };

        renderVisualizer();

        const unlock = () => {
            // Prevent multiple unlock attempts
            if (isInitializedRef.current) return;
            
            initAudio();

            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume().catch(() => {
                    // Silently ignore - will retry on next interaction
                });
            }

            // Try to play
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isInitializedRef.current = true;
                    // Remove all listeners once successfully playing
                    events.forEach(e => window.removeEventListener(e, genericUnlock));
                }).catch(() => {
                    // Silently wait for next user interaction - no console spam
                });
            }
        };

        // If audioInstance is provided, it might be ready to play already,
        // BUT browsers block programmed playback without gesture.
        // So we still need the generic unlock listeners.

        // Attach global listeners for first interaction
        const events = ['click', 'keydown', 'touchstart'];
        const genericUnlock = () => {
            unlock();
        };
        events.forEach(e => window.addEventListener(e, genericUnlock, { once: false }));

        // Allow toggleAudio to access unlock
        audioRef.current.unlock = unlock;

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            events.forEach(e => window.removeEventListener(e, genericUnlock));
            // Don't pause/destroy audio if it came from props (it belongs to App)
            if (!audioInstance) {
                audio.pause();
                audio.src = '';
                if (audioContextRef.current) audioContextRef.current.close();
            }
        };
    }, [audioInstance]); // Depend on audioInstance

    const toggleAudio = (e) => {
        // Direct interaction handling
        if (!audioContextRef.current) {
            // Try to unlock immediately since this IS a user gesture (click)
            if (audioRef.current && audioRef.current.unlock) {
                audioRef.current.unlock();
            }
            return;
        }

        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume().catch(() => {});
        }

        if (audioRef.current.paused) {
            audioRef.current.play().catch(() => {});
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <>
            <nav className="header-nav" style={{ opacity: 1 }}>
                <a href="https://sitnagpur.edu.in/" target="_blank" rel="noopener noreferrer" className="sit-badge-container" style={{ textDecoration: 'none' }}>
                    <span className="sit-badge">SIT NAGPUR</span>
                </a>
            </nav>

            <div className="global-header-visuals hidden-on-hero" id="global-header-container" style={{ cursor: 'pointer' }} onClick={toggleAudio}>
                <canvas id="techfest-vis-left" className="techfest-vis-canvas" ref={leftCanvasRef}></canvas>
                <div className="techfest-badge-container">
                    <span className="techfest-badge">ENTHUSIA 5.0</span>
                </div>
                <canvas id="techfest-vis-right" className="techfest-vis-canvas" ref={rightCanvasRef}></canvas>
            </div>

            <div className="hero-footer-text fade-in">
                ENTER THE PARALLEL FEST UNIVERSE 12 - 14 FEBRUARY 2026 • SIT NAGPUR
            </div>
        </>
    );
}

export default GlobalUI;
