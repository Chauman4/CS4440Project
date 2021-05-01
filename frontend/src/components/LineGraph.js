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
            yearminOccurred: '',
            yearmaxOccurred: '',
            collisions: [] 
          }
        }
    
        handleChangeminYear = (event) => {
          this.setState({ yearminOccurred: event.target.value });
          console.log(event.target.value);
        }
    
        handleChangemaxYear = (event) => {
          this.setState({ yearmaxOccurred: event.target.value });
          console.log(event.target.value);
        }
    
        handleSubmitGroupByDate = (event) => {
          axios.get(`http://localhost:5000/api/collisions/getGroupByDate/${encodeURIComponent(this.state.yearminOccurred)}/${encodeURIComponent(this.state.yearmaxOccurred)}`)
          .then((response) => {
              const data = response.data;
              var cleanedData = data.map((element, i) => ({
                label: element[Object.keys(element)[0]],
                value: element[Object.keys(element)[1]]
              }))
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
                <label >Enter minimum year: </label>
                  <input
                    id="minYear"
                    type="text"
                    value={this.state.yearminOccurred}
                    onChange={this.handleChangeminYear}
                    />
                <label >Enter maximum year: </label>
                <input
                  id="maxYear"
                  type="text"
                  value={this.state.yearmaxOccurred}
                  onChange={this.handleChangemaxYear}
                />
                <button type="submit" onClick={this.handleSubmitGroupByDate}>Submit</button>
            </form>
            <LineGraphCreation data={this.state.collisions}/>
          </div>
        )
    }
}

export default LineGraph;