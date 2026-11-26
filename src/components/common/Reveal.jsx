import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE, itemVariants } from './motion';

/** Fades + slides its children in once they scroll into view. */
export function Reveal({ children, delay = 0, y = 28, x = 0, className = '', ...props }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its <RevealItem> children as they enter the viewport. */
export function RevealStagger({ children, className = '', stagger = 0.09, delay = 0, ...props }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '', ...props }) {
  return (
    <motion.div className={className} variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}

export default Reveal;
