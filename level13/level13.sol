// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.3;

interface IGatekeeperOne {
  function enter(bytes8 _gateKey) external returns (bool);
}

contract Level13 {

    IGatekeeperOne private gateKeeper;

    constructor(IGatekeeperOne _gateKeeper) public {
        gateKeeper = _gateKeeper;
    }
    
    function enter(bytes8 key , uint gasAmount) external{
        // bytes8 key = bytes8(tx.origin) & 0xFFFFFFFF0000FFFF;
        // uint64 x = 1;
        // gateKeeper.enter(bytes8(x));

        //change to low level call

        gateKeeper.enter{gas: gasAmount}(key);
    }
}

pragma solidity ^0.6.3;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.2/contracts/math/SafeMath.sol';

contract GatekeeperOne {

  using SafeMath for uint256;
  address public entrant;

  modifier gateOne() {
    require(msg.sender != tx.origin);
    _;
  }

  modifier gateTwo() {
    require(gasleft().mod(8191) == 0);
    _;
  }

  modifier gateThree(bytes8 _gateKey) {
      require(uint32(uint64(_gateKey)) == uint16(uint64(_gateKey)), "GatekeeperOne: invalid gateThree part one");
      require(uint32(uint64(_gateKey)) != uint64(_gateKey), "GatekeeperOne: invalid gateThree part two");
      require(uint32(uint64(_gateKey)) == uint16(tx.origin), "GatekeeperOne: invalid gateThree part three");
    _;
  }

  function enter(bytes8 _gateKey) public gateOne gateTwo gateThree(_gateKey) returns (bool) {
    entrant = tx.origin;
    return true;
  }
}