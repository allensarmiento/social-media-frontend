import { Link, withRouter } from 'react-router-dom';
import { getAuthenticatedUser, isAuthenticated, signout } from '../api/auth';

const Menu = ({ history }) => {
  const onSignOutClicked = () => {
    signout(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <div>
        <h1>Social Media</h1>
        <Link to="/">Home</Link>
        {isAuthenticated() && (
          <span>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button>Sign In</Button>
            </Link>
          </span>
        )}
        {isAuthenticated() && (
          <span>
            <Link to={`/user/${getAuthenticatedUser().user._id}`}>
              <Button>My Profile</Button>
            </Link>
            <Button onClick={onSignOutClicked}>Sign Out</Button>
          </span>
        )}
      </div>
    </div>
  );
};

export default withRouter(Menu);
