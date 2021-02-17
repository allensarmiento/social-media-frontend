import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../api/auth';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultPage: false };
  }

  componentDidMount() {
    const { history } = this.props;
    this.setState({ defaultPage: isAuthenticated() });
    this.unlistenToHistory = history.listen(() => {
      this.setState({ defaultPage: isAuthenticated() });
    });
  }

  componentWillUnmount() {
    this.unlistenToHistory();
  }

  render() {
    const { defaultPage } = this.state;

    return (
      <div>
        {defaultPage ? (
          <div>
            <div>
              {/* News feed */}
            </div>
            <div>
              {/* Users */}
            </div>
          </div>
        ) : (
          <div>
            <div>
              Home Page
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Home);
