import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowLeft } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import r1 from "@/assets/restaurant-1.jpg";
import r2 from "@/assets/restaurant-2.jpg";
import r3 from "@/assets/restaurant-3.jpg";

export const Route = createFileRoute("/invitation")({
  component: InvitationPage,
});

const VENUE = "Şəhriyar Saray Restoran";
const ADDRESS = "Heydər Əliyev pr. 152, Bakı";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Şəhriyar Saray Restoran Bakı");

function InvitationPage() {
  const photos = [r1, r2, r3];

  return (
    <main className="relative min-h-screen w-full bg-background overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Link
          to="/countdown"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" /> Geri
        </Link>

        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-gold-soft/80">
            Hörmətli qonaqlar
          </p>
          <h1 className="font-script text-6xl md:text-8xl gold-text mt-6">
            Aysu
          </h1>
          <div className="ornate-divider my-6"><span>۞</span></div>
          <h2 className="text-2xl md:text-3xl tracking-[0.3em] uppercase text-gold-soft font-light">
            Xına Gecəsi
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed italic">
            Həyatımın ən xüsusi gecəsində yanımda olmağınız mənim üçün böyük
            xoşbəxtlik olacaq. Sizi ailəm və yaxınlarımla birlikdə bu unudulmaz
            anı paylaşmağa dəvət edirəm.
          </p>
        </motion.section>

        {/* Detail cards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {[
            { icon: Calendar, label: "Tarix", value: "18 İyul, 2026", sub: "Şənbə günü" },
            { icon: Clock, label: "Saat", value: "19:00", sub: "Qonaq qəbulu" },
            { icon: MapPin, label: "Məkan", value: VENUE, sub: ADDRESS },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="group relative rounded-2xl border border-gold/20 bg-card/60 backdrop-blur-md p-8 text-center transition-all hover:border-gold/50 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mx-auto w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
                <p className="mt-2 text-xl text-foreground font-light">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Map button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/50 bg-gradient-to-r from-gold to-gold-soft px-10 py-4 text-emerald-deep font-medium tracking-[0.2em] uppercase text-sm transition-all hover:shadow-[0_20px_50px_-10px_oklch(0.75_0.15_75/0.6)]"
          >
            <MapPin className="h-5 w-5" />
            Xəritədə bax
          </a>
        </motion.div>

        {/* Gallery */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.5em] text-gold-soft/80">Məkan</p>
            <h3 className="font-script text-5xl gold-text mt-3">Şəhriyar Saray</h3>
            <div className="ornate-divider my-4"><span>✦</span></div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {photos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative overflow-hidden rounded-2xl border border-gold/20 aspect-[4/5] group"
              >
                <img
                  src={src}
                  alt={`Restoran ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Program */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.5em] text-gold-soft/80">Gecənin proqramı</p>
            <div className="ornate-divider my-4"><span>۞</span></div>
          </div>
          <div className="mx-auto max-w-2xl space-y-4">
            {[
              ["19:00", "Qonaqların qarşılanması"],
              ["19:45", "Gəlin gəlişi və xına mərasimi"],
              ["20:30", "Şam yeməyi"],
              ["21:30", "Musiqi, rəqs və əyləncə"],
              ["23:30", "Gecənin yekunu"],
            ].map(([time, text]) => (
              <div
                key={time}
                className="flex items-center gap-6 rounded-xl border border-gold/15 bg-card/40 backdrop-blur-sm px-6 py-4"
              >
                <span className="font-script text-3xl gold-text w-24">{time}</span>
                <span className="text-foreground/90">{text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="ornate-divider mb-6"><span>✦</span></div>
          <p className="font-script text-3xl gold-text">Sizi gözləyirik</p>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Aysu • 18.07.2026
          </p>
        </footer>
      </div>
    </main>
  );
}
