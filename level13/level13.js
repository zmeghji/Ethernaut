
//Gate 1 can be passed by simply executing the enter method from a contract
    //this way tx.origin won't match msg.sender

//Gate 3 has three parts
    //Part 1
        //uint32(uint64(_gateKey)) == uint16(uint64(_gateKey)
        // uint32(uint64(0x****************)) == uint16(uint64(0x****************)
        //uint32(0x****************) == uint16(0x****************)
        // 0x00000000******** == 0x000000000000****
        // So we know that the data input is of form ********0000****

    //Part 2
        //uint32(uint64(_gateKey)) != uint64(_gateKey)
        //uint32(uint64(0x****************)) != uint64(0x****************)
        //uint32(0x****************) != uint64(0x****************)
        //0x00000000******** != 0x****************
        // so at least one of the first 8 chars can't be 0 

    // Part 3
        // uint32(uint64(_gateKey)) == uint16(tx.origin)
        // 0x00000000******** == 0x000000000000YYYY
        // last 4 characters have to match address

        // as long as 
    
        // My address is 0xc994D3b8cd5471b0C02C445Ba2b88c239aA2ce7D
        // So I start with last 16 characters
        // 0xa2b88c239aA2ce7D
        // replace the second last set of 4 characters with 0
        // 0xa2b88c230000ce7D
        // this should work as a key

//Gate 2
    // requires providing just enough gas so the modulo operation gasleft().mod(8191) equals zero.
    //Do do this we need to debug using remix, we deploy the contracts with javascript vm i.e. both the gatekeeper contract and the attack contract (Level13)
