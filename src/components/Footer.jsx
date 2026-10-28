"use client";

import { motion } from "framer-motion";
import weddingData from "../config/weddingData";

export default function Footer() {
    return (
        <footer className="py-14 px-6 text-center font-serif text-xs tracking-[0.2em] uppercase text-[var(--color-rose-ink)] font-semibold relative z-20 flex justify-center">

            <div className="relative inline-flex items-center justify-center py-4 px-6 md:px-12 rounded-full bg-white/70 border border-[var(--color-gold)]/50 shadow-[0_4px_20px_rgba(212,175,55,0.15)] overflow-hidden backdrop-blur-md group">

                {/* Sweeping gold shine */}
                <motion.div
                    initial={{ x: "-150%" }}
                    animate={{ x: "200%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        ease: "linear",
                        repeatDelay: 2
                    }}
                    className="absolute inset-0 z-10 w-1/2 h-full bg-gradient-to-r from-transparent via-[var(--color-gold)]/25 to-transparent blur-[2px] skew-x-[-25deg]"
                />

                <span className="relative z-20 flex flex-wrap justify-center items-center gap-y-2 text-[11px] md:text-xs">
                    <span className="font-bold text-[var(--color-rose-ink)]">{weddingData.couple.combinedTitle}</span>
                    <span className="mx-3 text-[var(--color-gold)]">✦</span>
                    <span className="text-[var(--color-gold)] font-medium">Nov 10 & 11, 2026</span>
                    <span className="mx-3 text-[var(--color-gold)]">✦</span>
                    <span>{weddingData.reception.venue}</span>
                </span>

            </div>

        </footer>
    );
}
