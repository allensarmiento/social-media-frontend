import { Component } from 'react';
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
    return (
      <div></div>
    );
  }
}

export default Users;
