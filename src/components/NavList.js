import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'


function NavList() {
  const textAnimation1 = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -300 }, delay: 400 })
  const textAnimation2 = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -300 }, delay: 600 })
  const textAnimation3 = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -300 }, delay: 800 })


  return (

      <div className="pb-5 ps-md-0 p-md-0 w-md-100">
        <animated.div style={textAnimation1}>
          <div className="header-title-large nav nav-item-1"><NavLink className="w-100" to='/about' ></NavLink></div>
        </animated.div>

        <animated.div style={textAnimation2}>
          <div className="header-title-large nav nav-item-2"><NavLink className="text-primary w-100" to='/work'></NavLink></div>
        </animated.div>

        <animated.div style={textAnimation3}>
          <div className="header-title-large nav nav-item-3"><NavLink className="text-primary w-100" to='/timeline'></NavLink></div>
        </animated.div>

      </div>


  );
}

export default NavList;
