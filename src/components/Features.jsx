export default function Features(){
  const features = [
    {title:"חדרי מלון", desc:"תכנון וביצוע מלא של חדרי מלון ברמה הגבוהה ביותר."},
    {title:"ארונות", desc:"פתרונות אחסון מותאמים אישית לכל חלל."},
    {title:"מיטות", desc:"נוחות, עיצוב ואיכות חומרים ללא פשרות."},
    {title:"שטיחים", desc:"בחירה מדויקת של מרקמים וצבעים ליצירת אווירה."},
    {title:"מנורות", desc:"תאורה פונקציונלית ודקורטיבית שמעצימה את החלל."},
    {title:"חדרי אוכל", desc:"עיצוב כולל של אזורי הסעדה לאולמות ומלונות."}
  ];
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-right">פתרונות וריהוט לחדרים</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f,i)=> (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 text-right">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-blue-100/80 text-sm leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
