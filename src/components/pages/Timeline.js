import React, { Component } from 'react';
import Header from '../Header';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

class Timeline extends Component {

  render() {
    return (
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5 }}>
        <div className="bg-dark">
          <Container>
            <div>
              <Header title={this.props.title} />
            </div>
          </Container>
        </div>
      </motion.div>
    );
  }
}

export default Timeline;
