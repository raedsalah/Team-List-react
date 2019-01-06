import React, { Component } from "react";
import "./App.css";
import PersonList from "./components/PersonList";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar Title="Team List" />
        <PersonList />
      </div>
    );
  }
}

export default App;
