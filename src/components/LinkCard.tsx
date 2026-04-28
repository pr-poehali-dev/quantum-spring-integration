import { motion } from "framer-motion"
import { ChevronRight, type LucideIcon } from "lucide-react"

interface LinkCardProps {
  title: string
  description?: string
  href: string
  icon: LucideIcon
}

export function LinkCard({ title, description, href, icon: Icon }: LinkCardProps) {
  return (
    <motion.a
      href={href}
      className="group relative flex w-full items-center gap-4 rounded-[16px] px-4 py-4 overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(40px) saturate(160%)",
        WebkitBackdropFilter: "blur(40px) saturate(160%)",
        boxShadow: `
          inset 0 1px 1px rgba(255, 255, 255, 0.1),
          0 0 0 1px rgba(255, 255, 255, 0.08),
          0 4px 16px rgba(0, 0, 0, 0.3)
        `,
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      whileHover={{
        scale: 1.02,
        y: -3,
        boxShadow: `
          inset 0 1px 1px rgba(255, 255, 255, 0.15),
          0 0 0 1px rgba(214, 179, 106, 0.3),
          0 8px 32px rgba(0, 0, 0, 0.4),
          0 0 20px rgba(158, 47, 54, 0.15)
        `,
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[50%] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
          borderRadius: "16px 16px 0 0",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(ellipse at center, rgba(214, 179, 106, 0.06), transparent 70%)",
        }}
      />

      <div
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{
          background: "rgba(158, 47, 54, 0.25)",
          border: "1px solid rgba(158, 47, 54, 0.4)",
          color: "#D6B36A",
        }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <div className="relative flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold tracking-tight" style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
        {description && <p className="text-[12px] truncate mt-0.5" style={{ color: "rgba(214, 179, 106, 0.7)" }}>{description}</p>}
      </div>

      <ChevronRight
        className="relative h-5 w-5 transition-all duration-200 group-hover:translate-x-0.5"
        style={{ color: "rgba(214, 179, 106, 0.5)" }}
        strokeWidth={2}
      />
    </motion.a>
  )
}