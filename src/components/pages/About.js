import React, { useRef, useCallback } from 'react';

import Header from '../Header';
import Story from '../Story';
import Expertise from '../Expertise';
import Footer from '../Footer';
import { Element } from 'react-scroll'
import { motion } from 'framer-motion';


function About(props) {

  

  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5 }}>

        <Header
          title='Ik ben een full-stack'
          subtitle="webdeveloper"
          />

      </motion.div>

      <Element name="content">
        <Story color='dark'/>
      </Element>

      <Expertise/>

      <Footer/>
    </>

  );

}

export default About;
