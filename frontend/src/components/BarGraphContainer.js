import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BarGraph from './BarGraph';
import { Col, Form } from "react-bootstrap";
import './BarGraphContainer.css';

function BarGraphContainer(props) {    
    const [data, setData] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [filteredData, setFilteredData] = useState()
    const [isActive, setIsActive] = useState([])
    const [isAll, setIsAll] = useState(true)
    const [orientation, setOrientation] = useState()
    const [xAxis, setXAxis] = useState()
    const [yAxis, setYAxis] = useState()

    useEffect(() => {
        setData(props.data)
        // var cleanedData = props.data.map((element) => ({
        //     x: element[Object.keys(element)[0]],
        //     y: element[Object.keys(element)[1]]
        // })).sort((a, b) => a.x > b.x ? 1 : -1)
        setFilteredData(props.data)
        setIsActive(props.data.map((element) => false))
        setOrientation(props.orientation)
        setXAxis(props.xAxis)
        setYAxis(props.yAxis)
        console.log("should run once")
    }, [props.data])

    function handleOpen(e) {
        setIsOpen(!isOpen)
    }

    function handleMenuItemClick(e) {
        var newIsActive = isActive
        if (e === "All") {
            newIsActive = isActive.map(e => false)
            setIsActive(newIsActive)
            setIsAll(true)
            setFilteredData(data)
        } else {
            newIsActive[e] = !newIsActive[e]
            setIsActive(newIsActive)
            if (isActive.every(element => !element) === true) {
                setFilteredData(data)
            } else {
                var filteredData = data.filter((element, idx) => isActive[idx])
                setIsAll(false)
                setFilteredData(filteredData)
            }
        }
    }

    return (
        <div className="container">
            <div className="btn-group">
                {console.log("HERE", data)}
                {data && data.length ? 
                    <DropdownButton 
                        id="dropdown-basic-button" 
                        title={xAxis} 
                        show={isOpen} 
                        onClick={handleOpen}>
                        {
                            console.log(data),
                            data ? data.map((element, idx) => { 
                                console.log(element)
                                return (
                                    <Dropdown.Item as="option" key={idx} value={element.x} eventKey={idx} onSelect={handleMenuItemClick} active={isActive[idx]}>{element.x}</Dropdown.Item> 
                                )
                            }) : null
                        }
                        <Dropdown.Divider/>
                        <Dropdown.Item as="button" value="All" eventKey="All" active={isAll} onSelect={handleMenuItemClick}>All</Dropdown.Item>
                    </DropdownButton>
                : null}
            </div>
            {filteredData? <BarGraph orientation={orientation} xAxis={xAxis} yAxis={yAxis} data={filteredData}/> : null}
        </div>
    )
}

export default BarGraphContainer;