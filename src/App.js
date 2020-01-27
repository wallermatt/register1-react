import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import register1 from './register1';

class App extends Component {
  state = {
    hash: '',
    description: '',
    message: '',
    lookup: '',
    l_registered: '',
    l_owner: '',
    l_timestamp: '',
    l_description: '',
    gasPrice: '2',
    nonce: '5',
    address: 0,
  };

  async componentDidMount() {
    this.setState({ message: 'Register1 is ready...' });
  }

   
  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    console.log('acc', accounts);
    const { hash, description, gasPrice, nonce, address } = this.state;

    this.setState({ message: 'Waiting on transaction success...' });
   
    await register1.methods.createRecord(hash, description).send({
      from: accounts[address],
      gasPrice: web3.utils.toWei(gasPrice, 'gwei'),
      nonce: nonce
    });
    

    this.setState({ message: 'Your record has been created!' });
  };

  onClick = async event => {
    event.preventDefault();


    console.log('lookup', this.state.lookup);

    let results = await register1.methods.getRecord(this.state.lookup).call();

    console.log('lookup', results[0]);

    this.setState({ l_registered: results[0], l_owner: results[1], l_timestamp: results[2], l_description: results[3] });
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
          <div>
            <label>Gas Price</label>
            <input value={this.state.gasPrice} onChange={event => this.setState({ gasPrice: event.target.value })} />
          </div>
          <div>
            <label>nonce</label>
            <input value={this.state.nonce} onChange={event => this.setState({ nonce: event.target.value })} />
          </div>
          <div>
            <label>Address</label>
            <input value={this.state.address} onChange={event => this.setState({ address: event.target.value })} />
          </div>
          <button>Enter</button>
        </form>
        <h4>Look Up Record</h4>
        <div>
          <input value={this.state.lookup} onChange={event => this.setState({ lookup: event.target.value })} />
        </div>
        <button onClick={this.onClick}>Look Up</button>
        <p>
          <label>Registered: </label>{this.state.l_registered.toString()}
        </p>
        <p>
          <label>Owner: </label>{this.state.l_owner}
        </p>
        <p>
          <label>Timestamp: </label>{this.state.l_timestamp}
        </p>
        <p>
          <label>Description: </label>{this.state.l_description}
        </p>
      </div>
    );
  }

}

export default App;
