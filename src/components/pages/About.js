import React, { Component } from 'react';

import Header from '../Header';
import { Container } from 'react-bootstrap';


class About extends Component {
    constructor(props) {
        super(props);
    }

  render(){
    return (
      <div className="bg-dark">
        <Container>
            <Header title={this.props.title}/>
        </Container>
      </div> 
    );
  }
}

export default About;
