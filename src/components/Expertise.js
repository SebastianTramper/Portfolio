import { hex6 } from '@react-spring/shared';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import frontEndDevelopement from '../images/icons/improvement.svg';
import backEndDevelopement from '../images/icons/settings.svg';
import tools from '../images/icons/tools.svg';


const Expertise = (props) => {

    return (

        <div className="bg-primary">
            <div className="d-flex align-items-center min-vh-100">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className="text-center h-100">
                                <Card.Img variant="top" src={frontEndDevelopement} className="expertise-icon" />
                                <Card.Body className="pt-0">
                                    <Card.Title>
                                        Front-end development
                                    </Card.Title>
                                    <Card.Text className="fw-light mb-4">
                                        Het bouwen van interactieve en perfect ontworpen websites is naar mijn menig het mooiste wat er is!
                                    </Card.Text>
                                    <div className="mb-4">

                                        <h6>
                                            Talen die ik spreek
                                        </h6>
                                        <p className="fw-light">HTML5, CSS3 , SCSS, Javascript</p>
                                    </div>

                                    <div className="mb-4">
                                        <h6>
                                            Frameworks / libraries
                                        </h6>
                                        <p className="fw-light">
                                            React, Bootstrap, jQuery
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="text-center h-100">
                                <Card.Img variant="top" src={backEndDevelopement} className="expertise-icon" />
                                <Card.Body className="pt-0">
                                    <Card.Title>
                                        Back-end development
                                    </Card.Title>
                                    <Card.Text className="fw-light mb-4">
                                        Het bouwen van interactieve en perfect ontworpen websites is naar mijn menig het mooiste wat er is!
                                    </Card.Text>
                                    <div className="mb-4">

                                        <h6>
                                            Talen die ik spreek
                                        </h6>
                                        <p className="fw-light">PHP, Javascript, SQL</p>
                                    </div>

                                    <div className="mb-4">
                                        <h6>
                                            Frameworks / libraries
                                        </h6>
                                        <p className="fw-light">
                                            CakePHP, Medoo, Node
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="text-center h-100">
                                <Card.Img variant="top" src={tools} className="expertise-icon" />
                                <Card.Body className="pt-0">
                                    <Card.Title>
                                        Overige technieken
                                    </Card.Title>

                                    <div className="mb-4">
                                        <ul className="p-0 list-unstyled fw-light">
                                            <li>Terminal</li>
                                            <li>VS code</li>
                                            <li>Git</li>
                                            <li>Github</li>
                                            <li>NPM</li>
                                            <li>Gulp</li>
                                            <li>Webpack</li>
                                            <li>MODX</li>
                                            <li>Wordpress</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Expertise;

