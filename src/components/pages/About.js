import React, { useRef,useCallback } from 'react';

import Header from '../Header';
import Story from '../Story';
import Expertise from '../Expertise';
import Footer from '../Footer';

import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';



// function useOnScreen(options) {
//   const ref = React.useRef();
//   const [visible, setVisible] = React.useState(false);

//   React.useEffect(() => {
//       const observer = new IntersectionObserver(([entry]) => {
//           setVisible(entry.isIntersecting)
//       }, options)

//       if(ref.current){
//           observer.observe(ref.current);
//       }

//       return () => {
//           if(ref.current){
//               observer.unobserve(ref.current);
//           }
//       }
//   }, [ref,options]);

//   return [ref, visible];
// }

function About(props) {



  const [ ref1, inView1, entry ] = useInView({
    rootMargin: '10%'
  });

  const [ ref2, inView2, entry2 ] = useInView({
    rootMargin: '10%'
  });

  const [ ref3, inView3, entry3 ] = useInView({
    rootMargin: '10%'
  });

  const [ ref4, inView4, entry4 ] = useInView({
    rootMargin: '10%'
  });

  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5 }}>

        <Header
          title={props.title}
          page='about'
          inView={[inView1, inView2, inView3, inView4]}
          ref={ref1} />

      </motion.div>

      <Story
        page='about'
        color='dark'
        ref={ref2} />

      <Expertise
        page='about'
        ref={ref3} />

      <Footer 
        ref={ref4}
      />
    </>

  );

}

export default About;
