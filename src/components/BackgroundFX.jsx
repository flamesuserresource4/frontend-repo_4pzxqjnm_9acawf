import { useMemo } from 'react'
import { motion } from 'framer-motion'

const BRAND = { primary: '#7CFF00' }

export default function BackgroundFX() {
  const lines = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 11) % 100}%`,
    top: `${(i * 17) % 100}%`,
    d: 6 + (i % 7)
  })), [])

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden>
      {/* Grid shimmer */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        animate={{ opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Glow Orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.45) 0%, rgba(0,0,0,0) 60%)' }}
        animate={{ x: [0, 14, -10, 0], y: [0, -18, 8, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-48 -right-48 w-[720px] h-[720px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(124,255,0,0.45) 0%, rgba(0,0,0,0) 60%)' }}
        animate={{ x: [0, -12, 10, 0], y: [0, 16, -10, 0], scale: [1, 0.97, 1.03, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particle lines */}
      {lines.map((l) => (
        <motion.span
          key={l.id}
          className="absolute block h-px w-16 bg-white/10"
          style={{ left: l.left, top: l.top }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: [0, 1, 0], x: [-60, 160] }}
          transition={{ duration: l.d, delay: l.id * 0.18, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  )
}
