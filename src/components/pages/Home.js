import React from 'react';
import NavList from '../NavList';
import profile from '../../images/profile12.png';
import { Container } from 'react-bootstrap';


function Home()  {

    
    return (
      <div className="bg-dark">
        <Container style={{ backgroundImage: `url(${profile})`, backgroundBlendMode: 'multiply', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', height: '100vh' }} className="background-animation">
            <div className="d-flex align-items-center vh-100" >
              <NavList /> 
            </div>
        </Container>
      </div>

    );
}

export default Home;

