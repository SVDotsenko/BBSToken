pragma solidity ^0.4.18;

contract TestContract {
    mapping(string => uint) balances;

    function addMoney(string k, uint amount) public{
        balances[k] += amount;
    }    
    
    function getTotalAmountByK(string k) view public returns(uint) {
        return balances[k];
    }
}