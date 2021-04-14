import React, { useRef, useEffect } from 'react';
import { useHistory, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const { tableau } = window;

function HeatMap() {  

    const url = "https://public.tableau.com/shared/CS2B8RPZ9?:display_count=y&:origin=viz_share_link";
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
// class HeatMap extends React.Component {
//     render () {
//         return (
//             HeatMapMake()
//         )
//     }
// }
export default HeatMap;