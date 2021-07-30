import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { House, ChevronDown } from 'react-bootstrap-icons';
import { scroller } from 'react-scroll';



const Header = React.forwardRef( (props,ref) => {


    const scrollCircle = useRef();
    const scrollChevron = useRef();


    function handleScrollTarget(){
        if(props.inView[0]){
            console.log('1')
            return 'story';
        }
        else if(props.inView[1]){
            console.log('2')
            return 'expertise';
        }
        else if(props.inView[2]){
            console.log('3')
            return 'footer';
        }
        else if(props.inView[3]){
            console.log('4')
            return 'header';
        }
    }


    function handleSwitchBorderColor(){
        if(props.inView[0]){
            return "#000";
        }
        if(props.inView[1]){
            return "#E55934";
        }
        if(props.inView[2]){
            return "#fff";
        }
    }

    function scrollTo(scrollToClass) {
        scroller.scrollTo(scrollToClass, {
            duration: 100,
            delay: 0,
            smooth: 'ease'
        })
    }

    return (
 
        <div className="header" name="header">
            <Container ref={ref}>
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
                            <div className="position-fixed bottom-10 z-index-500" >
                                <Link ref={scrollCircle}
                                    to={props.page}
                                    onClick={() => scrollTo(handleScrollTarget())}
                                    className="chevron-circle d-block rounded-circle"
                                    style={{
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                    }}>
                                    <div >
                                        <ChevronDown ref={scrollChevron} size={26} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
})

export default Header;

