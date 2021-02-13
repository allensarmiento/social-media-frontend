import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultPage: false };
  }

  componentDidMount() {}

  render() {
    return (
      <div></div>
    );
  }
}

export default withRouter(Home);
