import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-24 md:py-40">
          <p className="inline-flex items-center gap-2 text-blue-200/90 text-sm bg-white/10 backdrop-blur rounded-full px-3 py-1 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for freelance projects
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Data Analyst turning numbers into narratives
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-xl">
            I blend statistics, business context, and crisp visuals to uncover insights and drive decisions.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">See Work</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10">Contact</a>
          </div>
        </motion.div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}

export default Hero
