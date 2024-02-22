import React from 'react';
import './intro.css';
import { motion } from 'framer-motion';

export const Intro = () => {
  return (
    <div className='intro' id='home'>
      <div className='intro-content'>
        <h2>
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ delay: 5, duration: 0.5 }}
            animate={{ opacity: 1 }}
          >
            Web Developer
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ delay: 5.5, duration: 0.5 }}
            animate={{ opacity: 1 }}
          >
            , Derivatives Trader
          </motion.span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 7, duration: 0.5 }}
          animate={{ opacity: 1 }}
        >
          and much more
        </motion.p>
      </div>
    </div>
  );
};
