import { motion } from "framer-motion"
import { ProfileSection } from "@/components/ProfileSection"
import { LinkCard } from "@/components/LinkCard"
import { SocialFooter } from "@/components/SocialFooter"
import { UtensilsCrossed, Phone, MapPin, Clock, Instagram, Send } from "lucide-react"

const links = [
  {
    title: "Димсамы",
    description: "Классические и авторские корзиночки",
    href: "#dimsums",
    icon: UtensilsCrossed,
  },
  {
    title: "Лапша",
    description: "Вок-лапша и бульоны",
    href: "#noodles",
    icon: UtensilsCrossed,
  },
  {
    title: "Рис и закуски",
    description: "Жареный рис, спринг-роллы, сатэ",
    href: "#rice",
    icon: UtensilsCrossed,
  },
  {
    title: "Супы",
    description: "Том ям, фо бо, мисо",
    href: "#soups",
    icon: UtensilsCrossed,
  },
  {
    title: "Напитки",
    description: "Чай, свежевыжатые, матча-лatte",
    href: "#drinks",
    icon: UtensilsCrossed,
  },
  {
    title: "Позвонить нам",
    description: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
    icon: Phone,
  },
  {
    title: "Наш адрес",
    description: "ул. Бамбуковая, 8 · Открыты 12:00–23:00",
    href: "#contacts",
    icon: MapPin,
  },
]

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Phone, href: "tel:+79991234567", label: "Телефон" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 25,
    },
  },
}

export function LinkBioPage() {
  return (
    <main className="relative min-h-screen px-6 py-10 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0" style={{ background: "#1F1F1F" }} />

      {/* Animated gradient orbs — бордо */}
      <motion.div
        className="fixed z-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(158, 47, 54, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Золотой орб */}
      <motion.div
        className="fixed z-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(214, 179, 106, 0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "30%",
          right: "-20%",
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed z-0 w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(158, 47, 54, 0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
          bottom: "-5%",
          left: "20%",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-[420px] w-full flex flex-col flex-1 justify-between"
      >
        <motion.div variants={itemVariants} className="pt-2">
          <ProfileSection
            name="BAMBOO Dimsum"
            bio="Авторская китайская кухня · Димсамы, лапша и многое другое"
            imageUrl="/placeholder.jpg"
          />
        </motion.div>

        {/* Часы работы */}
        <motion.div variants={itemVariants} className="mt-4 mb-1">
          <div
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full mx-auto w-fit"
            style={{
              background: "rgba(214, 179, 106, 0.12)",
              border: "1px solid rgba(214, 179, 106, 0.3)",
            }}
          >
            <Clock className="h-3.5 w-3.5" style={{ color: "#D6B36A" }} strokeWidth={2} />
            <span className="text-xs font-medium" style={{ color: "#D6B36A" }}>
              Пн–Вс · 12:00 – 23:00
            </span>
          </div>
        </motion.div>

        <motion.div className="space-y-3 py-6" variants={containerVariants}>
          {links.map((link) => (
            <motion.div key={link.title} variants={itemVariants}>
              <LinkCard {...link} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="pb-2">
          <SocialFooter socials={socials} copyright="2025 BAMBOO Dimsum" />
        </motion.div>
      </motion.div>
    </main>
  )
}
