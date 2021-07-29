import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { House, ChevronDown } from 'react-bootstrap-icons';
import { scroller } from 'react-scroll'

const Header = (props) => {


    function scrollTo() {
        scroller.scrollTo(props.scrollPositionClass, {
            duration: 100,
            delay: 0,
            smooth: 'ease'
        })
    }

    return (

        <div className="header">
            <Container>
                <div className="d-flex align-items-center vh-100">
                    <div className="w-100">
                        <p className="position-absolute top-10">
                            <Link to="/" className="text-hover-animation-right">
                                <House />
                                <span className="ms-3 fs-5">sebastiantramper.nl</span>
                            </Link>
                        </p>
                        <h1 className="text-center text-white">
                            {props.title}
                        </h1>
                        <div className="d-flex justify-content-center">
                            <Link to="about" onClick={() => scrollTo()} className="position-absolute bottom-10">
                                <div className="chevron-circle text-white border border-white rounded-circle">
                                    <ChevronDown size={26} />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;

