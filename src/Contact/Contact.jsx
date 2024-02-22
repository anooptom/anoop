import React from 'react';
import './contact.css';
import { ReactComponent as Svg } from './svgs/videocall.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-content'>
        <motion.div
          initial={{ y: '-10px', opacity: 0 }}
          whileInView={{ y: '0px', opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='svg-call'
        >
          <Svg></Svg>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Feel free to contact me or interact with the social links
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: '5px' }}
          whileInView={{ opacity: 1, y: '0px' }}
          transition={{ delay: 0.2 }}
          type='button'
          className='resume-button'
          href='mailto:u2004017@rajagiri.edu.in'
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <br /> Email
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: '5px' }}
          whileInView={{ opacity: 1, y: '0px' }}
          transition={{ delay: 0.3 }}
          type='button'
          className='resume-button'
          href='https://github.com/anooptom'
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} />
          <br />
          Github
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: '5px' }}
          whileInView={{ opacity: 1, y: '0px' }}
          transition={{ delay: 0.4 }}
          type='button'
          className='resume-button'
          href='https://www.linkedin.com/in/anooptom/'
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <br /> LinkedIn
        </motion.a>
      </div>
    </div>
  );
};
