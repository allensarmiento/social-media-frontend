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
        {isAuthenticated() ? (
          <span>
            <Link to={`/user/${getAuthenticatedUser().user._id}`}>
              <button>My Profile</button>
            </Link>
            <button onClick={onSignOutClicked}>Sign Out</button>
          </span>
        ) : (
          <span>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default withRouter(Menu);
