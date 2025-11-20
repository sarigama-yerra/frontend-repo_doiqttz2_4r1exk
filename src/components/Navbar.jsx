import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg">F</div>
          <div className="text-white font-semibold tracking-tight">Flames Furniture</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
          <a href="#room" className="hover:text-white transition">חדר אינטראקטיבי</a>
          <a href="#features" className="hover:text-white transition">פתרונות</a>
          <a href="#contact" className="hover:text-white transition">יצירת קשר</a>
        </nav>
        <button className="md:hidden p-2 text-blue-100" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
