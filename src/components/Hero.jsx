import { motion } from 'framer-motion'

const BRAND = { primary: '#7CFF00' }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

export default function Hero({ children }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 pt-10 pb-28"
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

      {children}
    </motion.div>
  )
}
