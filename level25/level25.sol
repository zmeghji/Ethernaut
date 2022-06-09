// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.7.0;


contract Level25 {
    function destroy() external{
        selfdestruct(tx.origin);
    }    
    
}