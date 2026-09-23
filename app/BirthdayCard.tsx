import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

type Heart = {
  id: number;
  emoji: string;
  left: number;
};

const BirthdayCard = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showSecondLetter, setShowSecondLetter] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // ⏱️ کاتژمێری خۆشەویستی - ٢٧ی ژانویەی ٢٠٢٤، کاتژمێر ٦ی بەیانی
  const [loveStart] = useState(new Date(2024, 0, 27, 6, 0, 0));
  const [elapsed, setElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ⚠️ لێرە ناوەکان بگۆڕە
  const lovedOne = "ڕوویایەکەم";
  const yourName = "گەیلان";

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎉 کۆنفێتی دوای کرتەکردن لەسەر دوگمە
  useEffect(() => {
    if (!showIntro) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  // ⏱️ کاتژمێری ئەڤین
  useEffect(() => {
    const updateElapsed = () => {
      const now = new Date().getTime();
      const diff = now - loveStart.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setElapsed({ days, hours, minutes, seconds });
    };
    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);
    return () => clearInterval(interval);
  }, [loveStart]);

  // دڵی فڕیوی خۆکار
  useEffect(() => {
    if (showIntro) return;
    const interval = setInterval(() => {
      const id = Date.now();
      const emojis = ["❤️", "💋", "🤍", "💖", "💕", "🥹", "💍", "🫀", "❣️"];
      const newHeart: Heart = {
        id,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
      };
      setHearts((prev) => [...prev, newHeart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 5000);
    }, 1200);
    return () => clearInterval(interval);
  }, [showIntro]);

  const createHeart = () => {
    const id = Date.now();
    const emojis = ["❤️", "💋", "🤍", "💖", "💕", "🥹", "🫀", "❣️"];
    setHearts((prev) => [
      ...prev,
      {
        id,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
      },
    ]);
    setTimeout(
      () => setHearts((prev) => prev.filter((h) => h.id !== id)),
      5000
    );
  };

  // 🔄 گەڕانەوە بۆ سەرەتا
  const backToIntro = () => {
    setShowIntro(true);
    setShowSecondLetter(false);
    setShowSurprise(false);
    setHearts([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex justify-center items-start p-5 relative overflow-hidden">
      
      {/* ═══════════════════════════════════════ */}
      {/* 🎬 INTRO - وێنە و دوگمە */}
      {/* ═══════════════════════════════════════ */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-5 overflow-y-auto"
          >
            {/* 🌟 ئەستێرەکانی دەوروبەر */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute text-[#ffd93d] text-xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>

            {/* 🖼️ وێنەکە - بچووکتر */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* گوڵ لە دەوروبەری وێنەکە */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 md:-inset-6 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl">🌹</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl">🌸</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl">💐</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl">🌷</div>
              </motion.div>

              <img
                src="/image.png"
                alt="ڕوویا و گەیلان"
                className="w-[200px] md:w-[240px] h-auto rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_100px_rgba(255,107,157,0.4)] border-4 border-[#ff6b9d]/40 relative z-10"
              />

              {/* دڵ لە سەرەوەی وێنەکە */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl z-20"
              >
                ❤️
              </motion.div>
            </motion.div>

            {/* دوگمە */}
            <motion.button
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowIntro(false)}
              className="mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#ff6b9d] via-[#ffd93d] to-[#ff6b9d] text-white font-bold text-sm md:text-lg shadow-[0_15px_40px_rgba(255,107,157,0.6)] border-none cursor-pointer max-w-md text-center leading-relaxed"
            >
              💌 ئەم نامەیە بکەوەتاقانەکەم 💌
            </motion.button>

            {/* ئەنیمەیشنی بچووک */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 2, duration: 2, repeat: Infinity }}
              className="mt-6 text-white/60 text-sm"
            >
              ❤️ کرتە بکە بۆ بینینی نامەکە ❤️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════ */}
      {/* 🎉 نامەکە (دوای کرتەکردن) */}
      {/* ═══════════════════════════════════════ */}
      {!showIntro && (
        <>
          {showConfetti && (
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              numberOfPieces={250}
              recycle={false}
              colors={["#ff6b9d", "#ffd93d", "#ff8fab", "#ffffff", "#ffb3d1"]}
            />
          )}

          <div className="fixed inset-0 pointer-events-none opacity-60 bg-[radial-gradient(2px_2px_at_20%_30%,white,transparent),radial-gradient(2px_2px_at_60%_70%,white,transparent),radial-gradient(1px_1px_at_50%_50%,white,transparent),radial-gradient(1px_1px_at_80%_10%,white,transparent),radial-gradient(2px_2px_at_90%_60%,white,transparent),radial-gradient(1px_1px_at_33%_80%,white,transparent)] animate-pulse" />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 max-w-3xl w-full bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 md:p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_100px_rgba(255,100,150,0.1)] my-8"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-2 -right-2 text-2xl"
            >
              ❤️
            </motion.div>

            {/* کێک */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl md:text-7xl mb-5 inline-block"
            >
              🎂
            </motion.div>

            {/* ناونیشان */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-4xl font-bold text-[#ff6b9d] mb-6 leading-relaxed drop-shadow-[0_0_20px_rgba(255,107,157,0.6)]"
            >
              ڕۆژی لەدایکبوونت پیرۆز بێت
            </motion.h1>

            {/* ناوی خۆشەویست */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              className="text-3xl md:text-5xl font-bold text-[#ffd93d] mb-8 drop-shadow-[0_0_25px_rgba(255,217,61,0.7)] inline-block"
            >
              {lovedOne}
            </motion.div>

            {/* ⏱️ کاتژمێری خۆشەویستی */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="my-6 py-5 px-4 bg-black/20 rounded-2xl border border-[#ff6b9d]/30"
            >
              <div className="text-[#ffd93d] text-sm md:text-base mb-3 font-bold">
                💞 کاتژمێری خۆشەویستی ئێمە 💞
              </div>
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {[
                  { value: elapsed.days, label: "ڕۆژ" },
                  { value: elapsed.hours, label: "کاتژمێر" },
                  { value: elapsed.minutes, label: "خولەک" },
                  { value: elapsed.seconds, label: "چرکە" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-[#ff6b9d]/20 to-[#ffd93d]/20 rounded-xl py-3 border border-white/10"
                  >
                    <div className="text-xl md:text-3xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="text-xs md:text-sm text-[#ff6b9d] font-bold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-white/70 text-xs md:text-sm mt-3">
                پێکەوە لەم ڕێگایەدا 🥹❤️
              </div>
            </motion.div>

            {/* نامەکانی سەرەکی */}
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-white text-base md:text-lg leading-loose mb-6 text-right"
            >
              ئەمڕۆ ڕۆژێکی تایبەتە، نەک تەنها لەبەر ئەوەی ڕۆژی
              لەدایکبوونتە، بەڵکو لەبەر ئەوەی ڕۆژی هاتنت بۆ ژیانی من
              جیهانێکی تەواو گۆڕی. تۆ ژیانی منیت، هەناسەی منیت،
              ڕوحمیت، گیانمیت، و هۆکاری زەردەخەنەکەمیت. ❤️
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-[#ff6b9d] font-bold text-base md:text-lg leading-loose mb-6 text-right"
            >
              بەقوربانی یەک چرکە و یەک دەقەی هەناسەکانی بم. ڕوحم بە
              فیدای بێ، نەک تەنها ئەمڕۆ، بەڵکو هەموو ڕۆژێک. 💋
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              className="text-white text-base md:text-lg leading-loose mb-6 text-right"
            >
              هیوادارم ئەم ساڵ بۆ تۆ ساڵێکی پڕ لە خۆشی، سەرکەوتن، و
              تەندروستی بێت. و هیوادارم منیش بتوانم هۆکاری
              زەردەخەنەکەت بم. تۆ جوانترین گوڵی ژیانمی، مانگی
              شەوانی من، و ڕۆشنایی هەموو ڕۆژەکانمیت. 🥹🤍
            </motion.p>

            {/* دڵەکان */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-3xl md:text-4xl my-8 tracking-widest"
            >
              {["❤️", "💋", "🤍", "💋", "❤️"].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="inline-block mx-2"
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>

            {/* دوگمەی نامەی دووەم */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSecondLetter(!showSecondLetter)}
              className="my-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ffd93d] text-white font-bold text-base md:text-lg shadow-[0_10px_30px_rgba(255,107,157,0.5)] border-none cursor-pointer"
            >
              {showSecondLetter ? "💌 داخستنی نامە" : "💌 کرتە بکە بۆ نامەیەکی تایبەت"}
            </motion.button>

            {/* نامەی دووەم */}
            <AnimatePresence>
              {showSecondLetter && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.9 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-[#ff6b9d]/20 to-[#ffd93d]/20 rounded-2xl p-5 md:p-7 my-4 border border-[#ff6b9d]/40 text-right">
                    <div className="text-[#ffd93d] text-lg md:text-xl font-bold mb-4 text-center">
                      💌 نامەیەکی تایبەت بۆ تۆ 💌
                    </div>
                    <p className="text-white text-sm md:text-base leading-loose mb-3">
                      {lovedOne} خۆشەویستم، 🥹
                    </p>
                    <p className="text-white text-sm md:text-base leading-loose mb-3">
                      تۆ جوانترین گوڵی ژیانمی، مانگی شەوانی من، و
                      ڕۆشنایی هەموو ڕۆژەکانمیت. هەر کاتێک چاوت
                      دەبینم، دڵم وەک دەریایەک پڕ لە هەست و سۆز و
                      خۆشەویستی دەبێت. 🫀
                    </p>
                    <p className="text-white text-sm md:text-base leading-loose mb-3">
                      دەنگت خۆشترین و ئارامترین دەنگی ژیانمە. کاتێک
                      دەتسەڵێیت، دڵم وەک دارێک دەلەرزێت. چاوەکانت
                      قووڵترین دەریای ئەڤینن کە تێیدا ون بووم. ❣️
                    </p>
                    <p className="text-[#ff6b9d] font-bold text-sm md:text-base leading-loose mb-3">
                      بەقوربانی چرکە بە چرکەی لێدانەکانی دڵم بیت.
                      ڕوحم بە فیدای بێ، هەمیشە و بێ کۆتایی. 💋
                    </p>
                    <p className="text-white text-sm md:text-base leading-loose mb-3">
                      دەمەوێت بزانیت کە هەمیشە لە ناخی دڵمەوە
                      خۆشم دەوێت. ئەگەر هەموو جیهانم بدایە،
                      دەستم بە یەک چرکەی لەگەڵت نەدەدا. تۆ ژیانمی،
                      تۆ هەناسەمی، تۆ هەموو شتێکمی. 🤍
                    </p>
                    <p className="text-[#ffd93d] text-center font-bold text-base md:text-lg mt-5">
                      خۆشمدەوێی، هەمیشە و بێ کۆتایی ❤️
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* دوگمەی سورپرایزی کۆتایی */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSurprise(!showSurprise)}
              className="my-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#ffd93d] to-[#ff6b9d] text-white font-bold text-base md:text-lg shadow-[0_10px_30px_rgba(255,217,61,0.5)] border-none cursor-pointer"
            >
              {showSurprise ? "🎁 داخستنی سورپرایز" : "🎁 سورپرایزی کۆتایی"}
            </motion.button>

            {/* سورپرایزی کۆتایی */}
            <AnimatePresence>
              {showSurprise && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="my-6 py-7 px-5 bg-gradient-to-br from-[#ffd93d]/30 via-[#ff6b9d]/30 to-[#ffd93d]/30 rounded-3xl border-2 border-[#ffd93d]/60 relative overflow-hidden"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-5xl md:text-6xl mb-4"
                  >
                    💍
                  </motion.div>
                  <div className="text-[#ffd93d] text-xl md:text-2xl font-bold mb-4">
                    سورپرایزی تایبەت بۆ تۆ! 👑
                  </div>
                  <p className="text-white text-base md:text-lg leading-loose mb-3">
                    {lovedOne}، دەمەوێت لەم ڕۆژەدا شتێکی تایبەتت پێ بڵێم:
                    🫀
                  </p>
                  <p className="text-white text-base md:text-lg leading-loose mb-3">
                    تۆ تەنها خۆشەویستیم نیت، بەڵکو تۆ ژیانمیت،
                    ڕۆحمیت، گیانمیت، و هەموو شتێکمیت. هەر کاتێک بە
                    دەوروبەرم دەبیت، هەست بە ئارامییەکی قووڵ
                    دەکەم کە هەرگیز لە شوێنێکی تر نەم بینیوە. ❣️
                  </p>
                  <p className="text-[#ff6b9d] font-bold text-base md:text-lg leading-loose mb-3">
                    دەمەوێت هەمیشە لەگەڵت بم، لە خۆشی و ناخۆشیدا،
                    لە تەندروستی و نەخۆشیدا، لە هەموو ساتەکانی
                    ژیانمدا. دەمەوێت پیر لەگەڵت بم و
                    هەرگیز جیا نەبینەوە. 🔗
                  </p>
                  <p className="text-[#ffd93d] text-center font-bold text-lg md:text-xl mt-5">
                    خۆشمدەوێی بێ سنوور، بێ کۆتایی، بێ مەرج ❤️‍🔥
                  </p>
                  <div className="text-3xl md:text-4xl mt-4 tracking-widest">
                    👑 🫀 ♾️ 🌎 💍 ❤️‍🔥
                  </div>
                  <div className="text-white text-center text-xs md:text-sm mt-4 italic">
                    "تۆ ژیانمی، تۆ هەناسەمی، تۆ هەموو شتێکمی" 🤍
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* واژوو */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              className="text-[#ffd93d] text-lg md:text-xl font-bold mt-8 pt-6 border-t border-white/20 leading-relaxed"
            >
              هەمیشە لەگەڵت بم،
              <br />
              {yourName} 💍
            </motion.div>

            {/* 🔄 دوگمەی گەڕانەوە بۆ سەرەتا */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={backToIntro}
              className="mt-6 mb-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-sm md:text-base shadow-[0_10px_30px_rgba(255,255,255,0.1)] border border-white/30 cursor-pointer hover:bg-white/20 transition-all"
            >
              🔄 گەڕانەوە بۆ سەرەتا
            </motion.button>
          </motion.div>

          {/* دوگمەی دڵ */}
          <motion.button
            onClick={createHeart}
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 left-8 w-16 h-16 rounded-full bg-[#ff6b9d]/90 text-white text-3xl shadow-[0_10px_30px_rgba(255,107,157,0.5)] z-20 flex items-center justify-center cursor-pointer border-none"
          >
            ❤️
          </motion.button>

          {/* دڵی فڕیو */}
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              animate={{
                opacity: 0,
                y: -windowSize.height,
                scale: 0.3,
                rotate: 360,
              }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="fixed text-3xl pointer-events-none z-10"
              style={{ left: `${heart.left}vw`, bottom: "80px" }}
            >
              {heart.emoji}
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
};

export default BirthdayCard;