import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Global } from '@emotion/core';
import globalStyles from './global.styles';

// Pages
import Sets from './pages/Sets';
import Cards from './pages/Cards';
import Card from './pages/Card';

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Router basename="/">
        <ul>
          <li>
            <Link to="/">Sets</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Sets />
          </Route>
          <Route path="/cards/:id">
            <Card />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
