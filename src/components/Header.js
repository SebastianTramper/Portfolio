import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { House, ChevronDown } from 'react-bootstrap-icons';
import ScrollDownElement from './ScrollDownElement';

const Header = (props) => {


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
                            <div className="position-absolute bottom-10">
                                <ScrollDownElement page={props.page} scrollPositionClass={props.scrollPositionClass} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;

