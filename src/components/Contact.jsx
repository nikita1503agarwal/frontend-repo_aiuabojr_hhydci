import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Simulate send for now; could wire to backend later
    setTimeout(() => setStatus('Thanks! I will get back to you within 24 hours.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-white">Let’s work together</h2>
          <p className="mt-2 text-slate-300">Have a project in mind or need help making sense of your data?</p>

          <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input placeholder="Company" className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" />
            <textarea required rows="5" placeholder="Tell me about your goals" className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" />
            <div className="sm:col-span-2 flex items-center justify-between gap-3">
              <button className="px-5 py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">Send Message</button>
              {status && <p className="text-sm text-blue-200">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
