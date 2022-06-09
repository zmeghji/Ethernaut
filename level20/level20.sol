// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;


contract Level20 {

    uint[] public arr ; 
    //ssload opcode takes 20000 gas so more than 50 of them would exceed our 1 million gas limit
    receive() external payable {

        for (uint i = 0; i < 52; i ++){
            arr.push(i);
        }
    }
}