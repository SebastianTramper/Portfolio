import React from 'react';
import NavList from '../NavList';
import profile from '../../images/profile12.png';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Home() {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}>

      <div className="bg-dark">
        <Container style={{ backgroundImage: `url(${profile})`, backgroundBlendMode: 'multiply', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', height: '100vh' }} className="background-animation">
          <div className="d-flex align-items-center vh-100" >
            <NavList />
          </div>
        </Container>
      </div>
    </motion.div>

  );
}

export default Home;

