import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AboutImage from "../images/programmeren.jpg";
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import ScrollDown from './ScrollDown';

const Story = (props) => {

    return (
        <div className="py-5 py-md-9 position-relative bg-gray">
            <div className="container px-md-0">
                <Row>
                    <Col className="ml-0 ms-md-7 ml-xxl-0">
                        <div>
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
                        </div>

                        <div className="border-start border-2 ps-4 mt-5">
                            <quote>
                                “It is one thing to write code that works. It is quite another to write good code that works” Dino Esposito (2009)
                            </quote>
                        </div>


                    </Col>
                    <Col className="d-flex justify-content-end">
                        <div>
                            <img src={AboutImage} className="img-fluid h-90" alt="sebastian"></img>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <div className="position-absolute bottom-10 z-index-500" >
                        <ScrollDown
                            scrollTo="expertise"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Story;
