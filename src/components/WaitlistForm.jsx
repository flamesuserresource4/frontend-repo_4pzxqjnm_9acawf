import { useState } from 'react'

const BRAND = {
  primary: '#7CFF00',
  black: '#0A0A0A'
}

export default function WaitlistForm() {
  const [status, setStatus] = useState({ state: 'idle' })

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
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Name</label>
            <input name="name" required placeholder="Alex Müller" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: BRAND.primary, boxShadow: '0 0 0 2px transparent', caretColor: BRAND.primary }} />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">E-Mail</label>
            <input type="email" name="email" required placeholder="alex@firma.de" className="w-full px-4 py-3 rounded-xl bg:black/40 bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: BRAND.primary, caretColor: BRAND.primary }} />
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

        <button disabled={status.state === 'loading'} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition hover:brightness-110 disabled:opacity-60" style={{ backgroundColor: BRAND.primary }}>
          {status.state === 'loading' ? 'Wird gesendet…' : 'Auf die Waitlist'}
        </button>

        {status.state === 'success' && (
          <p className="text-sm text-emerald-400">Danke! Wir melden uns bald. (ID: {status.id})</p>
        )}
        {status.state === 'error' && (
          <p className="text-sm text-red-400">Etwas ist schiefgelaufen – bitte später erneut versuchen.</p>
        )}
      </form>
      <p className="mt-4 text-xs text-white/50">Mit dem Absenden stimmst du unseren Datenschutzbestimmungen zu.</p>
    </div>
  )
}
