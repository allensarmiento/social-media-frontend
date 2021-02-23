import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './core/Navigation';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Users from './components/Users';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
