import Logo from './components/Logo'
import WaitlistForm from './components/WaitlistForm'

const BRAND = {
  primary: '#7CFF00',
}

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.35) 0%, rgba(0,0,0,0) 60%)' }} />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.35) 0%, rgba(0,0,0,0) 60%)' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <a href="#waitlist" className="text-sm font-medium text-white/80 hover:text-white">Early Access</a>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 mb-6">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.primary }} />
              <span className="text-xs">Beta Waitlist ist geöffnet</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Der 24/7 Termin-Chatbot für dein Business
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Chatoria plant Termine, merkt sich Namen und Details, und stornierte Buchungen souverän – komplett autonom. Sichere dir jetzt Early Access.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/70">Automatisierte Terminvergabe</div>
              <div className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/70">Merkt sich Kundendaten</div>
              <div className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/70">Storniert & verschiebt</div>
            </div>
          </div>

          <div id="waitlist" className="lg:justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Warteliste</h2>
                <span className="text-xs text-white/60">Early Access</span>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>

        <section className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Nahtlos', desc: 'Integriert sich in deine bestehenden Kalender und Tools.' },
            { title: 'Schnell', desc: 'Antwortet in Sekunden – rund um die Uhr.' },
            { title: 'Smart', desc: 'Lernt mit jeder Konversation und wird immer besser.' },
          ].map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Chatoria</p>
          <a href="#waitlist" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-black" style={{ backgroundColor: BRAND.primary }}>Jetzt vormerken</a>
        </div>
      </footer>
    </div>
  )
}

export default App
