import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios;'

class App extends Component {
  state = {
    "testValue": "getting..."
  }
  componentDidMount() {
    console.log("Mounting App");
    axios.get("/api/test", (result) => {
      console.log(result);
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The test value is: {this.state.testValue}
        </p>
      </div>
    );
  }
}

export default App;
