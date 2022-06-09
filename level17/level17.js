//get contract address
contract.address

//look the contract on rinkeby etherscan
// from the internal transactions tab, we can find the token address

let tokenAddress = "0xCf9f34E7078D1B2F89dF656Bc1e7c3120a1D69E5"

//confirm non-zero balance of token contract
await getBalance(tokenAddress);

//load the contract in remix using the address

//call the destroy method in remix, providing any other address

//confirm balance is now zero
await getBalance(tokenAddress);