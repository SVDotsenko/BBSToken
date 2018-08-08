var contractABI =
[
  {
    "constant": false,
    "inputs": [
      {
        "name": "k",
        "type": "string"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "addMoney",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "k",
        "type": "string"
      }
    ],
    "name": "getTotalAmountByK",
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

function go(addOrGet) {
  // web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/22b273651d424974b7ef0de70a7ed880'));
  web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/22b273651d424974b7ef0de70a7ed880'));

  // console.log(web3.version.api);
  // console.log(web3.eth.getBalance("0x5E042fbaB85dF501dFFB0AAD30e159d15BB388BD"));
  // console.log(web3.eth.getBalance("0xE7253fe2834559604dc917Cbe8420301912d0445"));  
  // web3.eth.defaultAccount=web3.eth.accounts[0];
  // console.log(web3.eth.accounts[0]);

  var myContract = web3.eth.contract(contractABI);
  var contractAddress = '0x44d95c2174855a2582bd74c91392d2f0ba4adfda';
  // console.log(myContract.at(contractAddress).getStr());
  if (addOrGet) {
    var myKey = document.getElementById('addKey').value;
    var myAmount = document.getElementById('addAmount').value;
    var walletAddress = '0x5E042fbaB85dF501dFFB0AAD30e159d15BB388BD';
    myContract.at(contractAddress).addMoney.sendTransaction(myKey, myAmount, { from: walletAddress, gasLimit: 400000, gasPrice: 1 }, function (err, ress) {
      alert('err '+ err + ' ress ' + ress);
    });
    // var Tx = require('ethereumjs-tx');
    // var rawTx = {
    //   // nonce: '0x00',
    //   gasPrice: '0x1',
    //   gasLimit: '0x6D7A',
    //   // to: '0x0000000000000000000000000000000000000000', 
    //   // value: '0x00', 
    //   data: '0x4e7774670000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000027177000000000000000000000000000000000000000000000000000000000000'
    // }    
    // var tx = new Tx(rawTx);
    // var privateKey = new Buffer('D3A8EC53B34DA61C8E5E00ED5445424421CAB147E9FFCC1C649FFA1A0A968ED5', 'hex');
    // tx.sign(privateKey);

    // var serializedTx = tx.serialize();
    // // console.log(serializedTx.toString('hex'));
    // // f889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f
    // web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
    //   if (!err)
    //     console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
    // });

  } else {
    alert(myContract.at(contractAddress).getTotalAmountByK(document.getElementById('getByKey').value));
    // console.log(myContract.at(contractAddress).getTotalAmountByK(document.getElementById('getByKey').value));
  }
}