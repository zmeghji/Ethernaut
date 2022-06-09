// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Level23 is ERC20 {
    constructor() ERC20("Level23", "L23") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function transferFrom(address from ,address to , uint256 amount) public override  returns (bool) 
    {
        return true;
    }
}