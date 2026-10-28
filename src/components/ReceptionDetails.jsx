"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BloomMotif from "./BloomMotif";
import weddingData from "../config/weddingData";

export default function ReceptionDetails() {
    const [contentVisible, setContentVisible] = useState(false);

    return (
        <section id="details" className="relative py-12 md:py-20 px-4 md:px-8 flex flex-col items-center justify-center z-10 text-center overflow-hidden">
            <div className="w-full max-w-[1240px] flex flex-col items-center relative">

                {/* Dinesh Groom Avatar (Desktop Left Floating) */}
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.85 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="hidden xl:flex flex-col items-center absolute -left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                >
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                        className="relative w-48 lg:w-56"
                    >
                        <div className="absolute -inset-2 rounded-3xl bg-[var(--color-gold)]/15 blur-lg" />
                        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-cream)] to-[var(--color-rose-ink)]/20 shadow-xl overflow-hidden">
                            <img
                                src="/dinesh.jpg"
                                alt="Dinesh - The Groom"
                                className="w-full h-auto rounded-[22px] object-cover"
                            />
                        </div>
                        <span className="block mt-3 font-serif text-xs tracking-[0.25em] text-[var(--color-rose-ink)] font-bold uppercase text-center bg-white/80 py-1 px-4 rounded-full border border-[var(--color-gold)]/30 shadow-sm">
                            Dinesh (Groom)
                        </span>
                    </motion.div>
                </motion.div>

                {/* Abinaya Bride Avatar (Desktop Right Floating) */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.85 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="hidden xl:flex flex-col items-center absolute -right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                >
                    <motion.div
                        animate={{ y: [8, -8, 8] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                        className="relative w-48 lg:w-56"
                    >
                        <div className="absolute -inset-2 rounded-3xl bg-[var(--color-gold)]/15 blur-lg" />
                        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-cream)] to-[var(--color-rose-ink)]/20 shadow-xl overflow-hidden">
                            <img
                                src="/abinaya.jpg"
                                alt="Abinaya - The Bride"
                                className="w-full h-auto rounded-[22px] object-cover"
                            />
                        </div>
                        <span className="block mt-3 font-serif text-xs tracking-[0.25em] text-[var(--color-rose-ink)] font-bold uppercase text-center bg-white/80 py-1 px-4 rounded-full border border-[var(--color-gold)]/30 shadow-sm">
                            Abinaya (Bride)
                        </span>
                    </motion.div>
                </motion.div>

                {/* Section Header with Animated Title */}
                <div className="flex items-center gap-4 mb-10 relative z-30">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        <BloomMotif size={52} onBloomComplete={() => setContentVisible(true)} />
                    </motion.div>
                    <span className="font-serif text-base md:text-xl tracking-[0.35em] font-black text-[var(--color-rose-ink)] uppercase flex">
                        {Array.from("The Celebrations").map((l, i) => (
                            <motion.span
                                key={i}
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    delay: i * 0.08,
                                    ease: "easeInOut"
                                }}
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {l}
                            </motion.span>
                        ))}
                    </span>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        <BloomMotif size={52} />
                    </motion.div>
                </div>

                {/* Mobile View Avatars (Side-by-side cute couple banner) */}
                <div className="flex xl:hidden w-full justify-center items-center gap-4 mb-8 z-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center max-w-[130px]"
                    >
                        <div className="rounded-2xl p-1 bg-gradient-to-b from-[var(--color-gold)] to-white shadow-md overflow-hidden">
                            <img src="/dinesh.jpg" alt="Dinesh" className="w-full h-auto rounded-xl object-cover" />
                        </div>
                        <span className="mt-1.5 font-serif text-[10px] tracking-wider uppercase text-[var(--color-rose-ink)] font-bold">
                            Dinesh
                        </span>
                    </motion.div>

                    <div className="flex flex-col items-center">
                        <span className="font-heading text-2xl text-[var(--color-rose-ink)]">&</span>
                        <div className="w-8 h-[1px] bg-[var(--color-gold)]/40 my-1" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-col items-center max-w-[130px]"
                    >
                        <div className="rounded-2xl p-1 bg-gradient-to-b from-[var(--color-gold)] to-white shadow-md overflow-hidden">
                            <img src="/abinaya.jpg" alt="Abinaya" className="w-full h-auto rounded-xl object-cover" />
                        </div>
                        <span className="mt-1.5 font-serif text-[10px] tracking-wider uppercase text-[var(--color-rose-ink)] font-bold">
                            Abinaya
                        </span>
                    </motion.div>
                </div>

                {/* Dual Celebration Event Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-30"
                >
                    {/* Event 1: Reception */}
                    <div className="bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-[36px] border border-[var(--color-gold)]/35 shadow-[0_10px_35px_rgba(74,14,23,0.06)] relative overflow-hidden flex flex-col justify-between text-center group hover:border-[var(--color-gold)] transition-all duration-300">
                        {/* Decorative Top Accent */}
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-rose-ink)] to-[var(--color-gold)]" />

                        <div>
                            <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/40 text-[var(--color-rose-ink)] font-serif text-[10px] tracking-[0.25em] uppercase font-bold mb-4">
                                Evening Celebration
                            </span>

                            <h3 className="font-heading text-3xl text-[var(--color-rose-ink)] mb-1 font-bold">
                                Wedding Reception
                            </h3>
                            <p className="text-xs font-serif tracking-widest text-[var(--color-gold)] uppercase mb-6 font-semibold">
                                An Evening of Joy & Festivity
                            </p>

                            <div className="p-4 rounded-2xl bg-[var(--color-cream)]/70 border border-[var(--color-gold)]/20 mb-6">
                                <p className="font-heading italic text-xl md:text-2xl text-[var(--color-rose-ink)] mb-1">
                                    Tuesday, November 10, 2026
                                </p>
                                <p className="font-body text-base font-semibold text-[var(--color-rose-ink)]/90">
                                    6:00 PM to 10:00 PM
                                </p>
                            </div>

                            <p className="font-body text-[var(--color-rose-ink)] font-bold text-sm">
                                {weddingData.reception.venue}
                            </p>
                            <p className="font-body text-[var(--color-rose-ink)]/70 text-xs mt-1.5 leading-relaxed max-w-xs mx-auto">
                                {weddingData.reception.address}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-[var(--color-gold)]/20">
                            <a
                                href={weddingData.events[0]?.calendarUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-rose-ink)] text-[var(--color-rose-ink)] uppercase tracking-widest text-[11px] font-bold hover:bg-[var(--color-rose-ink)] hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                Add Reception to Calendar
                            </a>
                        </div>
                    </div>

                    {/* Event 2: Sacred Muhurtham */}
                    <div className="bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-[36px] border border-[var(--color-gold)]/35 shadow-[0_10px_35px_rgba(74,14,23,0.06)] relative overflow-hidden flex flex-col justify-between text-center group hover:border-[var(--color-gold)] transition-all duration-300">
                        {/* Decorative Top Accent */}
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-rose-ink)] to-[var(--color-gold)]" />

                        <div>
                            <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-rose-ink)] text-[var(--color-gold-bright)] font-serif text-[10px] tracking-[0.25em] uppercase font-bold mb-4">
                                Muhurtham
                            </span>

                            <h3 className="font-heading text-3xl text-[var(--color-rose-ink)] mb-1 font-bold">
                                Marriage Ceremony
                            </h3>
                            <p className="text-xs font-serif tracking-widest text-[var(--color-gold)] uppercase mb-6 font-semibold">
                                Vows & Traditional Blessings
                            </p>

                            <div className="p-4 rounded-2xl bg-[var(--color-cream)]/70 border border-[var(--color-gold)]/20 mb-6">
                                <p className="font-heading italic text-xl md:text-2xl text-[var(--color-rose-ink)] mb-1">
                                    Wednesday, November 11, 2026
                                </p>
                                <p className="font-body text-base font-semibold text-[var(--color-rose-ink)]/90">
                                    Morning 6:00 AM onwards
                                </p>
                            </div>

                            <p className="font-body text-[var(--color-rose-ink)] font-bold text-sm">
                                {weddingData.marriage.venue}
                            </p>
                            <p className="font-body text-[var(--color-rose-ink)]/70 text-xs mt-1.5 leading-relaxed max-w-xs mx-auto">
                                {weddingData.marriage.address}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-[var(--color-gold)]/20">
                            <a
                                href={weddingData.events[1]?.calendarUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-rose-ink)] text-[var(--color-rose-ink)] uppercase tracking-widest text-[11px] font-bold hover:bg-[var(--color-rose-ink)] hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                Add Muhurtham to Calendar
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
