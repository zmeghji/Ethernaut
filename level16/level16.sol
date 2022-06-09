// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

contract Level16 {

  // public library contracts 
  address public timeZone1Library;
  address public timeZone2Library;
  address public owner; 
  uint storedTime;
  

  function setTime(uint _time) public {
    address player = 0xc994D3b8cd5471b0C02C445Ba2b88c239aA2ce7D;
    owner = player;
  }
}