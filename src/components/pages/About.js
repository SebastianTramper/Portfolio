import React, { Component } from 'react';

import Header from '../Header';
import Story from '../Story';
import Expertise from '../Expertise';
import { motion } from 'framer-motion';


class About extends Component {

  render() {
    return (
      <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5 }}>
          <Header title={this.props.title} scrollPositionClass="story" />
      </motion.div>

      <Story />
      <Expertise />
      </>

    );
  }
}

export default About;
