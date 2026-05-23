import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export const EVENT_DATE = new Date("2026-07-18T19:00:00+04:00");

export const Route = createFileRoute("/countdown")({
  component: CountdownPage,
});

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/20 to-transparent blur-xl" />
        <div className="relative rounded-2xl border border-gold/30 bg-card/60 backdrop-blur-md px-6 py-6 md:px-10 md:py-8 min-w-[90px] md:min-w-[130px]">
          <motion.div
            key={value}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl gold-text font-light tabular-nums text-center"
          >
            {String(value).padStart(2, "0")}
          </motion.div>
        </div>
      </div>
      <span className="mt-3 text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function CountdownPage() {
  const navigate = useNavigate();
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm uppercase tracking-[0.5em] text-gold-soft/80">
            Xına gecəsinə qalan vaxt
          </p>
          <h1 className="font-script text-5xl md:text-7xl gold-text mt-4">
            Aysu
          </h1>
          <div className="ornate-divider my-6"><span>✦</span></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <Unit value={days} label="Gün" />
          <Unit value={hours} label="Saat" />
          <Unit value={minutes} label="Dəqiqə" />
          <Unit value={seconds} label="Saniyə" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate({ to: "/invitation" })}
          className="mt-16 rounded-full border border-gold/50 bg-gradient-to-r from-gold to-gold-soft px-10 py-3 text-emerald-deep font-medium tracking-[0.3em] uppercase text-sm"
        >
          Dəvətnaməni aç
        </motion.button>
      </div>
    </main>
  );
}
