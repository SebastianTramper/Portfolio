import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ArrowBarLeft } from 'react-bootstrap-icons';


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
                        <p className="position-absolute top-10"><Link to="/"><ArrowBarLeft size={26}/> terug </Link></p>
                        <h1 className="text-center" >
                                { this.state.title }                           
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    );
  }
}

export default Header;

