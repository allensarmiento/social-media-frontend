import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './core/Navigation';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
