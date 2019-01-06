import React, { Component } from "react";
import "./App.css";
import PersonList from "./components/PersonList";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,email,id,picture&results=5"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <div className="person" key={item.id.name + item.name.first}>
              <img src={item.picture.large} alt="" />
              {item.name.first} {item.email}
            </div>
          ))}
        </div>
      );
    }
  }
}

export default App;
