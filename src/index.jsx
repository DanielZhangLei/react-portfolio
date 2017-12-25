// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Change contents without refreshing page
if (module.hot) {
  module.hot.accept();
}
