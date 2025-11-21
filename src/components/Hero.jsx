import Spline from '@splinetool/react-spline'
import { Sparkles, Wand2 } from 'lucide-react'

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
          <Sparkles size={14} /> AI Design Tutor • Template Builder
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
          Turn ideas and uploads into editable designs
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-300">
          Get step‑by‑step guidance for Photoshop, Canva, or Illustrator. Save results as templates you can tweak anytime.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <button onClick={onGetStarted} className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-white font-medium shadow-lg shadow-orange-500/20 hover:bg-orange-400 transition">
            <Wand2 size={18} /> Get started
          </button>
        </div>
      </div>
    </section>
  )
}
