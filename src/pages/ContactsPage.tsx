import { motion } from "framer-motion"
import { Phone, MapPin, Clock, Instagram, Send } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
}

export default function ContactsPage() {
  return (
    <div style={{ background: "#1F1F1F", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        <motion.div className="text-center mb-14" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D6B36A" }}>Мы ждём вас</p>
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
            Контакты
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="space-y-5"
          >
            {[
              { icon: MapPin, label: "Адрес", value: "ул. Бамбуковая, 8, Москва", sub: "м. Бамбуковая, 5 мин пешком" },
              { icon: Phone, label: "Телефон", value: "+7 (999) 123-45-67", sub: "Бронирование столиков" },
              { icon: Clock, label: "Режим работы", value: "Ежедневно 12:00 – 23:00", sub: "Последний заказ в 22:30" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(158,47,54,0.2)", border: "1px solid rgba(158,47,54,0.3)", color: "#D6B36A" }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "rgba(214,179,106,0.5)" }}>{label}</p>
                  <p className="text-base font-semibold" style={{ color: "#F7F3EA" }}>{value}</p>
                  {sub && <p className="text-xs mt-0.5" style={{ color: "rgba(247,243,234,0.35)" }}>{sub}</p>}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <a
                href="tel:+79991234567"
                className="flex-1 py-4 rounded-xl text-center text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "#9E2F36", color: "#fff" }}
              >
                Позвонить
              </a>
            </div>

            <div
              className="p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(214,179,106,0.5)" }}>Соцсети</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ background: "rgba(214,179,106,0.08)", color: "#D6B36A", border: "1px solid rgba(214,179,106,0.2)" }}
                >
                  <Instagram size={16} /> Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ background: "rgba(214,179,106,0.08)", color: "#D6B36A", border: "1px solid rgba(214,179,106,0.2)" }}
                >
                  <Send size={16} /> Telegram
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="rounded-2xl overflow-hidden"
            style={{ minHeight: 400, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <iframe
              title="Карта BAMBOO"
              src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755864&z=15&l=map"
              className="w-full h-full"
              style={{ minHeight: 400, border: 0, filter: "grayscale(0.5) brightness(0.65)" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
