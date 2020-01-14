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
        <p>
          Message: {this.state.message}
        </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Create New Record</h4>
          <div>
            <label>Hash</label>
            <input value={this.state.hash} onChange={event => this.setState({ value: event.target.hash })} />
          </div>
          <div>
            <label>Description</label>
            <input value={this.state.description} onChange={event => this.setState({ value: event.target.description })} />
          </div>
          <button>Enter</button>
        </form>
      </div>
    );
  }

}

export default App;
