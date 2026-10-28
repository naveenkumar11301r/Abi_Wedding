"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function LocationSection() {
    const [contentVisible, setContentVisible] = useState(false);

    return (
        <section id="location" className="relative py-12 md:py-20 px-6 flex flex-col items-center justify-center z-10 text-center">

            <div className="flex items-center gap-4 mb-8">
                <span className="font-serif text-base md:text-lg tracking-[0.35em] font-black text-[var(--color-rose-ink)] uppercase flex">
                    {Array.from("The Venue").map((l, i) => (
                        <motion.span
                            key={i}
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                            style={{ display: "inline-block", whiteSpace: "pre" }}
                        >
                            {l}
                        </motion.span>
                    ))}
                </span>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <BloomMotif size={48} onBloomComplete={() => setContentVisible(true)} />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="max-w-2xl w-full flex flex-col items-center"
            >
                <h2 className="font-heading text-3xl md:text-5xl text-[var(--color-rose-ink)] mb-3 font-bold">
                    {weddingData.reception.venue}
                </h2>

                <p className="font-body text-[var(--color-rose-ink)]/80 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6">
                    {weddingData.reception.address}
                </p>

                <motion.a
                    href={weddingData.reception.directionsUrl || weddingData.qrCode?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 font-serif text-[var(--color-rose-ink)] tracking-widest uppercase text-xs font-bold bg-white/90 border border-[var(--color-gold)] px-8 py-3 rounded-full hover:bg-[var(--color-rose-ink)] hover:text-white transition-all duration-300 shadow-md relative z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                    Get Directions on Google Maps
                </motion.a>

                {/* Map Container */}
                <div className="w-full h-72 md:h-96 mt-10 rounded-[36px] p-2 bg-gradient-to-b from-[var(--color-gold)]/30 to-[var(--color-rose-ink)]/15 border border-[var(--color-gold)]/40 relative shadow-lg overflow-hidden">
                    <div className="w-full h-full rounded-[30px] overflow-hidden bg-white relative">
                        <iframe
                            src={weddingData.reception.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Venue Map - Sree Lakshmi Narayan Mahal"
                            className="w-full h-full absolute inset-0 rounded-[30px]"
                        ></iframe>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
