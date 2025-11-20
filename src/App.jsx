import Navbar from './components/Navbar'
import InteractiveRoom from './components/InteractiveRoom'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar/>

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 text-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">פתרונות ריהוט לחדרי מלון וחללים מסחריים</h1>
          <p className="text-blue-100/80 md:text-lg max-w-3xl ml-auto">ממיטה ועד תאורה – אנחנו מתכננים, מייצרים ומתקינים ריהוט מותאם אישית: חדרי מלון, ארונות, מיטות, שטיחים, מנורות, חדרי אוכל ועוד.</p>
          <div className="mt-8 flex justify-end gap-3">
            <a href="#room" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition">ראו הדגמה</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition">דברו איתנו</a>
          </div>
        </div>
      </section>

      <InteractiveRoom/>
      <Features/>
      <Contact/>

      <footer className="py-10 text-center text-blue-100/60 bg-slate-950">© כל הזכויות שמורות</footer>
    </div>
  )
}

export default App