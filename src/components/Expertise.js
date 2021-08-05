import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import frontEndDevelopement from '../images/icons/improvement.svg';
import backEndDevelopement from '../images/icons/settings.svg';
import tools from '../images/icons/tools.svg';
import ScrollDown from './ScrollDown';
import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'

const Expertise = () => {


    const { ref, inView } = useInView({
        rootMargin: '-250px'
    });

    const textAnimation = useSpring(
        {
            to: {
                opacity: inView ? 1 : 0
            },
            from: {
                opacity: inView ? 0 : 1
            },
            config: { duration: 1200 },
        });



    return (

        <div className="bg-dark position-relative py-5 py-md-0">
            <div className="d-flex align-items-center min-vh-100" name="expertise" ref={ref}>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                        <InView as="div" className="h-100">
                                <animated.div style={textAnimation} className="h-100">
                                    <Card className="text-center h-100">
                                        <Card.Img variant="top" src={frontEndDevelopement} className="expertise-icon" />
                                        <Card.Body className="pt-0">
                                            <Card.Title>
                                                <span className="text-primary">Front-end</span> development
                                            </Card.Title>
                                            <Card.Text className="fw-light mb-4">
                                                Ik bouw interactieve websites met oog voor UX / UI
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
                                </animated.div>
                            </InView>

                        </Col>
                        <Col>
                        <InView as="div" className="h-100">
                                <animated.div style={textAnimation} className="h-100">
                                    <Card className="text-center h-100">
                                        <Card.Img variant="top" src={backEndDevelopement} className="expertise-icon" />
                                        <Card.Body className="pt-0">
                                            <Card.Title>
                                                <span className="text-success">Back-end</span> development
                                            </Card.Title>
                                            <Card.Text className="fw-light mb-4">
                                                Ik bouw maatwerk oplossingen naar de wensen de van klant.
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
                                </animated.div>
                            </InView>
                        </Col>
                        <Col>
                            <InView as="div" className="h-100">
                                <animated.div style={textAnimation}>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={tools} className="expertise-icon" />
                                        <Card.Body className="pt-0">
                                            <Card.Title>
                                                <span className="text-blue">Dev tools </span>/ technieken
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
                                </animated.div>
                            </InView>   
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <div className="position-absolute bottom-10 z-index-500" >
                            <ScrollDown
                                backgroundColor="#000"
                                borderColor="#fff"
                                scrollTo="footer"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Expertise;

