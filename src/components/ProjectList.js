import React, { useState } from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import OnlinekookBook from '../images/projects/onlinekookboek.PNG';
import TheetuindeMeeze from '../images/projects/theetuindemeeze.PNG';

function ProjectList() {
  const [isActive, setActive] = useState(false);

  return (
    <Container className="my-5 my-md-8">
      <h2>Websites</h2>
      <Row xl={2}>
        <Col>
          <Card className="bg-overlay text-white"  
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}>
            <Card.Img src={OnlinekookBook} alt="Card image" className={isActive ? 'overlay-multiply' : ''} />
            {isActive && (
              <Card.ImgOverlay>
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
            )}

          </Card>
        </Col>

        <Col>
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
