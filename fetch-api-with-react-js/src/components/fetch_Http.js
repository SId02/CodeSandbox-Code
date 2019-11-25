import React from "react";
import "../styles.css";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(usr => (
            <li key={usr.id}>{usr.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
