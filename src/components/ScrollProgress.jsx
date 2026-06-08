import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-accent shadow-sm"
      aria-hidden
    />
  )
}
