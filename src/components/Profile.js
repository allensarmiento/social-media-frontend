import { Component } from 'react';
import { getAuthenticatedUser } from '../api/auth';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      user: { following: [], followers: [] },
      posts: [],
      redirectToSignIn: false,
      following: false
    };
  }

  componentDidMount() {
    this.abortController = new AbortController();
    
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Profile;
