import web3 from './web3';
import Register1 from './build/Register1.json'

// Rinkeby
//const address = '0x71ed3E7fCa6eAF3f1f3cce1d57FEe066d38c8682';

// Mainnet
const address = '0x4799928F91764748A11C634D9CcD1f22064709f9';

const instance = new web3.eth.Contract(
	JSON.parse(Register1.interface),
	address
);

export default instance;

/*
const abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "records",
		"outputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "information",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "recordAddress",
				"type": "address"
			}
		],
		"name": "getRecord",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "information",
				"type": "string"
			}
		],
		"name": "createRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

export default new web3.eth.Contract(abi, address);
*/