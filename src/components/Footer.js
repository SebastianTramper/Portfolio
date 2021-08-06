import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import ContactForm from './ContactForm';
import ScrollUp from './ScrollUp';
import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'


const Footer = () => {


    const { ref, inView } = useInView({
        rootMargin: '-150px'
    });

    const textAnimation = useSpring(
        {
            to: {
                y: inView ? 0 : 150,
                opacity: inView ? 1 : 0
            },
            from: {
                y: inView ? 150 : 0,
                opacity: inView ? 0 : 1
            },
            config: { duration: 600 },
        });

    return (
        <div className="bg-gray position-relative" name='footer' ref={ref}>
            <Container className="pt-5 pt-md-8 d-flex flex-column justify-content-between  min-vh-100">
                <Row className="my-4 my-md-6">

                    <InView as="div">
                        <animated.div style={textAnimation}>
                            <Col xl={{ span: 6, offset: 3 }} className="p-5 shadow bg-white">
                                <h3 className="mb-4">Stuur mij een bericht</h3>
                                <ContactForm />
                            </Col>
                        </animated.div>
                    </InView>
                </Row>
                <div className="d-flex justify-content-center mt-4">
                    <ScrollUp
                        backgroundColor="#white"
                        borderColor="#000"  
                        scrollTo="header"
                    />
                </div>
                <div>
                    <hr className="bg-dark"></hr>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="text-dark fs-5">© 2021 Portfolio Sebastian Tramper.</p>

                        <div>
                            <a href="https://www.linkedin.com/in/sebastian-tramper/" target="linkedin">
                                <Linkedin color="dark" />
                            </a>
                            <a href="https://github.com/SebastianTramper" target="github">
                                <Github color="dark" className="ms-4" />
                            </a>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Footer;

