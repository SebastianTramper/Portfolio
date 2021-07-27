import React, { Component } from 'react';

import Header from '../Header';
import ProjectList from '../ProjectList';

class Work extends Component {
    constructor(props) {
        super(props);
    }

  render(){
    return (
      <div>
          <div className="bg-dark">
            <Header title={this.props.title}/>
          </div>
          <ProjectList/>
      </div>
    );
  }
}

export default Work;
