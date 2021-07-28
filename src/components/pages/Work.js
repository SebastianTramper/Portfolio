import React, { Component } from 'react';

import Header from '../Header';
import ProjectList from '../ProjectList';
import { motion } from 'framer-motion';

class Work extends Component {
    constructor(props) {
        super(props);
    }

  render(){
    return (
      <motion.div 
        initial={{scaleY: 0}}
        animate={{scaleY: 1}} 
        exit={{scaleY: 0}}
        transition={{duration:.5}}>
        <div>
            <div className="bg-dark">
              <Header title={this.props.title}/>
            </div>
            <ProjectList/>
        </div>
      </motion.div>
    );
  }
}

export default Work;
