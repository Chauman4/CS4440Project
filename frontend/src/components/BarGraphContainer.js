import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarGraph from './BarGraph';

function BarGraphContainer(props) {    
    const [data, setData] = useState()
    const [filteredData, setFilteredData] = useState()

    useEffect(() => {
        setData(props.data)
        setFilteredData(props.data)
    }, [props.data])

    function filterX(e) {
        var curData = data
        var filteredData = data.filter((element) => element.x == e.target.value || e.target.value == "All")
        setFilteredData(filteredData)
    }

    return (
        <div className="container">
            <div className="btn-group">
                <button type="button" onChange={(e) => this.changeValue(e) } className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="Months">
                    Months
                </button>
                <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={filterX} value="Jan">Jan</button>
                    <button className="dropdown-item" onClick={filterX} value="Feb">Feb</button>
                    <button className="dropdown-item" onClick={filterX} value="Mar">Mar</button>
                    <button className="dropdown-item" onClick={filterX} value="Apr">Apr</button>
                    <button className="dropdown-item" onClick={filterX} value="May">May</button>
                    <button className="dropdown-item" onClick={filterX} value="Jun">Jun</button>
                    <button className="dropdown-item" onClick={filterX} value="Jul">Jul</button>
                    <button className="dropdown-item" onClick={filterX} value="Aug">Aug</button>
                    <button className="dropdown-item" onClick={filterX} value="Sep">Sep</button>
                    <button className="dropdown-item" onClick={filterX} value="Oct">Oct</button>
                    <button className="dropdown-item" onClick={filterX} value="Nov">Nov</button>
                    <button className="dropdown-item" onClick={filterX} value="Dec">Dec</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={filterX} value="All">All</button>
                </div>
            </div>
            {console.log(data)}
            {filteredData? <BarGraph data={filteredData}/> : null}
        </div>
    )
}

export default BarGraphContainer;