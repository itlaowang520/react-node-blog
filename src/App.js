import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Play from './Components/Play';
function App() {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path = '/about' component = {About} />
          <Route path = '/play' component = {Play} />
        </Switch>
      </Home>
    </Router>
  );
}

export default App;
