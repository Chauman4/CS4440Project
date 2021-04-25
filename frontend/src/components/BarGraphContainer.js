import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BarGraph from './BarGraph';
import { Col, Form } from "react-bootstrap";

function BarGraphContainer(props) {    
    const [data, setData] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [filteredData, setFilteredData] = useState()
    const [isActive, setIsActive] = useState([])
    const [isAll, setIsAll] = useState(true)

    useEffect(() => {
        setData(props.data)
        setFilteredData(props.data)
        setIsActive(props.data.map((element) => false))
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
                <DropdownButton id="dropdown-basic-button" title="ZipCodes" show={isOpen} onClick={handleOpen}>
                {
                    data ? data.map((element, idx) => { 
                        console.log(element._id)
                        console.log(element.count)
                        return (
                            <Dropdown.Item as="option" value={element._id} eventKey={idx} onSelect={handleMenuItemClick} active={isActive[idx]}>{element._id}</Dropdown.Item> 
                        )
                    }) : null
                }
                <Dropdown.Divider/>
                <Dropdown.Item as="button" value="All" eventKey="All" active={isAll} onSelect={handleMenuItemClick}>All</Dropdown.Item>
                </DropdownButton>
            </div>
            {filteredData? <BarGraph data={filteredData}/> : null}
        </div>
    )
}

export default BarGraphContainer;