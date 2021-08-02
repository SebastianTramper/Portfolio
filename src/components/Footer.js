import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import ContactForm from './ContactForm';
import ScrollUp from './ScrollUp';

const Footer = () => {


    return (
        <div className="bg-gray position-relative" name='footer'>
            <Container className="py-5 pt-md-8 d-flex flex-column justify-content-between  min-vh-100">
                <Row className="my-4 my-md-6">

                    <Col xl={{ span: 6, offset: 3 }} className="p-5 shadow bg-white">
                        <h3 className="mb-4">Stuur mij een bericht</h3>
                        <ContactForm />
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <div className="position-absolute bottom-15 z-index-500" >
                        <ScrollUp
                            backgroundColor="#white"
                            borderColor="#000"
                            scrollTo="header"
                        />
                    </div>
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

