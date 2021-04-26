import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import MultiBarGraph from './MultiBarGraph';
import './BarGraphContainer.css';

class MultiBarGraphContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isOpen: false,
            filteredData: {},
            isActive: {},
            isAll: true
        }
    }

    componentDidMount() {
        var newIsActive = {}
        Object.keys(this.props.data).map((key) => 
            newIsActive[key] = this.props.data[key].map((element) => false)
        )
        this.setState({
            data: this.props.data,
            filteredData: this.props.data,
            isActive: newIsActive
        })
    }

    handleOpen = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleMenuItemClick = (e) => {
        if (e === "All") {
            var newIsActive = this.state.isActive
            Object.keys(this.state.isActive).map((key) => {
                newIsActive[key] = this.state.isActive[key].map((element) => false)
            })
            this.setState({
                isActive: newIsActive,
                isAll: true,
                filteredData: this.state.data
            })
        } else {
            var newIsActive = this.state.isActive 
            Object.keys(this.state.isActive).map((key) => {
                newIsActive[key][e] = !this.state.isActive[key][e]
            })
            this.setState({
                isActive: newIsActive
            }, () => {
                var newFilteredData = this.state.data
                var all = true;
                Object.keys(this.state.isActive).map((key) => {
                    if (this.state.isActive[key].every(element => !element) !== true) {
                        all = false;
                    }
                })
                if (all) {
                    this.setState({
                        filteredData: this.state.data
                    })
                } else {
                    var filteredData = {}
                    Object.keys(this.state.isActive).map((key) => {
                        Object.keys(this.state.data).map((key) => {
                            filteredData[key] = this.state.data[key].filter((element, idx) => this.state.isActive[key][idx])
                        })
                    })
                    this.setState({
                        isAll: false,
                        filteredData: filteredData
                    })
                }
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="btn-group">
                    {this.state.data && Object.keys(this.state.data).length ? 
                        <DropdownButton 
                            id="dropdown-basic-button" 
                            title="ZipCodes" 
                            show={this.state.isOpen} 
                            onClick={this.handleOpen}>
                            {
                                Object.keys(this.state.data).length ? this.state.data[Object.keys(this.state.data)[0]].map((element, idx) => {
                                    return (
                                        <Dropdown.Item as="option" key={idx} value={element.x} eventKey={idx} onSelect={this.handleMenuItemClick} active={this.state.isActive[Object.keys(this.state.isActive)[0]][idx]}>{element.x}</Dropdown.Item> 
                                    )
                                }) : null
                            }
                            <Dropdown.Divider/>
                            <Dropdown.Item as="button" value="All" eventKey="All" active={this.state.isAll} onSelect={this.handleMenuItemClick}>All</Dropdown.Item>
                        </DropdownButton>
                    : null}
                </div>
                {this.state.filteredData && Object.keys(this.state.filteredData).length ? <MultiBarGraph data={this.state.filteredData}/> : null}
            </div>
        )
    }
}

export default MultiBarGraphContainer;