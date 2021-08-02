import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'react-bootstrap-icons';
import { scroller } from 'react-scroll';

const ScrollUp = (props) => {


    function scrollTo() {
        scroller.scrollTo(props.scrollTo, {
            duration: 100,
            delay: 0,
            smooth: 'ease'
        })
    }

    return (
        <Link
            to={props.page}
            onClick={() => scrollTo()}
            className="chevron-circle d-block rounded-circle"
            style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                background: props.backgroundColor,
                borderColor: props.borderColor
            }}>
            <div >
            <ChevronUp size={26} />
            </div>
        </Link>
    );
};

export default ScrollUp;

