"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PetalDrift() {
    const [isClient, setIsClient] = useState(false);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Generate diverse celebratory particles: gold petals, jasmine buds, and stardust
        const generated = Array.from({ length: 16 }).map((_, i) => {
            const types = ["goldPetal", "jasmineBud", "stardust"];
            const type = types[i % 3];
            return {
                id: i,
                type,
                left: `${Math.random() * 100}%`,
                duration: 14 + Math.random() * 18,
                delay: Math.random() * 15,
                size: type === "stardust" ? 6 + Math.random() * 6 : 14 + Math.random() * 10,
                x: [0, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 120],
                rotate: [0, (Math.random() > 0.5 ? 1 : -1) * 360, (Math.random() > 0.5 ? 1 : -1) * 720],
                opacity: type === "stardust" ? 0.8 : 0.65
            };
        });
        setElements(generated);
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden" aria-hidden="true">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute top-[-5%]"
                    style={{
                        left: el.left,
                        width: el.size,
                        height: el.size
                    }}
                    animate={{
                        y: ["0vh", "110vh"],
                        x: el.x,
                        rotate: el.rotate,
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: el.delay,
                    }}
                >
                    {el.type === "goldPetal" && (
                        <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]" style={{ opacity: el.opacity }}>
                            <path
                                d="M12 2C7 2 4 8 5 13C6 18 10 22 12 22C14 22 18 18 19 13C20 8 17 2 12 2Z"
                                fill="url(#goldPetalGrad)"
                            />
                            <defs>
                                <linearGradient id="goldPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#FDE68A" />
                                    <stop offset="60%" stopColor="#D4AF37" />
                                    <stop offset="100%" stopColor="#92400E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    )}

                    {el.type === "jasmineBud" && (
                        <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm" style={{ opacity: el.opacity }}>
                            <path
                                d="M12 3 C9 6, 7 12, 10 18 C11 20, 13 20, 14 18 C17 12, 15 6, 12 3 Z"
                                fill="#FFFDF5"
                                stroke="#D4AF37"
                                strokeWidth="0.8"
                            />
                            <circle cx="12" cy="18" r="2" fill="#D4AF37" />
                        </svg>
                    )}

                    {el.type === "stardust" && (
                        <div
                            className="w-full h-full rounded-full bg-[var(--color-gold)] animate-pulse"
                            style={{
                                opacity: el.opacity,
                                boxShadow: "0 0 8px rgba(243, 208, 104, 0.9)"
                            }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
}
