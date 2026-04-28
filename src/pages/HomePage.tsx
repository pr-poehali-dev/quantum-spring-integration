import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Phone, MapPin, Clock, ChevronRight, Instagram, Send } from "lucide-react"
import { categories } from "@/data/menu"

const RESTAURANT_IMG = "https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/9518d13c-d6e2-4550-9f5c-573143879ad9.jpg"

const popularDishes = [
  { name: "Har Gow", desc: "Паровые креветочные пельмени в прозрачном тесте", price: 490, category: "Димсамы" },
  { name: "Том Ям с креветкой", desc: "Тайский острый суп с лемонграссом и кокосовым молоком", price: 690, category: "Супы" },
  { name: "Dan Dan Mian", desc: "Острая лапша с фаршем, арахисом и кунжутной пастой", price: 620, category: "Лапша" },
  { name: "Фо Бо", desc: "Вьетнамский говяжий бульон с рисовой лапшой и зеленью", price: 640, category: "Супы" },
  { name: "Gyoza", desc: "Жареные пельмени с свининой и капустой", price: 440, category: "Закуски" },
  { name: "Матча Латте", desc: "Церемониальная матча с молоком", price: 380, category: "Напитки" },
]

const DIMSUMS_IMG = "https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/ff9c59d2-e888-4a79-8723-dda49a09e1d3.jpg"
const NOODLES_IMG = "https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/ee8d3ca3-c5ad-4c56-a9cc-f531b5de7bca.jpg"

const catImages: Record<string, string> = {
  dimsums: DIMSUMS_IMG,
  noodles: NOODLES_IMG,
  rice: DIMSUMS_IMG,
  soups: NOODLES_IMG,
  starters: DIMSUMS_IMG,
  drinks: NOODLES_IMG,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
}

export default function HomePage() {
  return (
    <div style={{ background: "#1F1F1F", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6 pt-16"
        style={{ overflow: "hidden" }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${RESTAURANT_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(to bottom, rgba(31,31,31,0.2) 0%, rgba(31,31,31,0.9) 100%)" }}
        />

        {/* Орбы */}
        <motion.div
          className="absolute z-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(158,47,54,0.2) 0%, transparent 70%)", filter: "blur(100px)", top: "10%", left: "-10%" }}
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute z-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(214,179,106,0.12) 0%, transparent 70%)", filter: "blur(80px)", bottom: "10%", right: "-10%" }}
          animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div className="relative z-10 max-w-2xl" initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#D6B36A" }}
          >
            Авторская китайская кухня
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-6xl md:text-8xl font-bold mb-4"
            style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.1em" }}
          >
            BAMBOO
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-xl md:text-2xl mb-2"
            style={{ color: "rgba(247,243,234,0.6)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Dimsum
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-sm mb-10"
            style={{ color: "rgba(247,243,234,0.45)" }}
          >
            Димсамы, лапша, супы и многое другое
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#9E2F36", color: "#fff" }}
            >
              Смотреть меню
            </Link>
            <a
              href="#contacts"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-opacity hover:opacity-80"
              style={{ background: "rgba(214,179,106,0.12)", color: "#D6B36A", border: "1px solid rgba(214,179,106,0.3)" }}
            >
              Контакты
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight size={20} style={{ color: "rgba(214,179,106,0.4)", transform: "rotate(90deg)" }} />
        </motion.div>
      </section>

      {/* Категории */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D6B36A" }}>Наше меню</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
            Категории блюд
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Link
                to={`/menu/${cat.slug}`}
                className="group relative block rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={catImages[cat.slug]}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "brightness(0.5)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(31,31,31,0.95) 0%, transparent 60%)" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-2xl mb-1">{cat.emoji}</span>
                  <h3 className="text-base md:text-lg font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
                    {cat.name}
                  </h3>
                  <p className="text-xs mt-1 line-clamp-1 hidden md:block" style={{ color: "rgba(214,179,106,0.7)" }}>
                    {cat.description}
                  </p>
                  <span
                    className="mt-2 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#D6B36A" }}
                  >
                    Смотреть →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Популярное */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D6B36A" }}>Хиты сезона</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
            Популярное
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span
                    className="text-[10px] tracking-widest uppercase font-medium"
                    style={{ color: "#D6B36A" }}
                  >
                    {dish.category}
                  </span>
                  <h3 className="text-lg font-bold mt-0.5" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
                    {dish.name}
                  </h3>
                </div>
                <span className="text-lg font-bold shrink-0" style={{ color: "#D6B36A", fontFamily: "'Cormorant Garamond', serif" }}>
                  {dish.price} ₽
                </span>
              </div>
              <p className="text-sm" style={{ color: "rgba(247,243,234,0.5)" }}>{dish.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* О ресторане */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#D6B36A" }}>О нас</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
              Вкус традиции<br />в современном городе
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(247,243,234,0.55)" }}>
              BAMBOO Dimsum — место, где древние рецепты встречаются с современной подачей.
              Мы готовим каждый димсам вручную, используем свежие ингредиенты и чтим традиции
              кантонской кухни.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(247,243,234,0.45)" }}>
              Приходите семьёй, с друзьями или коллегами — у нас найдётся место для каждого.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#D6B36A" }}
            >
              Узнать больше <ChevronRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={RESTAURANT_IMG}
              alt="Ресторан BAMBOO"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.8)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="max-w-6xl mx-auto px-6 py-10 pb-24">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D6B36A" }}>Мы ждём вас</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
            Контакты
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            {[
              { icon: MapPin, label: "Адрес", value: "ул. Бамбуковая, 8, Москва" },
              { icon: Phone, label: "Телефон", value: "+7 (999) 123-45-67" },
              { icon: Clock, label: "Режим работы", value: "Ежедневно 12:00 – 23:00" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(158,47,54,0.2)", border: "1px solid rgba(158,47,54,0.3)", color: "#D6B36A" }}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(214,179,106,0.5)" }}>{label}</p>
                  <p className="text-base font-medium" style={{ color: "#F7F3EA" }}>{value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <a
                href="tel:+79991234567"
                className="flex-1 py-3.5 rounded-xl text-center text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "#9E2F36", color: "#fff" }}
              >
                Позвонить
              </a>
              <a
                href="#"
                className="flex-1 py-3.5 rounded-xl text-center text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "rgba(214,179,106,0.12)", color: "#D6B36A", border: "1px solid rgba(214,179,106,0.25)" }}
              >
                В Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="rounded-2xl overflow-hidden"
            style={{ minHeight: 280, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755864&z=15&l=map"
              className="w-full h-full"
              style={{ minHeight: 280, border: 0, filter: "grayscale(0.5) brightness(0.7)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8"
        style={{ borderColor: "rgba(214,179,106,0.1)", background: "rgba(0,0,0,0.3)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold tracking-widest" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
            BAMBOO Dimsum
          </span>
          <div className="flex items-center gap-6">
            <Link to="/menu" className="text-sm" style={{ color: "rgba(247,243,234,0.4)" }}>Меню</Link>
            <Link to="/about" className="text-sm" style={{ color: "rgba(247,243,234,0.4)" }}>О нас</Link>
            <Link to="/contacts" className="text-sm" style={{ color: "rgba(247,243,234,0.4)" }}>Контакты</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" style={{ color: "rgba(214,179,106,0.5)" }} className="hover:opacity-80 transition-opacity">
              <Instagram size={18} />
            </a>
            <a href="#" style={{ color: "rgba(214,179,106,0.5)" }} className="hover:opacity-80 transition-opacity">
              <Send size={18} />
            </a>
          </div>
        </div>
        <p className="text-center mt-6 text-xs" style={{ color: "rgba(247,243,234,0.2)" }}>
          © 2025 BAMBOO Dimsum. Все права защищены.
        </p>
      </footer>
    </div>
  )
}
