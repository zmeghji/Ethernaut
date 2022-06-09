//set some variables as a shortcut
let token1 = await contract.token1()
let token2 = await contract.token2()

//confirm token balance of player (10 of each)
(await contract.balanceOf(token1, player)).toString()
(await contract.balanceOf(token2, player)).toString()

//confirm token balance of dex (100 of each)
(await contract.balanceOf(token1, contract.address)).toString()
(await contract.balanceOf(token2, contract.address)).toString()

//check price for swapping two tokens
(await contract.getSwapPrice(token1, token2, 5)).toString()


//did equivalent in remix on the token contract directly (due to metamask issues)
await contract.approve(contract.address, 10)

//swap all token1 for token2 
await contract.swap(token1, token2, 10)

//confirm token balance of player (total should be 20)
(await contract.balanceOf(token1, player)).toString()
(await contract.balanceOf(token2, player)).toString()


//did equivalent in remix on the token contract directly (due to metamask issues)
await contract.approve(contract.address, 20)

//swap all token2 for token1
await contract.swap(token2, token1, 20)

//confirm token balance of player (total should be 24)
(await contract.balanceOf(token1, player)).toString()
(await contract.balanceOf(token2, player)).toString()

//did equivalent in remix on the token contract directly (due to metamask issues)
await contract.approve(contract.address, 24)

//swap all token1 for token2 
await contract.swap(token1, token2, 24)

//confirm token balance of player (total should be 30)
(await contract.balanceOf(token1, player)).toString()
(await contract.balanceOf(token2, player)).toString()


//did equivalent in remix on the token contract directly (due to metamask issues)
await contract.approve(contract.address, 30)

//swap all token2 for token1
await contract.swap(token2, token1, 30)

//confirm token balance of player (total should be 41)
(await contract.balanceOf(token1, player)).toString()
(await contract.balanceOf(token2, player)).toString()

//did equivalent in remix on the token contract directly (due to metamask issues)
await contract.approve(contract.address, 41)

//swap all token1 for token2 
await contract.swap(token1, token2, 41)

//confirm token balance of player (total should be 65)
(await contract.balanceOf(token1, player)).toString()
(await contract.balanceOf(token2, player)).toString()

//did equivalent in remix on the token contract directly (due to metamask issues)
await contract.approve(contract.address, 65)

// swapAmount = amountSent * (balanceToken1)/(balanceToken2)
// swapAmount *balanceToken2 = amountSent *balanceToken1
// amountSent = swapAmount* balanceToken2 /balanceToken1 
// amountSent = balanceToken1* balanceToken2 /balanceToken1 
let amountSent = (await contract.balanceOf(token2, contract.address))
await contract.swap(token2, token1, amountSent)

//confirm token1 balance of dex is 0
(await contract.balanceOf(token1, contract.address)).toString()

