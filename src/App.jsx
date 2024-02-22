import './App.css';
import { Navbar } from './navbar/Navbar';
import { Intro } from './introsection/Intro';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Blog } from './Quotes/Blog';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  //Mouse Cursor Setup
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12.5,
      y: mousePosition.y - 12.5,
    },
  };
  return (
    <div className='app'>
      <motion.div
        variants={variants}
        animate='default'
        className='cursor'
      ></motion.div>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Contact></Contact>

      <Blog></Blog>
    </div>
  );
}

export default App;
