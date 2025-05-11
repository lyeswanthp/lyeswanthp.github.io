import { motion } from 'framer-motion';
import React from 'react';

const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const AnimatedText = ({ text, className = "", TextElement = "h2", staggerDuration = 0.1 }) => {
  const El = TextElement;
  
  return (
    <El className={className}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block">
          <motion.span
            className="inline-block"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index * staggerDuration}
          >
            {word}
          </motion.span>
          &nbsp;
        </span>
      ))}
    </El>
  );
};

export default AnimatedText;