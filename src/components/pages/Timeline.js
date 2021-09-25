import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TimelineList from '../TimeLineList';
import Footer from '../Footer';
import HomeIcon from '../HomeIcon';

class Timeline extends Component {

  render() {
    return (
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5 }}>
        <div className="bg-dark min-vh-100">
          <Container>
            <HomeIcon />
            <div className="py-7 pt-md-10 px-5 px-sm-0 px-xxl-8 ">
            <TimelineList/>
              </div>
          </Container>
        </div>
        <Footer/>

      </motion.div>
    );
  }
}

export default Timeline;
