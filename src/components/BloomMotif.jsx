"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BloomMotif({ className = "", size = 64, onBloomComplete }) {
    const [hasBloomed, setHasBloomed] = useState(false);

    return (
        <motion.div
            className={`relative inline-flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
            onViewportEnter={() => {
                if (!hasBloomed) {
                    setHasBloomed(true);
                    if (onBloomComplete) setTimeout(onBloomComplete, 500);
                }
            }}
            viewport={{ once: true, margin: "-10px" }}
        >
            {/* Outer Radiating Aura Ring */}
            <motion.div
                className="absolute inset-0 rounded-full border border-[var(--color-gold)]/30 pointer-events-none"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={hasBloomed ? { scale: [0.9, 1.15, 1], opacity: [0, 0.7, 0.4] } : {}}
                transition={{ duration: 1.8, ease: "easeOut" }}
            />

            {/* Concentric Dotted Sacred Mandala Ring */}
            <svg viewBox="0 0 100 100" className="absolute w-[92%] h-[92%] pointer-events-none opacity-60">
                <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                />
            </svg>

            {/* 8 Sculpted Royal Lotus Petals (Outer Tier) */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((rot, i) => (
                <motion.div
                    key={`outer-${rot}`}
                    className="absolute w-[44%] h-[44%] origin-bottom"
                    style={{ bottom: "50%", rotate: rot }}
                    initial={{ scaleY: 0.1, scaleX: 0.1, opacity: 0 }}
                    animate={hasBloomed ? { scaleY: 1, scaleX: 1, opacity: 0.95 } : {}}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.04
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_4px_rgba(212,175,55,0.25)]">
                        <defs>
                            <linearGradient id={`goldGrad-${rot}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F9E29D" />
                                <stop offset="50%" stopColor="#D4AF37" />
                                <stop offset="100%" stopColor="#9E781B" />
                            </linearGradient>
                        </defs>
                        {/* Sculpted Sacred Lotus Petal with sharp tip and ornate central rib */}
                        <path
                            d="M50 0 C65 20, 85 45, 82 72 C80 90, 68 100, 50 100 C32 100, 20 90, 18 72 C15 45, 35 20, 50 0 Z"
                            fill={`url(#goldGrad-${rot})`}
                        />
                        <path
                            d="M50 8 L50 85"
                            stroke="#FFF3C4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            opacity="0.8"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* 8 Inner Alternating Sacred Petals (Inner Tier) */}
            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rot, i) => (
                <motion.div
                    key={`inner-${rot}`}
                    className="absolute w-[32%] h-[32%] origin-bottom"
                    style={{ bottom: "50%", rotate: rot }}
                    initial={{ scaleY: 0.1, scaleX: 0.1, opacity: 0 }}
                    animate={hasBloomed ? { scaleY: 1, scaleX: 1, opacity: 1 } : {}}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2 + (i * 0.03)
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_1px_3px_rgba(74,14,23,0.3)]">
                        <path
                            d="M50 0 C60 25, 75 50, 70 75 C68 90, 60 100, 50 100 C40 100, 32 90, 30 75 C25 50, 40 25, 50 0 Z"
                            fill="#F7DA83"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Auspicious Center Bindu / Golden Jewel with Crimson Core */}
            <motion.div
                className="w-[28%] h-[28%] rounded-full z-10 flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                style={{
                    background: "radial-gradient(circle at 35% 35%, #FFF0B8 0%, #D4AF37 55%, #7A1C29 100%)"
                }}
                animate={hasBloomed ? { scale: [0.8, 1.25, 1] } : { scale: 0.7 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
                <div className="w-[35%] h-[35%] rounded-full bg-[var(--color-rose-ink)] shadow-inner" />
            </motion.div>
        </motion.div>
    );
}
