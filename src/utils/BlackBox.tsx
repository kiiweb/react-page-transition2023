import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

const BlackBox = ({ children }: { children: ReactNode }) => {
  const blackbox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      }
    },
  };

  return (
    <div className='absolute'>
      <motion.div initial="initial" animate="animate" variants={blackbox} className='relative bg-black w-full' onAnimationStart={() => document.body.classList.add("overflow-hidden")} onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}>{children}</motion.div>
    </div>
  )
}

export default BlackBox
