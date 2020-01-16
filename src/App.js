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

   
  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    console.log('acc', accounts[0]);
    const { hash, description } = this.state;

    this.setState({ message: 'Waiting on transaction success...' });
   
    await register1.methods.createRecord(hash, description).send({
      from: accounts[0]
    });
    

    this.setState({ message: 'You have been entered!' });
  };

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
            <input value={this.state.hash} onChange={event => this.setState({ hash: event.target.value })} />
          </div>
          <div>
            <label>Description</label>
            <input value={this.state.description} onChange={event => this.setState({ description: event.target.value })} />
          </div>
          <button>Enter</button>
        </form>
      </div>
    );
  }

}

export default App;
