"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function ClosingMessage() {
    const [contentVisible, setContentVisible] = useState(false);

    return (
        <section className="relative py-20 md:py-32 px-6 flex flex-col items-center justify-center z-10 text-center min-h-[50vh] overflow-hidden">

            {/* Giant background golden lotus bloom */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none scale-[2.2] md:scale-[3] -z-10">
                <BloomMotif size={500} onBloomComplete={() => setContentVisible(true)} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.3 }}
                className="max-w-2xl w-full flex flex-col items-center"
            >
                <div className="w-12 h-[1px] bg-[var(--color-gold)] mb-8" />

                <p className="font-heading text-3xl md:text-5xl text-[var(--color-rose-ink)] leading-relaxed italic mb-8 font-medium">
                    "Your presence and blessings <br className="hidden md:inline" />
                    will make our celebration truly complete."
                </p>

                <p className="font-script text-4xl md:text-5xl text-[var(--color-gold)] mb-4">
                    {weddingData.couple.combinedTitle}
                </p>

                <p className="font-serif text-[var(--color-rose-ink)]/75 tracking-[0.25em] uppercase text-xs font-semibold">
                    November 10 & 11, 2026 • Sree Lakshmi Narayan Mahal
                </p>
            </motion.div>

        </section>
    );
}
