import React, { Component } from 'react';

import Header from '../Header';
import ProjectList from '../ProjectList';
import { motion } from 'framer-motion';

import { Element } from 'react-scroll'
class Work extends Component {

  render() {
    return (
      <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5 }}>
        <div>
          <div className="bg-dark">
              <Header 
              title="Ik bouw interactieve"
              subtitle="websites / webapps" />
          </div>
        </div>
      </motion.div>

      <Element name="content">
          <ProjectList />
      </Element>
      </>
    );
  }
}

export default Work;
