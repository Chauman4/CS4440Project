import React, { useRef, useEffect } from 'react';
import { useHistory, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const { tableau } = window;

function HeatMap() {  

    const url = "https://public.tableau.com/profile/nabil.patel#!/vizhome/LATrafficHeatMapTest/Sheet1";
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