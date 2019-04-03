import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './App.css';

var Route = require('react-router-dom').Route;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createName: '',
      createID: '',
      confirmID: '',
      workIdent: ''
    }

    this.getWorkerID = this.getWorkerID.bind(this);
    this.logIn = this.logIn.bind(this);
    this.getCreatedID = this.getCreatedID.bind(this);
    this.getCreatedName = this.getCreatedName.bind(this);
    this.confirmID = this.confirmID.bind(this);
    this.addUser = this.addUser.bind(this);

  }

  getWorkerID(event) {
    // console.log('change detected ' + event.target.value);
    // console.log(`this.state is ${this.state.workIdent}`)
    this.setState({ workIdent: event.target.value });
  }

  logIn() {
    //  console.log(`worker ID is ${this.state.workIdent}`)
  }

  getCreatedName(event) {
    this.setState({createName: event.target.value});
  }

  getCreatedID(event) {
    this.setState({createID: event.target.value})
  }

  confirmID(event) {
    this.setState({confirmID: event.target.value})

  }

  addUser() {
    // console.log(this.state.createID, this.state.confirmID)
    if (this.state.createID === this.state.confirmID) {
      console.log(`your ID is confirmed`);
    } else {
      alert(`Your ID does not match`);
    }
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
                      <button onClick={this.logIn} id="submitID" className="btn btn-outline-secondary" type="button"> <Link to='/createworker'> create User</Link></button>
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
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.getCreatedName} type="text" className="form-control" id="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="createID">Create ID:</label>
                    <input onChange={this.getCreatedID} type="number" maxLength='6' className="form-control" id="createID" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmID">Confirm ID:</label>
                    <input onChange={this.confirmID} type="number" maxLength='6' className="form-control" id="createID" />
                  </div>
                  <button onClick={this.addUser}>click to create new account!</button>
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
