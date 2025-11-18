import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I'm a data analyst with a passion for translating complex datasets into clear, actionable insights. I specialize in SQL, Python, dashboarding, and experimentation.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ['Years Experience', '5+'],
                ['Dashboards Shipped', '40+'],
                ['A/B Tests Run', '60+'],
                ['Industries', 'Fintech, SaaS, Retail'],
              ].map(([k,v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-slate-400 text-sm">{k}</p>
                  <p className="text-white text-2xl font-semibold mt-1">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-white font-semibold">Toolkit</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-slate-300 text-sm">
              {['SQL', 'Python (pandas, numpy)', 'A/B Testing', 'Tableau / Power BI', 'dbt', 'Airflow', 'Excel', 'Statistical Modeling'].map(s => (
                <li key={s} className="px-3 py-2 rounded-md border border-white/10 bg-white/5">{s}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
