// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;



contract Level7 {

    constructor(){
        
    }
    //simply call this method to change owner
    function end(address payable recipient) external {
        selfdestruct(recipient);
    }
    receive() external payable {

    }
    
}