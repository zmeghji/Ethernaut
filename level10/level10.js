//check current balance
await getBalance(contract.address)

//get contract address
contract.address

// deploy level 10 contract 

//set variable as newly deployed contract address
let level10Address = ""

// check balance of the contract (will be zero)
(await contract.balanceOf(level10Address)).toString()

//call the donate method on the level 10 contract with some ether in remix


//confirm the balance of the level 10 contract has changed
(await contract.balanceOf(level10Address)).toString()

//confirm the balance of the reentrance contract has changed
await getBalance(contract.address)

//in remix call the withdraw method of the level 10 contract to exploit the reentrancy vulnerability

//confirm that the balance of the reentrance contract is now 0
await getBalance(contract.address)
