import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import HomePage from "@/pages/HomePage"
import MenuPage from "@/pages/MenuPage"
import CategoryPage from "@/pages/CategoryPage"
import AboutPage from "@/pages/AboutPage"
import ContactsPage from "@/pages/ContactsPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:slug" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
