import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signin, authenticate } from '../api/auth';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      redirect: false
    };
  }

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSigninClicked = () => {
    const { email, password } = this.state;
    const user = { email, password };
    signin(user).then((data) => {
      if (!data) return;

      if (data.error) {
        this.setState({ error: data.error });
      } else {
        authenticate(data, () => {
          this.setState({ error: '', redirect: true });
        });
      }
    });
  };

  render() {
    const { email, password, error, redirect } = this.state;

    if (redirect) {
      const { from } = this.props.location.state ||
        { from: { pathname: '/' }};

      return <Redirect to={from} />
    }

    return (
      <div>
        <h1>Sign in</h1>
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
        <button onClick={this.onSigninClicked}>Login</button>
      </div>
    );
  }
}

export default Signin;
