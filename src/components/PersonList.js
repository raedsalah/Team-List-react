import React from "react";
import Person from "./Person";

class PersonList extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,email,id,picture&results=8"
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
      return (
        <div>
          Error: {error.message}
          {console.log(items)}
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="row">
          {items.map(item => (
            <Person
              className="person"
              Key={item.id.name + item.name.first}
              imgSrc={item.picture.large}
              Title={item.name.title}
              FName={item.name.first}
              Email={item.email}
            >
              This is the description however the api does not have any
              description
            </Person>
          ))}
        </div>
      );
    }
  }
}

export default PersonList;
