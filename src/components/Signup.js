import { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../api/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      dialogOpen: false,
    };
  }

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSignupClicked = () => {
    const { name, email, password } = this.state;
    const user = { name, email, password };
    signup(user).then((data) => {
      if (!data) return;

      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ error: '', dialogOpen: true });
      }
    });
  };

  render() {
    const { name, email, password, error, dialogOpen } = this.state;

    return (
      <div>
        <h1>Sign Up</h1>
        <input
          placeholder="Name"
          value={name}
          onChange={this.handleInputChange('name')}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={this.handleInputChange('email')}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.handleInputChange('password')}
        />
        <br />
        {error && (
          <div>
            error {error}
          </div>
        )}
        <button onClick={this.onSignupClicked}>Register</button>
        {dialogOpen && (
          <div>
            <div>New account created successfully</div>
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Signup;
