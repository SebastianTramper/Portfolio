import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AboutImage from "../images/programmeren.jpg";
import ScrollDown from './ScrollDown';


const Story = () => {


    return (
        <div className="py-5 py-md-6 position-relative bg-gray">
                <Row >
                    <Col md className="mb-5 mb-md-0 ml-0 ms-md-7 ml-xxl-0">
                        <div>
                                    <h2>Bio&#129488;</h2>
                                    <p>
                                    Bedankt voor het bekijken van mijn portfolio en projecten. <br></br> Mijn naam is Sebastian Tramper ik ben 25 jaar oud en ben woonachtig te Waarde in Zeeland. <br></br><br></br>
Tijdens mijn vorige opleiding softwaredeveloper niveau 4 op het Grafisch lyceum heb ik veel geleerd op het gebied van programmeren. Binnen deze opleiding ging mijn interesse vooral uit naar web development met name de front-end.
Echter ben ik me ook gaan verdiepen in backend developement met talen zoals PHP en Java. <br></br><br></br>
Tijdens deze studie ben ik werkzaam geweest als partime front-end developer bij een klein bedrijf in Yerseke. Het werk bij dit bedrijf heeft me veel kennis gebracht met name op het gebeid van HTML, CSS en Javascript.<br></br><br></br>
Op dit moment ben ik aan het studeren aan de Hogeschool Avans te Breda, waar ik een deeltijd opleiding volg in de richting Informatica.


                                    </p>

                                    <p>
                                        <strong>  Heeft u intresse in mijn werk?</strong>  <br></br> Stuur dan gerust een mailtje naar <a href="mailto:tramper.s@outlook.com">tramper.s@outlook.com</a>
                                    </p>
                                 
                        </div>
                    </Col>
                    <Col md className="d-flex justify-content-end  h-90">
                                <img src={AboutImage} className="img-fluid overlay-multiply" alt="sebastian" />
                    </Col>
                </Row>
                    <div className="d-none d-md-block position-absolute bottom-10 start-50 transform-center z-index-500">
                        <ScrollDown scrollTo="expertise" />
                    </div>
                <div className="d-md-none d-flex justify-content-center mt-4">
                        <ScrollDown scrollTo="expertise" />
                </div>
            </div>
    );
};
export default Story;
