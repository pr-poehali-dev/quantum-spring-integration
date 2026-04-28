import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { categories } from "@/data/menu"

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
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
}

export default function MenuPage() {
  return (
    <div style={{ background: "#1F1F1F", minHeight: "100vh" }}>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        <motion.div className="text-center mb-14" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D6B36A" }}>BAMBOO Dimsum</p>
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>
            Меню
          </h1>
          <p className="mt-4 text-base" style={{ color: "rgba(247,243,234,0.45)" }}>
            Выберите категорию, чтобы посмотреть блюда
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i}
            >
              <Link
                to={`/menu/${cat.slug}`}
                className="group relative block rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/2" }}
              >
                <img
                  src={catImages[cat.slug]}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  style={{ filter: "brightness(0.45)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(31,31,31,0.97) 0%, rgba(31,31,31,0.2) 60%)" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-3xl mb-2">{cat.emoji}</span>
                  <h2
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {cat.name}
                  </h2>
                  <p className="text-xs line-clamp-2 mb-3" style={{ color: "rgba(214,179,106,0.7)" }}>
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "rgba(247,243,234,0.4)" }}>
                      {cat.dishes.length} блюд
                    </span>
                    <span
                      className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full transition-all duration-300"
                      style={{
                        background: "rgba(158,47,54,0.25)",
                        color: "#D6B36A",
                        border: "1px solid rgba(158,47,54,0.4)",
                      }}
                    >
                      Смотреть →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
