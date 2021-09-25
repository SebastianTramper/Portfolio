import React from 'react';

import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'
import Chevron from "../images/icons/chevron.svg";

function TimelineListItem(props) {

  const { ref, inView } = useInView({
    rootMargin: '-150px'
  });

  const showProject = useSpring(
    {
      to: {
        opacity: inView ? 1 : 0
      },
      from: {
        opacity: 0,
      },
      config: { duration: 600 },

    });
  return (

    <InView as="div" className="h-100">
      <animated.div style={showProject} className="h-100">
      <div className="time-line-item d-lg-flex align-items-center w-100 flex-grow-1 justify-content-between px-md-8 mb-5 mb-md-6 " ref={ref}>
            <div className="category mx-auto mx-lg-0 mb-4 mb-lg-0">
              <span className="category-text">
                    {props.category}
                </span> 
            </div>


              <div className="category-item ms-md-4 ms-lg-5  text-center text-lg-left">
                  <span className="category-item-text ">
                      {props.subject}
                  </span>
              </div>
              <div className="d-none d-lg-block">
                <img src={Chevron} alt="chevron" className="category-chevron ms-md-4 ms-lg-5"></img>
              </div>
      </div>
      </animated.div>
    </InView>
  );
}

export default TimelineListItem;
