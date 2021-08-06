import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AboutImage from "../images/programmeren.jpg";
import { Link } from 'react-router-dom';
import ScrollDown from './ScrollDown';
import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'


const Story = () => {

    const { ref, inView } = useInView({
        rootMargin: '-150px'
    });

    const textAnimation = useSpring(
        {
            to: {
                x: inView ? 0 : -150,
                opacity: inView ? 1 : 0
            },
            from: {
                x: inView ? -150 : 0,
                opacity: inView ? 0 : 1
            },
            config: { duration: 600 },
        });

    const ImageAnimation = useSpring(
        {
            to: {
                x: inView ? 0 : 150,
                opacity: inView ? 1 : 0,
                backgroundColor: inView ? '#fff' : '#000'
            },
            from: {
                x: 150,
                opacity: 0,
                backgroundColor: '#000'
            },
            config: { duration: 800 },

        });

    return (
        <div className="py-5 py-md-9 position-relative bg-gray">
            <div className="container" ref={ref}>
                <Row xs={12} >
                    <Col className="ml-0 ms-md-7 ml-xxl-0">
                        <div>
                            <InView as="div">
                                <animated.div style={textAnimation}>
                                    <h2>Introductie</h2>
                                    <p>
                                        Hoi mijn naam is Sebastian Tramper, sinds 2017 ben ik actief in de online wereld. Daarin richt ik me het bouwen van website / webapps.
                                    </p>
                                    <p>
                                        Binnen het vak van webdevelopment ben altijd geïnteresseerd in het leren van nieuwe technieken, op het moment van schrijven (01-0802021) ben ik React.js en Node.js aan het leren.
                                    </p>
                                    <Link to="/timeline" className="btn btn-outline-success"> Bekijk mijn tijdlijn</Link>

                                    <div className="mt-5">
                                        <h5 className="mb-4">Kernwaardes</h5>
                                        <ul className="list-color-primary">
                                            <li> Kwaliteit voor kwantiteit</li>
                                            <li> Houd het simpel</li>
                                            <li> Herhaal jezelf niet</li>
                                            <li> Het draait allemaal om aanpasbaarheid</li>
                                        </ul>
                                    </div>

                                    <div className="border-start border-2 ps-4 mt-5">
                                        “It is one thing to write code that works. It is quite another to write good code that works” Dino Esposito (2009)
                                    </div>
                                </animated.div>
                            </InView>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end  h-90">
                        <InView as="div">
                            <animated.div style={ImageAnimation}>
                                <img src={AboutImage} className="img-fluid overlay-multiply" alt="sebastian" />
                            </animated.div>
                        </InView>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <div className="position-absolute bottom-10 z-index-500">
                        <ScrollDown scrollTo="expertise" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Story;
