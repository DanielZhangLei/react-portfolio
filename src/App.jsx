import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('../src/favicon.ico');
require('../src/manifest.json');

class App extends Component {
  render() {
    return (
      <div>
        <p>hello world</p>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
