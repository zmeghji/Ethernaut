//we have to write the opcodes for the contract

//runtime opcodes
//push1 0x2a (what we're returning 2a = 42)
//push1 0x80 (location to store in memory)
//mstore
//push1 0x20 (number of bytes to return 0x20 = 32)
//push1 0x80 (where in memory the data we're returning is stored)
//return

// initialization opcodes
// push1 0x0a (number of runtime bytes)
// push1 0x0c (0c = 12, runtime codes start at position 12)
// push1 0x00 (where to store the runtime code in memory)
// codecopy (copy the runtime opcodes to memory)
// push 0x0a (how many runtime code bytes there are)
// push 0x00 (position in memory where runtime code is stored)
// return

//putting all these together we get
var bytecode = "0x600a600c600039600a6000f3602a60805260206080f3";

//create a contract using the above byte code
let result = await web3.eth.sendTransaction({ from: player, data: bytecode });

//set solver to the contract we just deployed
await contract.setSolver(result.contractAddress)