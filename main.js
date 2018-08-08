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
  } else {
    alert(myContract.at(contractAddress).getTotalAmountByK(document.getElementById('getByKey').value));
    // console.log(myContract.at(contractAddress).getTotalAmountByK(document.getElementById('getByKey').value));
  }
}