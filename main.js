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

// const Web3 = require("web3");

function addToRopsten() {
  go(true);
}

function getFromRopsten() {
  go(false);
}

const testNet = 'http://localhost:8545';
const contractAddress = '0x6c90732441c99b8c5f2d47f2280e1c5a00da89b6';
const walletAddress1 = '0x5e042fbab85df501dffb0aad30e159d15bb388bd';
const privateKey1 = 'd3a8ec53b34da61c8e5e00ed5445424421cab147e9ffcc1c649ffa1a0a968ed5'
const walletAddress2 = '0xE7253fe2834559604dc917Cbe8420301912d0445';

// function sendSigned(txData, cb) {
//   const privateKey = Buffer.from(privateKey1, 'hex')
//   const transaction = new Tx(txData)
//   transaction.sign(privateKey)
//   const serializedTx = transaction.serialize().toString('hex')
//   web3.eth.sendSignedTransaction('0x' + serializedTx, cb)
// }

function go(addOrGet) {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(testNet));
  }
  console.log(web3.version);
  var myContract = new web3.eth.Contract(contractABI, contractAddress);

  if (addOrGet) {
    // console.log('web3.eth.defaultAccount ' + web3.eth.defaultAccount);
    // var myKey = document.getElementById('addKey').value;
    // var myAmount = document.getElementById('addAmount').value;
    web3.eth.defaultAccount = walletAddress1;
    // console.log('web3.eth.defaultAccount ' + web3.eth.defaultAccount);

    // web3.eth.personal.unlockAccount(walletAddress1, privateKey1, 1000).then(data => console.log(data)).catch(err => console.log(err));

    // web3.eth.getTransactionCount(walletAddress1).then(txCount => {
    //   const txData = {  // construct the transaction data
    //     nonce: web3.utils.toHex(txCount),
    //     gasLimit: web3.utils.toHex(25000),
    //     gasPrice: web3.utils.toHex(10e9), // 10 Gwei
    //     to: walletAddress2,
    //     from: walletAddress1,
    //     value: web3.utils.toHex(web3.utils.toWei('3', 'wei'))
    //   }
    //   // fire away!
    //   sendSigned(txData, function (err, result) {
    //     if (err) return console.log('error', err)
    //     console.log('sent', result)
    //   })
    // })

    myContract.methods.burn(1).send({ from: walletAddress1 }, function (error, transactionHash) {//https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
      if (error) {
        console.log("err happend: " + error);
      } else {
        console.log("transaction Hash: " + transactionHash);
      }
    });

  } else {//https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-call
    myContract.methods.balanceOf(walletAddress1).call({ from: walletAddress1 }, function (error, result) {
      console.log("balance of the wallet " + walletAddress1 + " is " + result);
    });
    myContract.methods.balanceOf(walletAddress2).call({ from: walletAddress2 }, function (error, result) {
      console.log("balance of the wallet " + walletAddress2 + " is " + result);
    });
  }
}

function sendFromTo() {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(testNet));
  }
  console.log(web3.version);
  var myContract = new web3.eth.Contract(contractABI, contractAddress);
  web3.eth.defaultAccount = walletAddress1;

  // myContract.methods.transferFrom(walletAddress1, walletAddress2, 1).send({ from: walletAddress1 }, function (error, transactionHash) {
  //   if (error) {
  //     console.log("err happend: " + error);
  //   } else {
  //     console.log("transaction Hash: " + transactionHash);
  //   }
  // });

  myContract.methods.transfer(walletAddress2, 1).send({ from: walletAddress1 }, function (error, transactionHash) {
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