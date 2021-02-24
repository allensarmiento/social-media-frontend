import { Component } from 'react';
import { Link } from 'react-router-dom';
import * as user from '../api/user';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.abortController = new AbortController();
    
    user.list(this.abortController.signal).then((data) => {
      if (!data) return;

      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        this.setState({ users: data });
      }
    });
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h2>All Users</h2>
        <div>
          {users.map(user => (
            <Link to={`/user/${user._id}`} key={user._id}>
              {user.name} &rarr;
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
