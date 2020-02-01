// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');
if (!root) {
  throw new Error(
    'A div with an id of #root is required to mount the application.'
  );
}
ReactDOM.render(<App />, root);
