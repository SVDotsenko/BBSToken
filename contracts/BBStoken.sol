pragma solidity ^0.4.24;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";// https://openzeppelin.org/api/docs/token_ERC20_BurnableToken.html

contract BBSToken is BurnableToken {
  string public constant name = "BBSToken";
  string public constant symbol = "BBS";
  uint8 public constant decimals = 18;
  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  constructor() public payable {
    _mint(msg.sender, INITIAL_SUPPLY);
  }

  mapping(string => uint) hashes;
  
  function grantCoins(address _address, uint _amount, string _hash) public {
    if(getAmountByHash(_hash) == 0){
      _mint(_address, _amount);
      hashes[_hash]=_amount;
    }
  }

  function getAmountByHash(string _hash)public returns (uint){
    return hashes[_hash];
  }
}

/* JS VM wallets
0xca35b7d915458ef540ade6068dfe2f44e8fa733c
0x14723a09acff6d2a60dcdf7aa4aff308fddc160c 
0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db 
0x583031d1113ad414f02576bd6afabfb302140225
0xdd870fa1b7c4700f2bd7f44238821c26f7392148

contract adress
0x692a70d2e424a56d2c6c27aa97d1a86395877b3a
*/