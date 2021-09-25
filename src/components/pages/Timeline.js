import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import TimelineList from '../TimeLineList';
import Footer from '../Footer';

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
            <p className="position-absolute home-icon">
              <Link to="/" className="text-hover-animation-right">
                <House color="#fff"/>
                <span className="ms-3 fs-5 text-white">sebastiantramper.nl</span>
              </Link>
            </p>

            <div className="py-7 pt-md-10">
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
