pragma solidity ^0.4.18;

contract TestContract {
    string name;

    function setStr(string _name) public {
        name = _name;
    }
    
    function getStr() view public returns(string) {
        return name;
    }
}