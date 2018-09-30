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

const localhost8545 = 'http://localhost:8545';
const ropstenInfura = 'https://ropsten.infura.io/v3/22b273651d424974b7ef0de70a7ed880';
const ropstenEtherscan = 'https://ropsten.etherscan.io/tx/';
const contractAddress = '0x6c90732441c99b8c5f2d47f2280e1c5a00da89b6';
const privateKey1 = 'd3a8ec53b34da61c8e5e00ed5445424421cab147e9ffcc1c649ffa1a0a968ed5';
const privateKey2 = '0BE41454D39278B39482EF100EF379D7A24D97B4AB34348F562D2DA4B28DDA95';

function createWallet() {
  web3 = new Web3(new Web3.providers.HttpProvider(ropstenInfura));
  var newWalletAdress = web3.eth.accounts.wallet.create(1);//https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#wallet-create
  console.log("new wallet " + newWalletAdress[0].address + " private key " + newWalletAdress[0].privateKey);
}

function transfer(sender, senderPK, reciever, amount) {
  var web3 = new Web3(new Web3.providers.HttpProvider(ropstenInfura));

  web3.eth.getTransactionCount(sender, function (err, nonce) {
    var myContract = new web3.eth.Contract(contractABI, contractAddress);
    var tx = new ethereumjs.Tx({
      nonce: nonce,
      gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
      gasLimit: 100000,
      to: contractAddress,
      value: 0,
      data: myContract.methods.transfer(reciever, amount).encodeABI(),
    });

    tx.sign(ethereumjs.Buffer.Buffer.from(senderPK, 'hex'));

    web3.eth.sendSignedTransaction('0x' + tx.serialize().toString('hex'), function (err, transactionHash) {
      console.log(err ? err : ropstenEtherscan + transactionHash);
    });
  });
}

function w1Sends() {
  const senderWallet = document.getElementById('w1').value;
  const recieverWallet = document.getElementById('w2').value;
  const amount = document.getElementById('amount').value;
  transfer(senderWallet, privateKey1, recieverWallet, amount);
}

function w2Sends() {
  const senderWallet = document.getElementById('w2').value;
  const recieverWallet = document.getElementById('w1').value;
  const amount = document.getElementById('amount').value;
  transfer(senderWallet, privateKey2, recieverWallet, amount);
}

function balanceOf(walletAdress) {
  web3 = new Web3(typeof web3 !== 'undefined' ? web3.currentProvider : new Web3.providers.HttpProvider(localhost8545));
  var myContract = new web3.eth.Contract(contractABI, contractAddress);
  myContract.methods.balanceOf(walletAdress).call({ from: walletAdress }).then(function (result) {//https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-call
    console.log("wallet " + walletAdress + " balance is " + result + " BBS coins");
  });
}

function printBalances() {
  balanceOf(document.getElementById('w1').value);
  balanceOf(document.getElementById('w2').value);
}

function burn(publicKey, privateKey, amount) {
  var web3 = new Web3(new Web3.providers.HttpProvider(ropstenInfura));

  web3.eth.getTransactionCount(publicKey, function (err, nonce) {
    var myContract = new web3.eth.Contract(contractABI, contractAddress);
    var tx = new ethereumjs.Tx({
      nonce: nonce,
      gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
      gasLimit: 100000,
      to: contractAddress,
      value: 0,
      data: myContract.methods.burn(amount).encodeABI(),
    });

    tx.sign(ethereumjs.Buffer.Buffer.from(privateKey, 'hex'));

    web3.eth.sendSignedTransaction('0x' + tx.serialize().toString('hex'), function (err, transactionHash) {
      console.log(err ? err : ropstenEtherscan + transactionHash);
    });
  });
}

function burnW1() {
  const wallet = document.getElementById('w1').value;
  const amount = document.getElementById('amount').value;
  burn(wallet, privateKey1, amount);
}

function burnW2() {
  const wallet = document.getElementById('w2').value;
  const amount = document.getElementById('amount').value;
  burn(wallet, privateKey2, amount);
}

/*
function transferMM(sender, reciever, amount) {
  web3 = new Web3(typeof web3 !== 'undefined' ? web3.currentProvider : new Web3.providers.HttpProvider(localhost8545));

  var myContract = new web3.eth.Contract(contractABI, contractAddress);
  web3.eth.defaultAccount = sender;

  myContract.methods.transfer(reciever, amount).send({ from: sender }, function (err, transactionHash) {
    if (err) {
      console.log("err happend: " + err);
    } else {
      console.log("transaction Hash: " + transactionHash);
    }
  });
}

function w1SendsMM() {
  const senderWallet = document.getElementById('w1').value;
  const recieverWallet = document.getElementById('w2').value;
  const amount = document.getElementById('amount').value;
  transferMM(senderWallet, recieverWallet, amount);
}

function w2SendsMM() {
  const senderWallet = document.getElementById('w2').value;
  const recieverWallet = document.getElementById('w1').value;
  const amount = document.getElementById('amount').value;
  transferMM(senderWallet, recieverWallet, amount);
}
*/