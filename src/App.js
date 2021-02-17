import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './core/Navigation';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
