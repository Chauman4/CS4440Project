import React, { useRef, useEffect, Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import LineGraphCreation from "./LineGraphCreation.js";
import rd3 from 'react-d3-library';

class LineGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            drNumber: '',
            dateOccured: '',
            timeOccured: '',
            areaName: '',
            victimSex: '',
            victimAge: '',
            victimMaxAge: '',
            victimMinAge: '',
            victimDescent: '',
            address: '',
            crossStreet: '',
            longitude: '',
            latitude: '',
            zipCode: '',
            quadrant: '',
            yearOccurred: '',
            collisions: [] 
          }
        }
    
        handleChangeYear = (event) => {
          this.setState({ yearOccurred: event.target.value });
          console.log(event.target.value);
        }
    
        handleSubmitGroupByDate = (event) => {
          axios.get(`http://localhost:5000/api/collisions/getGroupByDate/${encodeURIComponent(this.state.yearOccurred)}`)
          .then((response) => {
              const data = response.data;
              var cleanedData = data.map((element, i) => ({
                label: element[Object.keys(element)[0]],
                value: element[Object.keys(element)[1]]
              })).sort((a,b) => a.label > b.label ? 1 : -1)
              this.setState({ collisions : cleanedData});
              console.log(this.state.collisions);
              console.log('Data has been received!!');
          })
          .catch(() => {
              alert('Error retrieving data!!!');
          });
        }
                
      render() {
        return (
            <div>
              <form>
                <label >Enter year: </label>
                  <input
                    id="year"
                    type="text"
                    value={this.state.yearOccurred}
                    onChange={this.handleChangeYear}
                    />
                <button type="submit" onClick={this.handleSubmitGroupByDate}>Submit</button>
            </form>
            <LineGraphCreation data={this.state.collisions} year={this.state.yearOccurred}/>
          </div>
        )
    }
}

export default LineGraph;