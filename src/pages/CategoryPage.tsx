import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Flame } from "lucide-react"
import { getCategoryBySlug } from "@/data/menu"

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
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = getCategoryBySlug(slug || "")

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen" style={{ background: "#1F1F1F" }}>
        <p className="text-lg mb-4" style={{ color: "rgba(247,243,234,0.5)" }}>Категория не найдена</p>
        <Link
          to="/menu"
          className="px-6 py-3 rounded-xl text-sm font-semibold"
          style={{ background: "#9E2F36", color: "#fff" }}
        >
          ← Назад к меню
        </Link>
      </div>
    )
  }

  return (
    <div style={{ background: "#1F1F1F", minHeight: "100vh" }}>
      {/* Hero категории */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={catImages[category.slug]}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(31,31,31,0.3) 0%, rgba(31,31,31,1) 100%)" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 max-w-6xl mx-auto w-full left-0 right-0">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm mb-4 transition-opacity hover:opacity-70"
            style={{ color: "rgba(214,179,106,0.7)" }}
          >
            <ArrowLeft size={16} />
            Назад к меню
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{category.emoji}</span>
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold"
                style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}
              >
                {category.name}
              </h1>
              <p className="text-sm mt-1" style={{ color: "rgba(214,179,106,0.7)" }}>
                {category.nameEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-base mb-10"
          style={{ color: "rgba(247,243,234,0.45)", maxWidth: 560 }}
        >
          {category.description}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i}
              className="rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {dish.popular && (
                <div
                  className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(158,47,54,0.3)", color: "#D6B36A", border: "1px solid rgba(158,47,54,0.4)" }}
                >
                  Хит
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {dish.name}
                  </h3>
                  {dish.spicy && <Flame size={14} style={{ color: "#9E2F36", flexShrink: 0 }} />}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(247,243,234,0.5)" }}>
                  {dish.description}
                </p>
              </div>

              <div className="mt-auto flex items-end justify-between pt-2">
                {dish.weight && (
                  <span className="text-xs" style={{ color: "rgba(247,243,234,0.3)" }}>{dish.weight}</span>
                )}
                <span
                  className="text-xl font-bold ml-auto"
                  style={{ color: "#D6B36A", fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {dish.price} ₽
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "rgba(214,179,106,0.1)", color: "#D6B36A", border: "1px solid rgba(214,179,106,0.25)" }}
          >
            <ArrowLeft size={16} />
            Все категории
          </Link>
        </div>
      </div>
    </div>
  )
}
