import { motion } from 'framer-motion'
import BackgroundFX from './components/BackgroundFX'
import Header from './components/Header'
import Hero from './components/Hero'
import WaitlistForm from './components/WaitlistForm'
import FeatureCard from './components/FeatureCard'
import Marquee from './components/Marquee'

const BRAND = {
  primary: '#7CFF00',
  black: '#000000',
}

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: BRAND.black }}>
      <BackgroundFX />

      <Header />

      <main>
        <Hero>
          <motion.div id="waitlist" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} className="lg:justify-self-end">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full" style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.18) 0%, rgba(0,0,0,0) 60%)' }} />
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Warteliste</h2>
                <span className="text-xs text-white/60">Early Access</span>
              </div>
              <WaitlistForm />
            </div>
          </motion.div>
        </Hero>

        <section className="max-w-7xl mx-auto px-6">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Nahtlos', desc: 'Integriert sich in deine bestehenden Kalender und Tools.', highlight: 'Integrationen' },
              { title: 'Schnell', desc: 'Antwortet in Sekunden – rund um die Uhr.', highlight: '24/7' },
              { title: 'Smart', desc: 'Lernt mit jeder Konversation und wird immer besser.', highlight: 'AI' },
            ].map((f, i) => (
              <FeatureCard key={i} title={f.title} desc={f.desc} highlight={f.highlight} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-20">
          <Marquee items={[
            'Google Calendar','Outlook','Zapier','HubSpot','Calendly Import','Slack','Notion','Stripe'
          ]} />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20">
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
