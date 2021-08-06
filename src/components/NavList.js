import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'


function NavList() {
  const textAnimation1 = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -300 }, delay: 400 })
  const textAnimation2 = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -300 }, delay: 600 })
  const textAnimation3 = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -300 }, delay: 800 })


  return (

    <div >
      <ul className="pb-5 ps-md-0 p-md-0">
        <animated.div style={textAnimation1}>
          <li className="header-title-large nav nav-item-1"><NavLink to='/about' ></NavLink></li>
        </animated.div>

        <animated.div style={textAnimation2}>
          <li className="header-title-large nav nav-item-2"><NavLink className="text-primary" to='/work'></NavLink></li>
        </animated.div>

        <animated.div style={textAnimation3}>
          <li className="header-title-large nav nav-item-3"><NavLink className="text-primary" to='/timeline'></NavLink></li>
        </animated.div>

      </ul>
    </div>


  );
}

export default NavList;
