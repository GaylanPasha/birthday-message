import { useState } from "react";
import BirthdayCard from "../BirthdayCard";
import LoveBook from "../LoveBook";

export default function Home() {
  const [showBook, setShowBook] = useState(false);

  return (
    <>
      {!showBook && (
        <div className="relative">
          <BirthdayCard />
          {/* دوگمەیەک بۆ چوونە ناو کتێبی ئەڤینی */}
          <button
            onClick={() => setShowBook(true)}
            className="fixed top-6 right-6 z-50 px-5 py-3 rounded-full bg-gradient-to-r from-[#db2777] to-[#9d174d] text-white font-bold text-sm md:text-base shadow-[0_10px_30px_rgba(219,39,119,0.5)] border border-white/20 cursor-pointer hover:scale-105 transition-transform"
          >
            📖❤️ کتێبی ئەشقی من و تۆ
          </button>
        </div>
      )}

      {showBook && (
        <div className="relative">
          <LoveBook />
          {/* دوگمەیەک بۆ گەڕانەوە */}
          <button
            onClick={() => setShowBook(false)}
            className="fixed top-6 right-6 z-50 px-5 py-3 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ffd93d] text-white font-bold text-sm md:text-base shadow-[0_10px_30px_rgba(255,107,157,0.5)] border border-white/20 cursor-pointer hover:scale-105 transition-transform"
          >
            🎂 نامەی ڕۆژی لەدایکبوون
          </button>
        </div>
      )}
    </>
  );
}