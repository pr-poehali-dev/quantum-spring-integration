import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const RESTAURANT_IMG = "https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/9518d13c-d6e2-4550-9f5c-573143879ad9.jpg"
const DIMSUMS_IMG = "https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/ff9c59d2-e888-4a79-8723-dda49a09e1d3.jpg"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

const values = [
  { emoji: "🥟", title: "Ручная работа", desc: "Каждый димсам лепится вручную нашими мастерами" },
  { emoji: "🌿", title: "Свежие ингредиенты", desc: "Продукты от проверенных поставщиков, доставка ежедневно" },
  { emoji: "🎋", title: "Традиции", desc: "Рецепты, вдохновлённые классической кантонской кухней" },
  { emoji: "✨", title: "Атмосфера", desc: "Уютное пространство для любой встречи — от деловой до семейной" },
]

export default function AboutPage() {
  return (
    <div style={{ background: "#1F1F1F", minHeight: "100vh" }}>
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={RESTAURANT_IMG}
          alt="Ресторан BAMBOO"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(31,31,31,0.2) 0%, rgba(31,31,31,1) 100%)" }}
        />
        <div className="absolute inset-0 flex items-end justify-center pb-12 px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D6B36A" }}>Наша история</p>
            <h1 className="text-5xl md:text-6xl font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
              О ресторане
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        {/* Текст */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
              Мы создаём больше, чем просто еду
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(247,243,234,0.55)" }}>
              BAMBOO Dimsum открылся с простой идеей: показать, каким может быть настоящий
              dim sum — живой, ароматный, сделанный с душой. Мы изучили сотни рецептов,
              работали с мастерами из Гонконга и Гуанчжоу.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(247,243,234,0.4)" }}>
              Результат — меню, где каждое блюдо имеет историю, а каждый визит становится
              маленьким путешествием в Азию.
            </p>
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
            <img src={DIMSUMS_IMG} alt="Димсамы" className="w-full h-full object-cover" style={{ filter: "brightness(0.8)" }} />
          </motion.div>
        </div>

        {/* Ценности */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
            Наши принципы
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="p-5 rounded-2xl text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-3xl mb-3">{v.emoji}</div>
              <h3 className="text-base font-bold mb-2" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
                {v.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(247,243,234,0.4)" }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block px-10 py-4 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#9E2F36", color: "#fff" }}
          >
            Смотреть меню
          </Link>
        </div>
      </div>
    </div>
  )
}
