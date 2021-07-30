import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AboutImage from "../images/programmeren.jpg";
import { Element } from 'react-scroll'

const Story = React.forwardRef( (props,ref) => {

    return (
        <Element name="story" className="position-relative" >
            <div className="py-5 py-md-9" ref={ref}>
                <div className="container-xxl px-md-0">
                    <Row>
                        <Col className="ml-0 ms-md-7 ml-xxl-0">
                            <div>
                                <h2>Over mij</h2>
                                <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak
                                    sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.</p>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <div>
                                <img src={AboutImage} className="img-fluid" alt="sebastian"></img>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Element>


    );
});
export default Story;
