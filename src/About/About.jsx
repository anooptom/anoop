import React from 'react';
import './About.css';
import { ReactComponent as Svg } from './svgs/javascript.svg';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-content'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: '-5px' }}
          whileInView={{ opacity: 1, x: '0px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Hi :)</p>
          <p>
            I'm Anoop Tom, a passionate Full Stack Web Developer who thrives on
            turning ideas into digital realities.
          </p>
          <p>
            I'm always up for a challenge and enjoy working on diverse projects
            that help me enhance my skills and broaden my horizons. On top of
            that, I've also dabbled in options trading as a part-time gig
          </p>
          <p>Wanna Get in Touch?</p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: '5px' }}
          whileInView={{ opacity: 1, y: '0px' }}
          transition={{ delay: 0.4, duration: 0.5 }}
          type='button'
          className='resume-button'
          href='#contact'
        >
          Contact Me
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: '5px' }}
          whileInView={{ opacity: 1, y: '0px' }}
          transition={{ delay: 0.2, duration: 0.5 }}
          type='button'
          className='resume-button'
          href='https://drive.google.com/file/d/14b8d4S_r3ePgzgp9k7xxRtm-gxZajx81/view'
          target='_blank'
          rel='noreferrer'
        >
          Get Resume
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, x: '10px' }}
        whileInView={{ opacity: 1, x: '0px' }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='svg'
      >
        <Svg></Svg>
      </motion.div>
    </div>
  );
};
