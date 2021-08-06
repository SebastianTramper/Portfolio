import React from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'

import OnlinekookBook from '../images/projects/onlinekookboek.PNG';
import TheetuindeMeeze from '../images/projects/theetuindemeeze.PNG';

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
    <Container className="my-5 my-md-8" ref={ref}>
      <h2>Websites</h2>
      <Row >
        <Col md className="mb-4">
          <InView as="div">
            <animated.div style={showProject} className="card border-1 border-dark project">
              <Card.Img src={OnlinekookBook} alt="project" className="img-fluid" />
              <Card.ImgOverlay className="project-overlay">
                <Card.Title className="text-white">Onlinekookbook</Card.Title>
                <Card.Text>
                  Deze website heb ik gemaakt in begin 2020 sindien hebben maandelijkse verbeteringen doorgevoerd.
                  We zijn begonnen met een wordpress maar later zijn we overgegaan naar MODX.
                </Card.Text>
                <Card.Text className="text-primary">
                  <Link to="/" className="stretched-link text-white btn btn-primary">
                    Bekijk dit project
                  </Link>
                </Card.Text>
              </Card.ImgOverlay>
            </animated.div>
          </InView>
        </Col>

        <Col md className="mb-4">
          <Card className="bg-dark text-white">
            <Card.Img src={TheetuindeMeeze} alt="Card image" />
            {/* <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay> */}
          </Card>
        </Col>
        <Col>

        </Col>
      </Row>
    </Container>
  );
}

export default ProjectList;
