import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      ID: 0
    })
    
     this.getWorkerID = this.getWorkerID.bind(this);
     this.showWorkerID = this.showWorkerID.bind(this);
  }

  getWorkerID(event) {
    this.setState = ({ ID: event.target.value });    
  }

  showWorkerID() {
   console.log(`worker ID ${this.state.ID}`)
  }
  render() {
    return (
      <div className="App">
        <h1>Primo Pizza and Pasta</h1>
        <h3> Please enter your ID Code</h3>
        <div className="input-group mb-3">
          <input onChange={this.getWorkerID}  type="number" className="form-control" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button onClick={this.showWorkerID}  id="submitID" className="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>

      </div>
    );
  }
}


export default App;
