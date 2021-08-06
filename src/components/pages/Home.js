import React from 'react';
import NavList from '../NavList';
import profile from '../../images/profiel22.png';
import { motion } from 'framer-motion';



function Home() {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}>

      <div className="home-background bg-dark" style={{ backgroundImage: `url(${profile})` }} >
        <div  className="container-md px-0 background-animation h-100">
          <div className="d-flex align-items-end align-items-md-center justify-content-center justify-content-md-start h-100" >
            <NavList />
          </div>
        </div>
      </div>
    </motion.div>

  );
}

export default Home;

