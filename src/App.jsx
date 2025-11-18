import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Analyst Portfolio. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Built with love and data.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
