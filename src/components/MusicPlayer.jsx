"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import weddingData from "../config/weddingData";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const handlePlayEvent = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => console.error("Audio play failed:", e));
            }
        };
        window.addEventListener('playMusic', handlePlayEvent);
        return () => window.removeEventListener('playMusic', handlePlayEvent);
    }, [isPlaying]);

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error(e));
        }
        setIsPlaying(!isPlaying);
    };

    if (!weddingData.music?.enabled || !weddingData.music?.src) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-serif text-[10px] tracking-widest uppercase text-[var(--color-rose-ink)] border border-[var(--color-gold)]/40 shadow-lg pointer-events-none flex items-center gap-2"
                        aria-live="polite"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-ping" />
                        <span>Playing Wedding Music</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <audio ref={audioRef} src={weddingData.music.src} loop />

            <motion.button
                onClick={toggleMusic}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="w-14 h-14 rounded-full shadow-[0_8px_25px_rgba(212,175,55,0.4)] flex items-center justify-center relative border-2 border-[var(--color-gold-bright)] cursor-pointer group"
                style={{
                    background: "radial-gradient(circle at 35% 35%, #FEEFAD 0%, #D4AF37 60%, #5C101C 100%)"
                }}
            >
                {!isPlaying ? (
                    // Closed / Unplayed State: Auspicious Golden Bell / Kalash Icon
                    <div className="flex flex-col items-center justify-center text-[var(--color-rose-ink)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 18V5l12-2v13" />
                            <circle cx="6" cy="18" r="3" />
                            <circle cx="18" cy="16" r="3" />
                        </svg>
                    </div>
                ) : (
                    // Playing State: Rotating Royal Golden Lotus Disc
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className="relative w-8 h-8 flex items-center justify-center"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
                                <path
                                    key={rot}
                                    d="M50 10 C58 25, 65 40, 50 50 C35 40, 42 25, 50 10 Z"
                                    fill="#FFFDF5"
                                    transform={`rotate(${rot} 50 50)`}
                                />
                            ))}
                            <circle cx="50" cy="50" r="14" fill="#5C101C" />
                            <circle cx="50" cy="50" r="6" fill="#FEEFAD" />
                        </svg>
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
}
