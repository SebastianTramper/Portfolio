import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }
    
  render(){
    return (
        <div className="header"> 
            <Container>
                <div className="d-flex align-items-center vh-100">
                    <div className="w-100">
                        <p className="mb-5"><Link to="/"> Terug </Link></p>
                        <h1 className="text-center"> 
                            { this.state.title }
                        </h1>
                        <Link to="/">Werk ervaring</Link>
                        <Link to="/">Studie</Link>
                        <Link to="/">Side projects</Link>
                    </div>
                </div>
            </Container>
        </div>
  
    );
  }
}

export default Header;

