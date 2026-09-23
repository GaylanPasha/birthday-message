import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Page = {
  id: number;
  theme: "cover" | "normal" | "final";
  title?: string;
  content?: React.ReactNode;
  footer?: string;
};

const LoveBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoveNames, setShowLoveNames] = useState(false);
  const [hearts, setHearts] = useState<
    { id: number; emoji: string }[]
  >([]);

  // ⚠️ لێرە ناوەکان بگۆڕە
  const lovedOne = "ڕوویا";
  const yourName = "گەیلان";

  // ═══════════════════════════════════════
  // 💕 ناوەکانی ئەڤینی
  // ═══════════════════════════════════════
  const loveNames = [
    "خۆشمدەوێی تاقانەکەی دڵم 🫀",
    "خۆشمدەوێی هەناسەکانم 💨",
    "خۆشمدەوێی خەزانی شیرینم 💎",
    "خۆشمدەوێی ڕۆحی شیرینم ✨",
    "خۆشمدەوێی دڵبەرەکەم 💖",
    "خۆشمدەوێی ئارامی ڕۆح و دڵم 🕊️",
    "خۆشمدەوێی ئەڤینی ئەبەدیم ♾️",
    "خۆشمدەوێی تاقانەکەی هەردوو دنیام 🌍",
    "خۆشمدەوێی وەک سووان 🦢",
    "خۆشمدەوێی ڕۆژی من ☀️",
    "خۆشمدەوێی پڕ بە دڵ 💝",
    "خۆشمدەوێی گیانەکەم 🌹",
    "خۆشمدەوێی مانگی شەوانم 🌙",
    "خۆشمدەوێی ئەستێرەی ژیانم ⭐",
    "خۆشمدەوێی جوانترین گوڵی ژیانم 🌸",
    "خۆشمدەوێی ماڵی دڵم 🏡",
    "خۆشمدەوێی تاجی سەرم 👑",
    "خۆشمدەوێی ژیانی من ❤️",
  ];

  // ═══════════════════════════════════════
  // 📖 لاپەڕەکانی کتێبەکە
  // ═══════════════════════════════════════
  const pages: Page[] = [
    {
      id: 0,
      theme: "cover",
    },
    {
      id: 1,
      theme: "normal",
      title: "تۆ چەندە باشیت لەگەڵم؟ 🫀",
      content: (
        <>
          <b className="text-rose-700">{lovedOne}ی شیرینم،</b> کاتێک بیر لە
          تۆ دەکەمەوە، ناخم پڕ دەبێت لە ئارامی. تۆ تەنها هاوسەری داهاتووم
          نیت، تۆ خەمخۆر و دڵنەوایی ڕۆحمی. قسە شیرینەکانت کە وەک هەنگوین
          وان و دڵەکەت ئارامم دەکاتەوە. ناز و مەکرە جوانت، دڵە پاک و
          میهرەبانەکەت هەمیشە هانم دەدەن کە قەت کۆڵ نەدەم. سوپاس بۆ خودا کە
          گوێگرێکی هێندە باشی بۆ خەمەکانم، هەمیشە هاوکارمی و ئەو وەفایەی
          پێت بەخشیووم گەورەترین سەرمایەی ژیانمە. چاوە جوانەکانت، لێوە
          سوورەکانت و ڕوومەتە شیرینەکانت باخچەی ژیانی منن. 🤍✨
        </>
      ),
      footer: "لاپەڕە ١",
    },
    {
      id: 2,
      theme: "normal",
      title: "بێ تۆیی چەندە سەختە! 🥺💔",
      content: (
        <>
          ئەو کاتانەی قسە ناکەین، یان تەنها یەک ڕۆژ دوور دەبین، من لەو
          چرکەساتانەدا هەزار جار دەمرم و زیندوو دەبمەوە! وەک دارێکی بێ
          گەڵام لێ دێت، بێهێز و بێتاقەت دەبم و هەمیشە دڵم لای تۆیە. کاتێک
          دەبینم کار دەکەی و ماندوو دەبیت، لێرەوە دڵم بۆت دەسوتێت و شێت
          دەبم. تەنانەت ئەگەر بزانم شەوێک نەخەوتووی، مەحاڵە من بخەوم؛ بە
          ئاگا دەمێنمەوە تا تۆ بە سەلامەتی دەخەویت. کچێ من پێش ئەوەی لە
          دەستت بدەم قادرت دەزانم، من ناخۆشی تۆ بە چاوی خۆم نەبینم
          یاڕەببی! تۆ ئەو فریشتە چاوەشیت کە هەمیشە بە عەشقەوە لە
          ماڵەکەماندا چاوەڕێی منی. 🥰
        </>
      ),
      footer: "لاپەڕە ٢",
    },
    {
      id: 3,
      theme: "normal",
      title: "بەڵێنی پیاوانە تا قیامەت 💍",
      content: (
        <>
          {lovedOne}، من لێرەوە بەڵێنت پێدەدەم تا ئەو ڕۆژەی خوای گەورە ئەمر
          دەکات و دەمانخاتە ناو بەهەشتەکەی، لەگەڵت بمێنمەوە. قەت و قەت
          خیانەتت لێ ناکەم، فێڵت لێ ناکەم، سەیری کەسی تر ناکەم و پشتت تێ
          ناکەم. ئەگەر لەسەر شتێکیش لێت زویر بم، هەرگیز جێت ناهێڵم. من
          دەبمە هەموو کەس و کارت، هەمیشە دڵنەواییت دەکەم و لە ئازارەکانتدا
          لە پێش خۆتەوە دەبمە قەڵا. تۆ تەنها ماڵی منی و تا ئەبەد خۆشم
          دەوێی! 💋💍
        </>
      ),
      footer: "لاپەڕە ٣",
    },
    {
      id: 4,
      theme: "final",
      title: "داهاتووی هاوبەشمان 🏡✨",
      footer: `هی تۆ: ${yourName}`,
    },
  ];

  // 🎈 FAB - دروستکردنی دڵ
  const createHeart = () => {
    const newHearts = [...Array(15)].map((_, i) => ({
      id: Date.now() + i,
      emoji: ["❤️", "💋", "🤍", "💖", "💕", "🌹", "💍", "🫀", "❣️"][
        Math.floor(Math.random() * 9)
      ],
    }));
    setHearts((prev) => [...prev, ...newHearts]);
    setTimeout(() => {
      setHearts((prev) => prev.slice(newHearts.length));
    }, 3500);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const currentData = pages[currentPage];

  return (
    <div
      className="min-h-screen w-full relative flex justify-center items-center p-3 md:p-5 overflow-hidden bg-[#0a0a1a]"
      style={{
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* 🌌 پاشبنەی شەوی ئەستێرەدار */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#0f0a1f]" />

      {/* 🌟 ئەستێرە درەوشاوەکان */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* 🌙 هەڵمەت و ڕووناکی */}
      <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-pink-500/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 bg-purple-500/20 rounded-full blur-[80px]" />

      {/* 📖 کتێبەکە */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-md z-10"
        style={{ perspective: "1500px" }}
      >
        {/* سێبەری کتێب */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-3xl blur-2xl transform translate-y-4" />

        <div className="relative w-full h-[620px] rounded-3xl p-1 bg-gradient-to-br from-[#ffd93d] via-[#ff6b9d] to-[#c026d3] shadow-[0_30px_80px_rgba(192,38,211,0.4)]">
          {/* ناوەوەی کتێب */}
          <div className="relative w-full h-full rounded-[22px] bg-gradient-to-br from-[#1e1b4b] to-[#0f0a1f] p-4 flex flex-col overflow-hidden">
            {/* ڕازاندنەوەی گۆشە */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#ffd93d]/60 rounded-tl-lg" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#ffd93d]/60 rounded-tr-lg" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#ffd93d]/60 rounded-bl-lg" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#ffd93d]/60 rounded-br-lg" />

            {/* ناوەڕۆکی لاپەڕەکان */}
            <div className="relative w-full h-[500px] flex-1">
              <AnimatePresence mode="wait">
                {currentData.theme === "cover" ? (
                  // 🎨 لاپەڕەی بەرگ
                  <motion.div
                    key="cover"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-center items-center text-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #db2777 0%, #9d174d 50%, #6b0f37 100%)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="absolute inset-4 border-2 border-[#ffd93d]/40 rounded-xl pointer-events-none" />

                    <div className="absolute top-6 left-6 text-2xl opacity-60">🌹</div>
                    <div className="absolute top-6 right-6 text-2xl opacity-60">🌹</div>
                    <div className="absolute bottom-6 left-6 text-2xl opacity-60">🌹</div>
                    <div className="absolute bottom-6 right-6 text-2xl opacity-60">🌹</div>

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                      className="text-5xl mb-4"
                    >
                      📖
                    </motion.div>

                    <div className="text-2xl md:text-3xl font-bold text-[#ffd93d] mb-4 drop-shadow-[0_2px_10px_rgba(255,217,61,0.5)]">
                      دەفتەری عەشقی پاکی ئێمە
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-6xl my-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                    >
                      ❤️🔐
                    </motion.div>

                    <div className="text-lg md:text-xl font-light text-white mb-4 drop-shadow-lg">
                      بۆ تاقانەکەی دڵم: {lovedOne} خان
                    </div>

                    <motion.div
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs bg-black/30 backdrop-blur-sm px-5 py-2 rounded-full text-[#ffd93d] border border-[#ffd93d]/30"
                    >
                      ✨ بۆ بینینی لاپەڕەکان، دوگمەکانی خوارەوە داگرە ✨
                    </motion.div>
                  </motion.div>
                ) : (
                  // 📄 لاپەڕەکانی ناوەوە
                  <motion.div
                    key={currentData.id}
                    initial={{ opacity: 0, x: 100, rotateY: -20 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -100, rotateY: 20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`absolute inset-0 rounded-2xl p-5 flex flex-col justify-between overflow-hidden ${
                      currentData.theme === "final"
                        ? "bg-gradient-to-br from-[#fef3c7] via-[#fce7f3] to-[#fbcfe8]"
                        : "bg-gradient-to-br from-[#fefefe] via-[#fdf2f8] to-[#fce7f3]"
                    }`}
                    style={{
                      boxShadow: "inset 0 0 60px rgba(219, 39, 119, 0.1)",
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    }}
                  >
                    <div className="absolute top-2 right-2 text-lg opacity-30">
                      🌸
                    </div>
                    <div className="absolute bottom-2 left-2 text-lg opacity-30">
                      🌸
                    </div>

                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${
                        currentData.theme === "final"
                          ? "bg-gradient-to-r from-[#db2777] via-[#9d174d] to-[#db2777]"
                          : "bg-gradient-to-r from-[#db2777] via-[#ffd93d] to-[#db2777]"
                      }`}
                    />

                    {/* ناونیشان */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className={`text-base md:text-lg font-bold text-center pb-3 mb-3 border-b-2 border-dashed ${
                        currentData.theme === "final"
                          ? "text-[#9d174d] border-[#db2777]/50"
                          : "text-[#9d174d] border-[#f472b6]/50"
                      }`}
                    >
                      {currentData.title}
                    </motion.div>

                    {/* ناوەڕۆک */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-sm md:text-base leading-loose text-justify flex-grow overflow-y-auto px-1 text-[#1e293b]"
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#db2777 #fce7f3",
                      }}
                    >
                      {currentData.theme === "final" ? (
                        <>
                          <span className="block mb-3">
                            ئەم شوێنە تایبەتەم هێشتووەتەوە بۆ داهاتووی
                            نزیکمان. ئەو ڕۆژەی کە بە حەڵاڵی لەژێر یەک
                            سەقفدا کۆدەبینەوە و لێرەدا وێنەیەکی هاوبەشی
                            خێزانیی خۆمان تێدا جێگیر دەکەین. فریشتەکەم،
                            چاوەڕێی ئەو ڕۆژەم بە تاقەتەوە...
                          </span>

                          {/* چوارچێوەی وێنەی داهاتوو */}
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative border-2 border-dashed border-[#db2777] h-32 flex justify-center items-center rounded-xl bg-gradient-to-br from-[#fdf2f8] to-[#fce7f3] text-[#db2777] text-sm text-center p-3 my-4 font-bold overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(219,39,119,0.1),transparent)]" />
                            <div className="relative z-10 flex flex-col items-center">
                              <span className="text-3xl mb-2">📸</span>
                              <span>
                                لێرەدا وێنەی داهاتووی حەڵاڵمان دادەنێین
                                ئینشەڵا 🤍💍
                              </span>
                            </div>
                          </motion.div>

                          {/* 💕 دوگمەی ناوەکانی ئەڤینی لە لای چەپ */}
                          <motion.button
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowLoveNames(!showLoveNames)}
                            className="mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-[#db2777] via-[#ff6b9d] to-[#ffd93d] text-white font-bold text-sm md:text-base shadow-[0_10px_30px_rgba(219,39,119,0.5)] border-2 border-[#ffd93d]/40 cursor-pointer flex items-center gap-2"
                          >
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              💖
                            </motion.span>
                            {showLoveNames
                              ? "داخستنی ناوەکان"
                              : "ناوەکانی خۆشەویستەکەم"}
                          </motion.button>

                          {/* 💕 ناوەکانی ئەڤینی */}
                          <AnimatePresence>
                            {showLoveNames && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.6 }}
                                className="overflow-hidden mt-4"
                              >
                                <div className="bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8] rounded-2xl p-4 border-2 border-[#db2777]/40 space-y-2">
                                  <div className="text-center text-[#9d174d] font-bold text-sm mb-3">
                                    ♾️💕
                                  </div>
                                  {loveNames.map((name, index) => (
                                    <motion.div
                                      key={index}
                                      initial={{
                                        opacity: 0,
                                        x: -50,
                                        scale: 0.8,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                      }}
                                      transition={{
                                        delay: index * 0.15,
                                        duration: 0.5,
                                        type: "spring",
                                      }}
                                      whileHover={{
                                        scale: 1.05,
                                        x: 5,
                                      }}
                                      className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-[#db2777]/30 shadow-sm cursor-default"
                                    >
                                      <div className="text-[#9d174d] font-bold text-sm md:text-base text-right">
                                        {name}
                                      </div>
                                    </motion.div>
                                  ))}
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      delay: loveNames.length * 0.15,
                                      duration: 0.6,
                                    }}
                                    className="text-center text-[#9d174d] font-bold text-base mt-4 pt-3 border-t-2 border-dashed border-[#db2777]/40"
                                  >
                                    خۆشمدەوێی، هەمیشە و بێ کۆتایی ❤️
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-4 font-bold text-center text-sm md:text-base text-[#9d174d] bg-gradient-to-r from-transparent via-[#fce7f3] to-transparent p-3 rounded-lg"
                          >
                            هەمیشە خۆشم دەوێی تا سەر ئێسقان، شێتی تۆم{" "}
                            {lovedOne}ی من! 🫀🫂
                          </motion.div>
                        </>
                      ) : (
                        currentData.content
                      )}
                    </motion.div>

                    {/* فوتەر */}
                    {currentData.footer && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className={`text-xs text-center mt-3 font-bold pt-2 border-t ${
                          currentData.theme === "final"
                            ? "text-[#9d174d] border-[#db2777]/30"
                            : "text-[#64748b] border-[#db2777]/20"
                        }`}
                      >
                        {currentData.footer}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🎮 دوگمەکانی کۆنترۆل */}
            <div className="flex justify-between items-center w-full pt-3 gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`px-4 md:px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all border ${
                  currentPage === 0
                    ? "bg-[#475569]/40 opacity-40 cursor-not-allowed text-white/50 border-white/10"
                    : "bg-gradient-to-r from-[#db2777] to-[#9d174d] text-white cursor-pointer border-[#ffd93d]/30 shadow-[0_5px_20px_rgba(219,39,119,0.5)] hover:shadow-[0_8px_30px_rgba(219,39,119,0.7)]"
                }`}
              >
                ◀ گەڕانەوە
              </motion.button>

              <motion.span
                key={currentPage}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-sm md:text-base font-bold px-3 py-1 rounded-full bg-[#ffd93d]/10 text-[#ffd93d] border border-[#ffd93d]/30"
              >
                {currentPage + 1} / {pages.length}
              </motion.span>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className={`px-4 md:px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all border ${
                  currentPage === pages.length - 1
                    ? "bg-[#475569]/40 opacity-40 cursor-not-allowed text-white/50 border-white/10"
                    : "bg-gradient-to-r from-[#db2777] to-[#9d174d] text-white cursor-pointer border-[#ffd93d]/30 shadow-[0_5px_20px_rgba(219,39,119,0.5)] hover:shadow-[0_8px_30px_rgba(219,39,119,0.7)]"
                }`}
              >
                {currentPage === pages.length - 1 ? "کۆتایی 🌸" : "دواتر ▶"}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════ */}
      {/* 🎈 FAB - دوگمەی دڵ لە لای ڕاست */}
      {/* ═══════════════════════════════════════ */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={createHeart}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#db2777] text-white text-3xl shadow-[0_10px_40px_rgba(255,107,157,0.7),0_0_60px_rgba(219,39,119,0.5)] z-30 flex items-center justify-center cursor-pointer border-2 border-[#ffd93d]/50"
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️
        </motion.span>
      </motion.button>

      {/* 🎈 دڵی فڕیو لە FAB */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 1,
              scale: 0,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              opacity: 0,
              scale: [0, 1.5, 0.5],
              x: (Math.random() - 0.5) * 600,
              y: -500 - Math.random() * 300,
              rotate: Math.random() * 720 - 360,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="fixed bottom-16 right-16 text-3xl pointer-events-none z-20"
          >
            {heart.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LoveBook;