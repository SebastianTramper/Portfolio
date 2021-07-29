

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'react-bootstrap-icons';
import { scroller } from 'react-scroll'

const ScrollDownElement = (props) => {


    function scrollTo() {
        scroller.scrollTo(props.scrollPositionClass, {
            duration: 100,
            delay: 0,
            smooth: 'ease'
        })
    }

    const classes = `chevron-circle border border-${props.color} rounded-circle`;

    return (

        <Link to={props.page} onClick={() => scrollTo()} className={props.className}>
            <div className={classes}>
                <ChevronDown size={26} color={props.color}/>
            </div>
        </Link>

    );
}

export default ScrollDownElement;

