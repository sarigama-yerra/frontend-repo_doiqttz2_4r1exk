import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function InteractiveRoom() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Elements enter as you scroll
  const bedY = useTransform(scrollYProgress, [0.05, 0.25], [80, 0]);
  const bedO = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  const closetX = useTransform(scrollYProgress, [0.2, 0.4], [-120, 0]);
  const closetO = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const lampY = useTransform(scrollYProgress, [0.35, 0.55], [-80, 0]);
  const lampO = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  const carpetS = useTransform(scrollYProgress, [0.5, 0.7], [0.6, 1]);
  const carpetO = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const tableY = useTransform(scrollYProgress, [0.6, 0.8], [60, 0]);
  const tableO = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  const lightsO = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);

  return (
    <section id="room" ref={ref} className="relative min-h-[220vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Blueprint grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.12),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:
          `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.08) 25%, rgba(255,255,255,.08) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.08) 75%, rgba(255,255,255,.08) 76%, transparent 77%),
           linear-gradient(90deg, transparent 24%, rgba(255,255,255,.08) 25%, rgba(255,255,255,.08) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.08) 75%, rgba(255,255,255,.08) 76%, transparent 77%)`,
          backgroundSize: '64px 64px'}} />

        {/* Room outline */}
        <div className="absolute left-1/2 -translate-x-1/2 top-24 w-[90vw] max-w-5xl aspect-[16/9] border border-blue-400/30 rounded-2xl backdrop-blur-sm bg-slate-900/40 shadow-2xl">
          {/* walls */}
          <div className="absolute inset-4 border border-blue-300/30 rounded-xl" />
          <div className="absolute inset-x-8 bottom-12 h-1/2 border-t border-blue-300/20" />

          {/* bed */}
          <motion.div style={{ y: bedY, opacity: bedO }} className="absolute left-14 bottom-16">
            <div className="w-52 h-28 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-blue-200/20 shadow-lg" />
            <div className="mt-2 ml-2 w-44 h-6 rounded-md bg-slate-600/80" />
          </motion.div>

          {/* closet */}
          <motion.div style={{ x: closetX, opacity: closetO }} className="absolute right-10 bottom-16">
            <div className="w-40 h-48 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 border border-blue-200/20 shadow-lg" />
            <div className="absolute right-12 bottom-16 w-0.5 h-40 bg-blue-200/10" />
          </motion.div>

          {/* lamp */}
          <motion.div style={{ y: lampY, opacity: lampO }} className="absolute left-1/2 -translate-x-1/2 top-8 flex flex-col items-center">
            <div className="w-1 h-20 bg-blue-200/20" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-yellow-200/60 to-amber-400/60 blur-[1px]" />
          </motion.div>

          {/* carpet */}
          <motion.div style={{ scale: carpetS, opacity: carpetO }} className="absolute left-1/2 -translate-x-1/2 bottom-12">
            <div className="w-80 h-36 rounded-[2rem] bg-gradient-to-br from-indigo-700/50 to-purple-700/50 border border-blue-200/10 shadow-inner" />
          </motion.div>

          {/* dining table */}
          <motion.div style={{ y: tableY, opacity: tableO }} className="absolute left-1/3 bottom-24">
            <div className="w-36 h-20 bg-slate-600/80 rounded-lg border border-blue-200/10" />
          </motion.div>

          {/* ambient lights */}
          <motion.div style={{ opacity: lightsO }} className="absolute inset-0 pointer-events-none">
            <div className="absolute left-10 top-10 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute right-16 bottom-8 w-56 h-56 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* labels */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 text-center">
          <p className="text-blue-100/70">גללו כדי לראות את החדר מתעורר לחיים</p>
        </div>
      </div>
    </section>
  );
}
