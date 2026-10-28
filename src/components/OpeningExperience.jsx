"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import weddingData from "../config/weddingData";
import BloomMotif from "./BloomMotif";

export default function OpeningExperience({ onBloomComplete }) {
    const [isOpen, setIsOpen] = useState(!weddingData.settings.enableOpeningAnimation);

    useEffect(() => {
        if (!weddingData.settings.enableOpeningAnimation) {
            onBloomComplete();
        }
    }, [onBloomComplete]);

    const handleTap = () => {
        if (isOpen) return;
        setIsOpen(true);
        if (typeof window !== "undefined") {
            window.dispatchEvent(new Event('playMusic'));
        }
        if (onBloomComplete) {
            onBloomComplete();
        }
    };

    return (
        <section className={`relative flex flex-col justify-center px-6 lg:px-20 z-10 overflow-hidden ${isOpen ? 'py-10 lg:py-16' : 'min-h-[92vh]'}`}>

            {!isOpen ? (
                <motion.div
                    className="absolute inset-0 m-auto flex flex-col items-center justify-center gap-6 group cursor-pointer w-fit h-fit"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    onClick={handleTap}
                >
                    {/* Radiating Ceremonial Aura Ring */}
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.7, 0.3] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                            className="absolute w-36 h-36 rounded-full border border-[var(--color-gold)]/40 pointer-events-none"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.6, 1], opacity: [0.15, 0.4, 0.15] }}
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                            className="absolute w-44 h-44 rounded-full border border-[var(--color-gold)]/20 pointer-events-none"
                        />

                        {/* Royal Golden Wax Seal / Auspicious Crest */}
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-28 h-28 rounded-full relative overflow-hidden flex items-center justify-center shadow-[0_10px_35px_rgba(212,175,55,0.45)] border-2 border-[var(--color-gold-bright)]"
                            style={{
                                background: "radial-gradient(circle at 35% 30%, #FFE599 0%, #D4AF37 50%, #7A1C29 100%)"
                            }}
                        >
                            {/* Inner Dotted Circle */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFDF5" strokeWidth="1" strokeDasharray="3 3" />
                            </svg>

                            {/* Monogram or Motif */}
                            <div className="flex flex-col items-center z-10 text-center">
                                <span className="font-heading font-bold text-2xl tracking-wider text-[var(--color-rose-ink)] drop-shadow-sm">
                                    D <span className="text-[var(--color-gold)] text-sm">✦</span> A
                                </span>
                                <span className="text-[8px] font-body tracking-[0.25em] text-[#3B0A11] uppercase font-bold mt-0.5">
                                    INVITATION
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center gap-1.5 mt-2">
                        <span className="font-serif text-[11px] tracking-[0.35em] text-[var(--color-gold)] uppercase font-semibold">
                            An Auspicious Union
                        </span>
                        <p className="font-body text-xs tracking-[0.25em] text-[var(--color-rose-ink)] font-bold uppercase py-2 px-6 rounded-full bg-white/70 border border-[var(--color-gold)]/40 shadow-sm backdrop-blur-sm group-hover:bg-[var(--color-rose-ink)] group-hover:text-white transition-all duration-300">
                            Tap to Reveal
                        </p>
                    </div>
                </motion.div>
            ) : (
                <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between relative mt-12 md:mt-0">

                    {/* Left Side Auspicious Blessing Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="hidden lg:flex flex-col gap-5 mt-28 max-w-[340px]"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-[1.5px] bg-[var(--color-gold)]" />
                            <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-[var(--color-gold)] font-bold">
                                Divine Blessings
                            </span>
                        </div>

                        <p className="font-heading italic text-[var(--color-rose-ink)] text-xl md:text-2xl leading-relaxed">
                            Two souls, one journey.<br />
                            Rooted in love, blessed by family,<br />
                            and destined for eternity.<br /><br />
                            With joyful hearts,<br />
                            we step into our new beginning.
                        </p>

                        <div className="mt-2">
                            <p className="font-script text-5xl text-[var(--color-gold)]">
                                Together Forever
                            </p>
                            <p className="font-serif text-xs tracking-[0.2em] uppercase text-[var(--color-rose-ink)]/70 mt-1">
                                Dinesh & Abinaya
                            </p>
                        </div>
                    </motion.div>

                    {/* Centerpiece / Couple Names with Royal Styling */}
                    <div className="relative flex flex-col items-center lg:items-end w-full lg:w-auto">

                        {/* Background Floating Golden Lotus Motifs */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            className="absolute -top-16 -left-16 opacity-[0.18] -z-10 pointer-events-none"
                        >
                            <BloomMotif size={280} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 25 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute -bottom-16 -right-16 opacity-[0.12] -z-10 blur-[1px] pointer-events-none"
                        >
                            <BloomMotif size={200} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1.1 }}
                            className="text-center lg:text-right flex flex-col items-center lg:items-end w-full"
                        >
                            {/* Auspicious Traditional Invocation */}
                            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 mb-6 backdrop-blur-sm">
                                <span className="text-[var(--color-gold)] text-xs">✦</span>
                                <span className="font-serif text-[11px] md:text-xs tracking-[0.25em] uppercase font-bold text-[var(--color-rose-ink)]">
                                    Together with their families
                                </span>
                                <span className="text-[var(--color-gold)] text-xs">✦</span>
                            </div>

                            {/* Groom Name */}
                            <h1 className="font-script text-7xl md:text-8xl lg:text-[130px] text-[var(--color-rose-ink)] leading-[0.8] mb-1 relative w-full text-center lg:text-right drop-shadow-sm">
                                {weddingData.couple.partnerOne}
                            </h1>

                            {/* Ampersand Crest */}
                            <div className="w-full flex justify-center lg:justify-end lg:pr-[28%] my-3 lg:my-1 z-10 items-center gap-3">
                                <span className="w-12 h-[1px] bg-[var(--color-gold)]/50 hidden md:inline-block" />
                                <span className="font-heading not-italic text-4xl md:text-5xl text-[var(--color-rose-ink)] lg:text-[var(--color-gold)] drop-shadow-sm lg:drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                                    &
                                </span>
                                <span className="w-12 h-[1px] bg-[var(--color-gold)]/50 hidden md:inline-block" />
                            </div>

                            {/* Bride Name */}
                            <h1 className="font-script text-7xl md:text-8xl lg:text-[130px] text-[var(--color-rose-ink)] leading-[0.8] w-full text-center lg:text-right mt-1 drop-shadow-sm">
                                {weddingData.couple.partnerTwo}
                            </h1>
                        </motion.div>

                        {/* Events Quick Overview Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1.1 }}
                            className="font-body flex flex-col items-center lg:items-end text-center lg:text-right mt-12 lg:mt-16 w-full"
                        >
                            <p className="tracking-[0.22em] uppercase text-xs md:text-sm font-bold text-[var(--color-rose-ink)] mb-4">
                                Cordially invite you to celebrate our wedding
                            </p>

                            {/* Dual Events Badge */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 mb-5 w-full justify-center lg:justify-end">
                                <div className="px-5 py-2.5 rounded-2xl bg-white/80 border border-[var(--color-gold)]/40 shadow-sm backdrop-blur-sm text-center">
                                    <span className="block text-[10px] font-serif uppercase tracking-widest text-[var(--color-gold)] font-bold">
                                        Reception
                                    </span>
                                    <span className="block font-heading text-base font-semibold text-[var(--color-rose-ink)]">
                                        Nov 10 • 6:00 PM – 10:00 PM
                                    </span>
                                </div>

                                <div className="px-5 py-2.5 rounded-2xl bg-white/80 border border-[var(--color-gold)]/40 shadow-sm backdrop-blur-sm text-center">
                                    <span className="block text-[10px] font-serif uppercase tracking-widest text-[var(--color-gold)] font-bold">
                                        Muhurtham
                                    </span>
                                    <span className="block font-heading text-base font-semibold text-[var(--color-rose-ink)]">
                                        Nov 11 • Morning 6:00 AM
                                    </span>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[var(--color-rose-ink)] text-[var(--color-gold-bright)] tracking-[0.2em] font-serif text-[11px] font-bold uppercase shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>{weddingData.reception.venue}</span>
                            </div>

                            {/* Smooth Scroll Cue */}
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                onClick={() => {
                                    const detailsEl = document.getElementById("details");
                                    if (detailsEl) {
                                        detailsEl.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="mt-8 flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none appearance-none group"
                            >
                                <span className="font-serif text-[10px] tracking-[0.25em] text-[var(--color-rose-ink)]/70 uppercase font-bold group-hover:text-[var(--color-rose-ink)] transition-colors">
                                    Scroll for Event Details
                                </span>
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                    className="text-[var(--color-gold)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </motion.div>
                            </motion.button>
                        </motion.div>

                    </div>
                </div>
            )}
        </section>
    );
}
