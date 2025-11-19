import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BRAND = {
  primary: '#7CFF00',
  black: '#0A0A0A'
}

export default function WaitlistForm() {
  const [status, setStatus] = useState({ state: 'idle' })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (status.state === 'loading') {
      setProgress(0)
      const id = setInterval(() => {
        setProgress((p) => (p >= 90 ? 90 : p + 5))
      }, 120)
      return () => clearInterval(id)
    } else if (status.state === 'success') {
      setProgress(100)
    } else {
      setProgress(0)
    }
  }, [status.state])

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      company: formData.get('company')?.toString().trim() || undefined,
      use_case: formData.get('use_case')?.toString().trim() || undefined,
      consent: Boolean(formData.get('consent')),
      source: 'beta-waitlist'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Signup failed')
      }

      const data = await res.json()
      setStatus({ state: 'success', id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <div className="w-full max-w-xl">
      {/* Progress bar */}
      <div className="h-1.5 mb-4 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full"
          style={{ backgroundColor: BRAND.primary }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
        />
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Name</label>
            <input name="name" required placeholder="Alex Müller" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: BRAND.primary, boxShadow: '0 0 0 2px transparent', caretColor: BRAND.primary }} />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">E-Mail</label>
            <input type="email" name="email" required placeholder="alex@firma.de" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: BRAND.primary, caretColor: BRAND.primary }} />
          </div>
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Firma (optional)</label>
          <input name="company" placeholder="Chatoria GmbH" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: BRAND.primary, caretColor: BRAND.primary }} />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Use Case (optional)</label>
          <input name="use_case" placeholder="Termine automatisch planen, Leads qualifizieren…" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: BRAND.primary, caretColor: BRAND.primary }} />
        </div>
        <div className="flex items-center gap-2">
          <input id="consent" name="consent" type="checkbox" defaultChecked className="h-4 w-4 rounded border-white/20 bg-black/40 text-black" />
          <label htmlFor="consent" className="text-sm text-white/70">Ich möchte über den Beta-Start informiert werden.</label>
        </div>

        <motion.button
          disabled={status.state === 'loading'}
          className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
          style={{ backgroundColor: BRAND.primary }}
          whileTap={{ scale: 0.98 }}
          whileHover={{ y: -1 }}
        >
          {status.state === 'loading' ? 'Wird gesendet…' : 'Auf die Waitlist'}
          <motion.span
            className="absolute -inset-0.5 rounded-xl blur opacity-40"
            style={{ background: 'radial-gradient(80% 80% at 50% 0%, rgba(124,255,0,0.6) 0%, rgba(124,255,0,0) 60%)' }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          />
        </motion.button>

        {status.state === 'success' && (
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-emerald-400">Danke! Wir melden uns bald. (ID: {status.id})</motion.p>
        )}
        {status.state === 'error' && (
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-400">Etwas ist schiefgelaufen – bitte später erneut versuchen.</motion.p>
        )}
      </form>
      <p className="mt-4 text-xs text-white/50">Mit dem Absenden stimmst du unseren Datenschutzbestimmungen zu.</p>
    </div>
  )
}
