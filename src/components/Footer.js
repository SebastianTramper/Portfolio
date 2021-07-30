import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import ContactForm from './ContactForm';
const Footer = React.forwardRef((props, ref) => {


    return (
        <div className="bg-white py-5 pt-md-7" name="footer" ref={ref}>
            <Container>
                <Row className="mb-4 mb-md-6">
                    <Col xl={5}>
                        <h2>Contact</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                    <Col xl={{span: 5, offset: 2}}>
                        <h5 className="mb-4">Stuur mij een bericht</h5>
                        <ContactForm />
                    </Col>
                </Row>
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
})

export default Footer;

