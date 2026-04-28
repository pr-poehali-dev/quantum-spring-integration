import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Главная", to: "/" },
  { label: "Меню", to: "/menu" },
  { label: "О нас", to: "/about" },
  { label: "Контакты", to: "/contacts" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(31, 31, 31, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(214, 179, 106, 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/1c94cd2a-30b5-41db-9c8e-5ea3f011c95a.jpg"
            alt="BAMBOO"
            className="h-9 w-9 rounded-full object-cover"
            style={{ border: "1px solid rgba(214, 179, 106, 0.4)" }}
          />
          <span
            className="text-lg font-bold tracking-widest"
            style={{ color: "#F7F3EA", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.12em" }}
          >
            BAMBOO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: location.pathname === l.to ? "#D6B36A" : "rgba(247, 243, 234, 0.6)",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+79991234567"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#9E2F36", color: "#fff", fontFamily: "'Manrope', sans-serif" }}
          >
            Позвонить
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
          style={{ color: "#D6B36A" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid rgba(214, 179, 106, 0.1)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium py-1"
                  style={{
                    color: location.pathname === l.to ? "#D6B36A" : "rgba(247, 243, 234, 0.7)",
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+79991234567"
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center"
                style={{ background: "#9E2F36", color: "#fff" }}
              >
                Позвонить: +7 (999) 123-45-67
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
