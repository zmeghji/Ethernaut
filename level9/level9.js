//check current king 
await contract._king()

//check current prize
(await contract.prize()).toString()

//get contract address
contract.address 

//call become king method of level9 contract, sending more ether than the current prize


//confirm king has chnaged
await contract._king()

//submit contract!