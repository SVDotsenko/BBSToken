pragma solidity ^0.4.24;

import "./ERC20Burnable.sol";
// import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";

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