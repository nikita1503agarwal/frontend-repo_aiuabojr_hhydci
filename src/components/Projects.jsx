import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Churn Prediction Deep Dive',
    summary: 'Identified at-risk cohorts and reduced churn by 12% using logistic regression and cohort analysis.',
    tags: ['Python', 'SQL', 'Modeling', 'Visualization'],
    link: '#',
  },
  {
    title: 'Self-Serve Metrics Platform',
    summary: 'Designed a metrics layer and interactive dashboards for 50+ KPIs across teams.',
    tags: ['dbt', 'Tableau', 'Stakeholder Mgmt'],
    link: '#',
  },
  {
    title: 'Pricing Experiment Framework',
    summary: 'Built experimentation templates and analysis playbooks that cut decision time by 40%.',
    tags: ['A/B Testing', 'Python', 'Docs'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm text-blue-300 hover:text-blue-200">Request full portfolio →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-blue-400/30 hover:bg-white/10 transition-colors"
            >
              <div className="h-32 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10 mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-colors" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-blue-200 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
