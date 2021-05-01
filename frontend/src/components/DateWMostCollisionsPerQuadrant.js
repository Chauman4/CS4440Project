import React, { useRef, useEffect } from 'react';
import { useHistory, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const { tableau } = window;

function DateWMostCollisionsPerQuadrant() {  

    const url = "https://public.tableau.com/views/LACollisions/Sheet22?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    const ref = useRef(null);
    

    const options = {
        device: "desktop",
    };

    function initViz() {
        new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        initViz();
    },[])

    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
}
export default DateWMostCollisionsPerQuadrant;