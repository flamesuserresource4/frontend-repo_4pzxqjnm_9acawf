import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function FeatureCard({ title, desc, highlight = 'Top' }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
  }

  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      className="relative rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 overflow-hidden will-change-transform"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -2 }}
    >
      <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(124,255,0,0.18)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')]" aria-hidden />

      <span className="inline-flex items-center text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60" style={{ transform: 'translateZ(32px)' }}>{highlight}</span>
      <h3 className="mt-3 text-white font-semibold" style={{ transform: 'translateZ(40px)' }}>{title}</h3>
      <p className="text-white/70 text-sm mt-1" style={{ transform: 'translateZ(36px)' }}>{desc}</p>

      <motion.div
        className="absolute -inset-px rounded-2xl"
        style={{ background: 'radial-gradient(1200px 1200px at 0% 0%, rgba(124,255,0,0.15), transparent 40%)' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      />
    </motion.div>
  )
}
