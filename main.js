var contractABI =
  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "getAmountByHash",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "burner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TokensBurned",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "grantCoins",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INITIAL_SUPPLY",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
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
      "constant": true,
      "inputs": [],
      "name": "symbol",
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
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
  ;

function addToRopsten() {
  go(true);
}

function getFromRopsten() {
  go(false);
}

const testNet = 'http://localhost:8545';
const contractAddress = '0x6c90732441c99b8c5f2d47f2280e1c5a00da89b6';

function go(addOrGet) {
  const senderWallet = document.getElementById('swallet').value;
  const recieverWallet = document.getElementById('rwallet').value;

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(testNet));
  }

  console.log(web3.version);

  var myContract = new web3.eth.Contract(contractABI, contractAddress);

  if (addOrGet) {
    web3.eth.defaultAccount = senderWallet;
    myContract.methods.burn(1).send({ from: senderWallet }, function (error, transactionHash) {
      if (error) {
        console.log("err happend: " + error);
      } else {
        console.log("transaction Hash: " + transactionHash);
      }
    });

  } else {
    myContract.methods.balanceOf(senderWallet).call({ from: senderWallet }, function (error, result) {
      console.log("balance of the wallet " + senderWallet + " is " + result);
    });
    myContract.methods.balanceOf(recieverWallet).call({ from: recieverWallet }, function (error, result) {
      console.log("balance of the wallet " + recieverWallet + " is " + result);
    });
  }
}

function transferMetamask() {
  const senderWallet = document.getElementById('swallet').value;
  const recieverWallet = document.getElementById('rwallet').value;
  const amount = document.getElementById('amount').value;

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(testNet));
  }

  console.log(web3.version);
  var myContract = new web3.eth.Contract(contractABI, contractAddress);
  web3.eth.defaultAccount = senderWallet;

  myContract.methods.transfer(recieverWallet, amount).send({ from: senderWallet }, function (error, transactionHash) {
    if (error) {
      console.log("err happend: " + error);
    } else {
      console.log("transaction Hash: " + transactionHash);
    }
  });
}

function createWallet() {//https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#wallet-create
  web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/22b273651d424974b7ef0de70a7ed880'));
  var newWalletAdress = web3.eth.accounts.wallet.create(1);
  console.log("the new Wallet Adress is " + newWalletAdress[0].address);
  console.log("the private key from that adress is " + newWalletAdress[0].privateKey);
}

function transfer() {  
  const senderWallet = document.getElementById('swallet').value;
  const recieverWallet = document.getElementById('rwallet').value;
  const amount = document.getElementById('amount').value;

  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/22b273651d424974b7ef0de70a7ed880'));  
  web3.eth.getTransactionCount(senderWallet, function (err, nonce) {
    var myContract = new web3.eth.Contract(contractABI, contractAddress);
    var tx = new ethereumjs.Tx({
      nonce: nonce,
      gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
      gasLimit: 100000,
      to: contractAddress,
      value: 0,
      data: myContract.methods.transfer(recieverWallet, amount).encodeABI(),
    });
    
    const senderKey = 'd3a8ec53b34da61c8e5e00ed5445424421cab147e9ffcc1c649ffa1a0a968ed5';
    tx.sign(ethereumjs.Buffer.Buffer.from(senderKey, 'hex'));

    web3.eth.sendSignedTransaction('0x' + tx.serialize().toString('hex'), function (err, transactionHash) {
      if (err) {
        console.log(err);
      } else {
        console.log("transaction Hash: " + transactionHash);
      }
    });
  });
}
