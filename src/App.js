import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './core/Navigation';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
