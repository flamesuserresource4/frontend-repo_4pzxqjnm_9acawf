import { motion } from 'framer-motion'
import Logo from './Logo'

const BRAND = { primary: '#7CFF00' }

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Logo />
      </motion.div>
      <motion.a
        href="#waitlist"
        className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white relative"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Early Access
        <span className="h-1 w-1 rounded-full transition-all group-hover:scale-125" style={{ backgroundColor: BRAND.primary }} />
        <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition" />
      </motion.a>
    </header>
  )
}
