import React, { Component } from 'react';

import Header from '../Header';

import { Container } from 'react-bootstrap';

class Timeline extends Component {
    constructor(props) {
        super(props);
    }
    
  render(){
    return (
      <div className="bg-dark">
        <Container>
          <div>
              <Header title={this.props.title}/>
          </div>
        </Container>
      </div>
    );
  }
}

export default Timeline;
