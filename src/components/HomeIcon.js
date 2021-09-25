
import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons';


const HomeIcon = (props) => {


    return (
        <p className="position-fixed home-icon">
        <Link to="/" className="text-hover-animation-right">
        <House color="#fff"/>
        <span className="ms-3 fs-5 text-white">sebastiantramper.nl</span>
        </Link>
        </p>
    );
};

export default HomeIcon;





 