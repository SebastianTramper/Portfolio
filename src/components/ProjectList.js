import React from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'

import OnlinekookBook from '../images/projects/onlinekookboek.PNG';
import TheetuindeMeeze from '../images/projects/theetuindemeeze.PNG';
import chanelkaspteraanhuis from '../images/projects/chanelkapsteraanhuis.PNG'
function ProjectList() {

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
    <Container className="my-5 px-xl-5 my-md-8 z-index-1500" ref={ref}>
      <h2  className="mb-5 lead-large">Persoonlijke projecten</h2>
      <Row xs={1} md={2} lg={2}>
        <Col md className="mb-4">
          <InView as="div">
            <animated.div style={showProject} className="card border-1 border-dark project">
              <Card.Img src={OnlinekookBook} alt="project" className="img-fluid card-image" />
              <Card.ImgOverlay className="project-overlay">
              <a href="https://onlinekookboek.com" target="onlinekookboek" className="stretched-link text-white d-flex justify-content-center align-items-center h-100">
                  <Card.Title className="text-white">Onlinekookbook.com</Card.Title>
              </a>
              </Card.ImgOverlay>
            </animated.div>
          </InView>
        </Col>

        <Col md className="mb-4">
          <InView as="div">
            <animated.div style={showProject} className="card border-1 border-dark project">
            <Card.Img src={TheetuindeMeeze} alt="Card image" className="h-100 img-fluid card-image"/>
              <Card.ImgOverlay className="project-overlay">
              <a href="https://theetuindemeeze.nl" target="chanelkapsteraanhuis" className="stretched-link text-white d-flex justify-content-center align-items-center h-100">
                <Card.Title className="text-white">Theetuindemeeze.nl</Card.Title>
                </a>
              </Card.ImgOverlay>
            </animated.div>
          </InView>
        </Col>

        <Col md className="mb-4">
          <InView as="div">
            <animated.div style={showProject} className="card border-1 border-dark project">
              <Card.Img src={chanelkaspteraanhuis} alt="project" className="img-fluid card-image" />
              <Card.ImgOverlay className="project-overlay">
              <a href="https://chanelkapsteraanhuis.nl" target="chanelkapsteraanhuis" className="stretched-link text-white d-flex justify-content-center align-items-center h-100">
                <Card.Title className="text-white">Chanelkapsteraanhuis.nl</Card.Title>
                </a>
              </Card.ImgOverlay>
            </animated.div>
          </InView>
        </Col>

      </Row>
    </Container>
  );
}

export default ProjectList;
