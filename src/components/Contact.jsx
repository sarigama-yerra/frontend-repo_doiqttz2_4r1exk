import { useState } from "react";

export default function Contact(){
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({name:"", email:"", message:""});

  const submit = async (e)=>{
    e.preventDefault();
    setStatus("loading");
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`,{
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
      });
      if(!res.ok) throw new Error('bad');
      setStatus("sent");
    }catch(err){
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-right">דברו איתנו</h2>
        <form onSubmit={submit} className="space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-slate-800/80 border border-white/10 rounded-lg px-4 py-3 text-white text-right placeholder:text-blue-100/60" placeholder="שם" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input className="bg-slate-800/80 border border-white/10 rounded-lg px-4 py-3 text-white text-right placeholder:text-blue-100/60" placeholder="אימייל" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          </div>
          <textarea className="bg-slate-800/80 border border-white/10 rounded-lg px-4 py-3 text-white text-right placeholder:text-blue-100/60 w-full h-32" placeholder="הודעה" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button disabled={status==='loading'} className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition">
            {status==='loading'?'שולח...': status==='sent'?'נשלח!': status==='error'?'ניסיון נוסף':'שלחו הודעה'}
          </button>
        </form>
      </div>
    </section>
  )
}
