import { motion } from 'framer-motion'
import Logo from './components/Logo'
import WaitlistForm from './components/WaitlistForm'

const BRAND = {
  primary: '#7CFF00',
  black: '#000000',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: BRAND.black }}>
      {/* Background visuals */}
      <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden>
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
        {/* Glow Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.35) 0%, rgba(0,0,0,0) 60%)' }}
          animate={{ x: [0, 10, -10, 0], y: [0, -15, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.35) 0%, rgba(0,0,0,0) 60%)' }}
          animate={{ x: [0, -8, 12, 0], y: [0, 12, -6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block h-px w-12 bg-white/10"
            style={{ left: `${(i * 7) % 100}%`, top: `${(i * 13) % 100}%` }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: [0, 1, 0], x: [ -40, 120 ] }}
            transition={{ duration: 6 + (i % 5), delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <a href="#waitlist" className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
          Early Access
          <span className="h-1 w-1 rounded-full transition-all group-hover:scale-125" style={{ backgroundColor: BRAND.primary }} />
        </a>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 pt-10 pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 mb-6 backdrop-blur">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.primary }} />
              <span className="text-xs">Beta Waitlist ist geöffnet</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
              Der 24/7 Termin-Chatbot für dein Business
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-white/70 max-w-xl">
              Chatoria plant Termine, merkt sich Namen und Details, und stornierte Buchungen souverän – komplett autonom. Sichere dir jetzt Early Access.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              {['Automatisierte Terminvergabe','Merkt sich Kundendaten','Storniert & verschiebt'].map((pill) => (
                <div key={pill} className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/70">
                  {pill}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="#waitlist"
                className="relative inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-black transition disabled:opacity-60"
                style={{ backgroundColor: BRAND.primary }}
              >
                Jetzt vormerken
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute -inset-0.5 rounded-xl blur opacity-40" style={{ background: 'radial-gradient(80% 80% at 50% 0%, rgba(124,255,0,0.6) 0%, rgba(124,255,0,0) 60%)' }} />
              </a>
            </motion.div>
          </div>

          <motion.div id="waitlist" className="lg:justify-self-end" variants={fadeUp}>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full" style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.18) 0%, rgba(0,0,0,0) 60%)' }} />
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Warteliste</h2>
                <span className="text-xs text-white/60">Early Access</span>
              </div>
              <WaitlistForm />
            </div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <section className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Nahtlos', desc: 'Integriert sich in deine bestehenden Kalender und Tools.' },
            { title: 'Schnell', desc: 'Antwortet in Sekunden – rund um die Uhr.' },
            { title: 'Smart', desc: 'Lernt mit jeder Konversation und wird immer besser.' },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full" style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.14) 0%, rgba(0,0,0,0) 60%)' }} />
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap text-white/40 text-sm"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {['Google Calendar','Outlook','Zapier','HubSpot','Calendly Import','Slack','Notion','Stripe'].map((b) => (
              <span key={b} className="px-4 py-2 rounded-full border border-white/10 bg-white/5">{b}</span>
            ))}
            {['Google Calendar','Outlook','Zapier','HubSpot','Calendly Import','Slack','Notion','Stripe'].map((b, idx) => (
              <span key={`d-${idx}`} className="px-4 py-2 rounded-full border border-white/10 bg-white/5">{b}</span>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Chatoria</p>
          <a href="#waitlist" className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-black transition hover:brightness-110" style={{ backgroundColor: BRAND.primary }}>
            Jetzt vormerken
            <span className="absolute -inset-0.5 rounded-lg blur opacity-40" style={{ background: 'radial-gradient(80% 80% at 50% 0%, rgba(124,255,0,0.6) 0%, rgba(124,255,0,0) 60%)' }} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
