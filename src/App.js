import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import register1 from './register1';

class App extends Component {
  state = {
    hash: '',
    description: '',
    message: ''
  };

  async componentDidMount() {
    this.setState({ message: 'Register1 is ready...' });
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
      </div>
    );
  }

}

export default App;
