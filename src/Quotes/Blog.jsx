import React, { useEffect, useState } from 'react';
import data from './Quotes.json';
import './quotes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { isVisible } from '@testing-library/user-event/dist/utils';

export const Blog = () => {
  const quotes = data.Quotes;
  const len = data.Quotes.length;
  const [quote, setQuote] = useState([[quotes[0]]]);
  console.log(quote)

  return (
    <div className='blog' id='blog'>
      <motion.div
        initial={{ y: '0px', opacity: 1 }}
        whileInView={{ y: '0px', opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='dummy'
      >
        <h1 className='dummy-head'>
          {' '}
          Enhancing Cloud Security with AWS Firewall Manager
        </h1>
        <div className='quotetext'>
          <AnimatePresence initial={false}>
            {isVisible && quote[0] && quote[0].Quote && (
              <motion.p
                className='quote'
              >
                {quote[0].Quote.split('\n').map((line, index) => (
                  <div key={index}>
                    {line}
                    <br />
                  </div>
                ))}
                {/* Quote Content from Introduction */}
                Introduction:
                In the rapidly evolving landscape of cloud computing, ensuring robust security measures is paramount for organizations hosting their applications and data on cloud platforms. AWS (Amazon Web Services) Firewall Manager emerges as a powerful tool, offering a centralized and scalable solution to manage and enforce security policies across multiple AWS accounts. This essay explores the key features and benefits of AWS Firewall Manager in enhancing cloud security.
                {/* Add the rest of the content here */}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
