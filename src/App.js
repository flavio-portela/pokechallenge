import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Global } from '@emotion/core';
import { Provider } from 'react-redux';
import configureStore, { sagaMiddleware } from './redux/configureStore';
import rootSaga from './redux/sagas';
import globalStyles from './global.styles';

// Pages
import Sets from './pages/Sets';
import Cards from './pages/Cards';
import Card from './pages/Card';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <Sets />
          </Route>
          <Route path="/cards/:setId">
            <Cards />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

sagaMiddleware.run(rootSaga);

export default App;
