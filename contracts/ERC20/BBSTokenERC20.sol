pragma solidity ^0.4.24;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";// https://openzeppelin.org/api/docs/token_ERC20_BurnableToken.html

contract BBSTokenERC20 is ERC20Burnable {
    string public constant name = "BBSTokenERC20";
    string public constant symbol = "BBS_ERC20";
    uint8 public constant decimals = 18;
  // uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));
    uint256 public constant INITIAL_SUPPLY = 1000;

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

Ropsten wallets

0x5E042fbaB85dF501dFFB0AAD30e159d15BB388BD
0xE7253fe2834559604dc917Cbe8420301912d0445

*/