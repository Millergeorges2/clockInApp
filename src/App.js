import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './App.css';

var Route = require('react-router-dom').Route;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workIdent: '',
      createID: '',
      createName: ''
    }

    this.getWorkerID = this.getWorkerID.bind(this);
    this.showWorkerID = this.showWorkerID.bind(this);
    this.getCreatedID = this.getCreatedID.bind(this);
    this.getCreatedName = this.getCreatedName.bind(this);
  }

  getWorkerID(event) {
    // console.log('change detected ' + event.target.value);
    // console.log(`this.state is ${this.state.workIdent}`)
    this.setState({ workIdent: event.target.value });
  }

  showWorkerID() {
    //  console.log(`worker ID is ${this.state.workIdent}`)
  }

  getCreatedName(event) {
    this.setState({createName: event.target.value});
  }

  getCreatedID(event) {
    this.setState({createID: event.target.value})
  }


  render() {
    return (
      <Router>
        <div className="App">

          <Route path='/' exact render={
            () => {
              return (
                <div>
                  <h1>Primo Pizza and Pasta</h1>
                  <h3> Please enter your ID Code</h3>
                  <div className="input-group mb-3">
                    <input onChange={this.getWorkerID} type="number" className="form-control" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button onClick={this.showWorkerID} id="submitID" className="btn btn-outline-secondary" type="button"> <Link to='/createworker'> create User</Link></button>
                    </div>
                  </div>
                </div>
              );
            }
          } />

          <Route path='/createworker' exact render={
            () => {
              return (
                <div>

                  <h2> Create Worker Account</h2>
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="Name" />
                  </div>
                  <div class="form-group">
                    <label for="createID">Create ID:</label>
                    <input type="number" maxLength='6' class="form-control" id="createID" />
                  </div>
                </div>
              )
            }
          } />
        </div>
      </Router>
    );
  }
}


export default App;
