import { motion } from 'framer-motion'

export default function Marquee({ items }) {
  const content = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap text-white/40 text-sm will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {content.map((b, i) => (
          <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5">{b}</span>
        ))}
      </motion.div>
    </div>
  )
}
