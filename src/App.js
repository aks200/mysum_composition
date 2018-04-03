import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import First from "./components/First";
//import Mysum from "./components/Mysum";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        
        </p>
        <Message message="WELCOME" />
        <br/>
        <First arr="This is my First React Application"/>
      
      </div>

    );
  }
}

export default App;
