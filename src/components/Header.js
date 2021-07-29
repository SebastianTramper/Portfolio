import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ArrowBarLeft, ArrowBarDown } from 'react-bootstrap-icons';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }



    render() {

        function ScrollToContent() {
            console.log('test');
        }

        return (
            <div className="header">
                <Container>
                    <div className="d-flex align-items-center vh-100">
                        <div className="w-100">
                            <p className="position-absolute top-10"><Link to="/"><ArrowBarLeft size={26} /> terug </Link></p>
                            <h1 className="text-center" >
                                {this.state.title}
                            </h1>
                            <div className="d-flex justify-content-center">
                                <button className="text-center bg-transparent position-absolute bottom-10 text-white border-0">


                                    <div onClick={ScrollToContent}>
                                        Lees verder

                                    </div>
                                    <ArrowBarDown size={26} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Header;

