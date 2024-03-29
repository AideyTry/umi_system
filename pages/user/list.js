import React from "react";
import Link from 'umi/link'
export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    let usersStr = localStorage.getItem("users");
    let users = usersStr ? JSON.parse(usersStr) : [];
    this.setState({ users });
  }
  render() {
    return (
      <>
        <ul className="list-group">
          {this.state.users.map(user => (
            <li className="list-group-item" key={user.id}>
              <Link to={{pathname: `/user/detail/${user.id}`, state: user}}>{user.username}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
