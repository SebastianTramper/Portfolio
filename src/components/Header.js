import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollDown from './ScrollDown';
import HomeIcon from './HomeIcon';

const Header = (props) => {

    return (
        <div className="header vh-100" name="header">
            <Container className="h-100 d-flex align-items-center">
                <div className="w-100 heading">
                <HomeIcon />

                    <h1 className="text-center text-white">
                        {props.title}
                        <div className="text-primary">{props.subtitle}</div>
                    </h1>
                    <div className="position-absolute start-50 bottom-10 transform-center">
                    <ScrollDown
                        backgroundColor="#000"
                        borderColor="#fff"
                        scrollTo="content"
                    />
                </div>
                </div>
                
                
            </Container>
           
        </div>
    );
};

export default Header;

