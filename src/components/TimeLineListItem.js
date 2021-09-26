import React, {useState, useCallback} from 'react';
import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'
import Chevron from "../images/icons/chevron.svg";
import {Collapse} from 'react-collapse';
import { transform } from 'framer-motion';


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
  
    const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);
    const onClick = useCallback(
      () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
      [isButtonCollapseOpen]
    );

  
  return (

    <InView as="div" className="h-100">
      <animated.div style={showProject} className="h-100 px-lg-8">
      <div className="time-line-item bg-dark border-0 d-lg-flex align-items-center w-100 flex-grow-1 justify-content-between px-0  mb-5 mb-md-6 " ref={ref} >

            <div className="d-lg-flex align-items-center">

            <div className="category mx-auto mx-lg-0 mb-4 mb-lg-0">
              <span className="category-text" style={props.color}>
                    {props.category}
                </span> 
            </div>


              <div className="category-item ms-md-5 ms-lg-6 ms-xxl-11  text-center text-lg-left">
                  <span className="category-item-text ">
                      {props.subject}
                  </span>
              </div>
            </div>

              <div className="d-none d-lg-block">
                <img src={Chevron} alt="chevron" className="category-chevron ms-md-4 ms-lg-5" ></img>
              </div>
      </div>
     

      </animated.div>
    </InView>
  );
}

export default TimelineListItem;
