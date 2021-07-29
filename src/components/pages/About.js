import React, { Component } from 'react';

import Header from '../Header';
import Story from '../Story';
import { motion } from 'framer-motion';



class About extends Component {

  render() {
    return (
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5 }}>
        <div>
          <Header title={this.props.title} />

          <Story />
        </div>
      </motion.div>

    );
  }
}

export default About;
