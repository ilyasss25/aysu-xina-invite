import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setCurtainOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* Curtains */}
      <AnimatePresence>
        {!curtainOpen && (
          <>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 left-0 z-30 h-full w-1/2"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.12 0.05 165) 0%, oklch(0.22 0.07 165) 70%, oklch(0.3 0.08 165) 100%)",
                boxShadow: "inset -40px 0 80px -20px rgba(0,0,0,0.6)",
              }}
            >
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 right-0 z-30 h-full w-1/2"
              style={{
                background:
                  "linear-gradient(-90deg, oklch(0.12 0.05 165) 0%, oklch(0.22 0.07 165) 70%, oklch(0.3 0.08 165) 100%)",
                boxShadow: "inset 40px 0 80px -20px rgba(0,0,0,0.6)",
              }}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
            </motion.div>
            {/* Pelmet */}
            <motion.div
              exit={{ y: "-100%" }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="absolute top-0 left-0 right-0 z-40 h-16 bg-gradient-to-b from-emerald-darker to-transparent"
            />
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: curtainOpen ? 1 : 0, y: curtainOpen ? 0 : 30 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="max-w-2xl"
        >
          <div className="ornate-divider mb-6">
            <span className="text-xl">✦</span>
          </div>
          <p className="text-sm uppercase tracking-[0.5em] text-gold-soft/80">
            Dəvətnamə
          </p>
          <h1 className="font-script text-7xl md:text-9xl gold-text mt-4 leading-none">
            Aysu
          </h1>
          <div className="ornate-divider my-6">
            <span className="text-xl">۞</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gold-soft tracking-[0.3em] uppercase">
            Xına Gecəsi
          </h2>
          <p className="mt-4 text-muted-foreground italic">
            Ən şirin anlarımı sizinlə bölüşmək istərdim
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px -10px oklch(0.75 0.15 75 / 0.6)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate({ to: "/countdown" })}
            className="mt-12 group relative overflow-hidden rounded-full border border-gold/50 bg-gradient-to-r from-gold to-gold-soft px-12 py-4 text-emerald-deep font-medium tracking-[0.3em] uppercase text-sm transition-all"
          >
            <span className="relative z-10">Dəvətə Bax</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating petals */}
      {curtainOpen && (
        <div className="pointer-events-none absolute inset-0 z-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, x: Math.random() * 100 + "vw", opacity: 0 }}
              animate={{
                y: "110vh",
                opacity: [0, 1, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute text-2xl"
              style={{ color: "oklch(0.7 0.18 25 / 0.6)" }}
            >
              ❀
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
}
