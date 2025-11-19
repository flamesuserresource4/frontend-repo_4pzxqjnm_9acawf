import { motion } from 'framer-motion'

export default function Logo({ size = 28 }) {
  return (
    <motion.div className="flex items-center gap-2" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <motion.div
        className="rounded-md"
        style={{ width: size, height: size, backgroundColor: '#7CFF00' }}
        animate={{
          boxShadow: [
            '0 0 0px rgba(124,255,0,0.0)',
            '0 0 16px rgba(124,255,0,0.45)',
            '0 0 0px rgba(124,255,0,0.0)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className="text-white font-semibold text-lg tracking-tight">Chatoria</span>
    </motion.div>
  )
}
