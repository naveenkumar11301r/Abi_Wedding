"use client";

import { useState, useEffect } from "react";
import PetalDrift from "../components/PetalDrift";
import OpeningExperience from "../components/OpeningExperience";
import MusicPlayer from "../components/MusicPlayer";
import ReceptionDetails from "../components/ReceptionDetails";
import LocationSection from "../components/LocationSection";
import CountdownTimer from "../components/CountdownTimer";
import ClosingMessage from "../components/ClosingMessage";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant delay to ensure smooth font loading and aesthetic entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`relative min-h-screen overflow-x-clip selection:bg-[var(--color-gold)]/30 selection:text-[var(--color-rose-ink)] ${!scrollUnlocked || isLoading ? "overflow-hidden max-h-screen" : ""}`}>

      {/* Preloader / Initial Royal Loading Screen */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-cream)] transition-opacity duration-1000 pointer-events-none ${isLoading ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="font-heading text-4xl text-[var(--color-rose-ink)] font-bold tracking-widest">D</span>
            <span className="text-[var(--color-gold)] text-2xl animate-spin" style={{ animationDuration: "6s" }}>✦</span>
            <span className="font-heading text-4xl text-[var(--color-rose-ink)] font-bold tracking-widest">A</span>
          </div>
          <span className="font-serif text-[11px] text-[var(--color-gold)] tracking-[0.35em] uppercase font-bold mt-3">
            Dinesh & Abinaya
          </span>
          <div className="mt-2 text-[var(--color-rose-ink)]/50 font-body text-[9px] tracking-[0.3em] uppercase">
            Wedding Invitation
          </div>
        </div>
      </div>

      {/* Background layer ambient celebratory drift */}
      <PetalDrift />

      {/* Interactive sticky music object */}
      <MusicPlayer />

      <div className="relative z-10 flex flex-col">
        <OpeningExperience onBloomComplete={() => setScrollUnlocked(true)} />

        <div className={`transition-opacity duration-700 ease-out ${scrollUnlocked ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <ReceptionDetails />
          <LocationSection />
          <CountdownTimer />
          <ClosingMessage />
          <Footer />
        </div>
      </div>
    </main>
  );
}
