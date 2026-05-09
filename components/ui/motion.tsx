'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1]

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

interface MotionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

export function FadeUp({ children, className, delay = 0, duration = 0.65, once = true, amount = 0.15 }: MotionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, once = true, amount = 0.1 }: MotionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: EASE_IN_OUT }}
    >
      {children}
    </motion.div>
  )
}

export function SlideInLeft({ children, className, delay = 0, duration = 0.7, once = true, amount = 0.15 }: MotionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={slideInLeftVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}

export function SlideInRight({ children, className, delay = 0, duration = 0.7, once = true, amount = 0.15 }: MotionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={slideInRightVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({ children, className, once = true, amount = 0.1 }: Omit<MotionProps, 'delay' | 'duration'>) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}

export { motion, useInView }
export type { Variants }
