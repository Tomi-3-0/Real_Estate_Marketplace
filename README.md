# Udacity Blockchain Capstone

## Introduction
At present, property titles are often paper-based, creating opportunities for errors and fraud. Title professionals find defects in 25% of all titles during the transaction process, according to the American Land Title Association.

Any identified defect makes it illegal to transfer a property title to a buyer until it is rectified. This means property owners often incur high legal fees to ensure authenticity and accuracy of their property titles.

Moreover, title fraud poses a risk to homeowners worldwide. US losses associated with title fraud reportedly averaged around $103,000 per case in 2015, compelling many property buyers to purchase title insurance.

These title management issues could potentially be mitigated by using blockchain technology to build immutable digital records of land titles and using blockchain for transparent transactions. This approach could simplify property title management, making it more transparent and helping to reduce the risk of title fraud and the need for additional insurance.

In this project we minted our own tokens to represent title to the properties. Before the token is minted, the property will be verified. zk-SNARKs will bw used to create a verification system which can prove title to the property without revealing that specific information on the property.

Once the token has been verified it will be placed on a blockchain market place (OpenSea) for others to purchase.

## Package versions used:
* Truffle v5.0.15 (core: 5.0.15)
* Solidity - 0.5.2 (solc-js)
* Node v10.15.3
* Web3.js v1.5.3

## Getting Started
This repository contains Smart Contract code written in solidity and tests using Javascript. 
To run the code: Download the project folder and open in your preferred code editor e.g Visual Studio Code
* Navigate to your project folder: `cd Real Estate Capstone Project`
* Then run `npm install`
* Navigate to eth-contracts folder  and then run ```npx truffle compile```
  Use npx truffle compile to compile contracts as oraclize.sol was failing to compile with truffle compile. [Read more](https://medium.com/blockchangers/how-to-fix-your-truffle-and-solidity-versioning-with-npx-from-npm-51b5fcb0825f)
 
## How to generate proof with zokrates
* Navigate to folder zokrates\code\
* Run zokrates docker image `docker run -v $(pwd):/home/zokrates/code -it zokrates/zokrates:0.3.0 /bin/bash`
* compile the program by: 
  - `cd code`
  - `~zokrates compile -i square/square.code`
* Generate the trusted setup by: 
  - `~/zokrates setup`
* Compute witness for your desired pair of number by running 
  ` ~/zokrates compute-witness -a 10 100`
* Generate proof `~/zokrates generate-proof`
* Generate verifier.sol `~/zokrates export-verifier`

## Pass Truffle Test using local development blockchain
After compiling the contracts, run the following command:
`truffle develop`
This will create a local developement blockchain. Inside the terminal run the following command: `truffle test`

## Contract deployment on Goerli
Deploy the contract to goerli network by running: `truffle deploy --network goerli`

* Account: 0x21180db4a88a0Aa5F0573d77A1BFcF7D7Ea4E3EF
* SolnSquareVerifier contract address: 0x8b485436c95c9381cb498a650ea4157d51af943e
* Verifier contract: 0x203b47cd61bcb569fcca830a965a03c1d5f9ab93

![Deployment on goerli network](\Real_Estate_Capstone_Project\Screenshot350.png "Contract deployment on goerli network")

## Mint tokens by running
`node mint-goerli.js`
![Minting tokens](\Real_Estate_Capstone_Project\Screenshot351.png "Minting tokens")

## Contract ABIs
contract ABI can be found in the following folder: eth-contracts/build/contracts
### Contract ABI for SolnSquareVerifier:
```
{
  "contractName": "SolnSquareVerifier",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        },
        {
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "solVerifier",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "solVerifierAddr",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "solIndex",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "solAddress",
          "type": "address"
        }
      ],
      "name": "SolutionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "idx",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "TokenMinted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_idx",
          "type": "uint256"
        },
        {
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "addSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "A",
          "type": "uint256[2]"
        },
        {
          "name": "A_p",
          "type": "uint256[2]"
        },
        {
          "name": "B",
          "type": "uint256[2][2]"
        },
        {
          "name": "B_p",
          "type": "uint256[2]"
        },
        {
          "name": "C",
          "type": "uint256[2]"
        },
        {
          "name": "C_p",
          "type": "uint256[2]"
        },
        {
          "name": "H",
          "type": "uint256[2]"
        },
        {
          "name": "K",
          "type": "uint256[2]"
        },
        {
          "name": "input",
          "type": "uint256[2]"
        },
        {
          "name": "index",
          "type": "uint256"
        },
        {
          "name": "to",
          "type": "address"
        }
      ],
      "name": "mintNewToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162003f0a38038062003f0a833981018060405260608110156200003757600080fd5b810190808051906020019092919080516401000000008111156200005a57600080fd5b828101905060208101848111156200007157600080fd5b81518560018202830111640100000000821117156200008f57600080fd5b50509291906020018051640100000000811115620000ac57600080fd5b82810190506020810184811115620000c357600080fd5b8151856001820283011164010000000082111715620000e157600080fd5b5050929190505050818181816040518060600160405280603f815260200162003ecb603f9139336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060146101000a81548160ff021916908315150217905550620001d46301ffc9a760e01b620002b660201b60201c565b620001ec6380ac58cd60e01b620002b660201b60201c565b6200020463780e9d6360e01b620002b660201b60201c565b82600f90805190602001906200021c92919062000358565b5081601090805190602001906200023592919062000358565b5080601190805190602001906200024e92919062000358565b5062000267635b5e139f60e01b620002b660201b60201c565b505050505082601560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000407565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151515620002ec57600080fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039b57805160ff1916838001178555620003cc565b82800160010185558215620003cc579182015b82811115620003cb578251825591602001919060010190620003ae565b5b509050620003db9190620003df565b5090565b6200040491905b8082111562000400576000816000905550600101620003e6565b5090565b90565b613ab480620004176000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80634f6ccce7116100f9578063a22cb46511610097578063ccd0ef6911610071578063ccd0ef6914610e34578063d547cfb714610e82578063e985e9c514610f05578063f2fde38b14610f81576101a9565b8063a22cb46514610c38578063b88d4fde14610c88578063c87b56dd14610d8d576101a9565b806382a6099e116100d357806382a6099e14610b175780638456cb5914610b61578063893d20e814610b6b57806395d89b4114610bb5576101a9565b80634f6ccce714610a0f5780636352211e14610a5157806370a0823114610abf576101a9565b806327dc297e116101665780633f4ba83a116101405780633f4ba83a1461066157806340c10f191461066b57806342842e0e146106d15780634d2c863b1461073f576101a9565b806327dc297e146103de5780632f745c59146104a357806338bbfa5014610505576101a9565b806301ffc9a7146101ae57806306fdde0314610213578063081812fc14610296578063095ea7b31461030457806318160ddd1461035257806323b872dd14610370575b600080fd5b6101f9600480360360208110156101c457600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610fc5565b604051808215151515815260200191505060405180910390f35b61021b61102d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025b578082015181840152602081019050610240565b50505050905090810190601f1680156102885780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c2600480360360208110156102ac57600080fd5b81019080803590602001909291905050506110cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103506004803603604081101561031a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061110c565b005b61035a611318565b6040518082815260200191505060405180910390f35b6103dc6004803603606081101561038657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611325565b005b6104a1600480360360408110156103f457600080fd5b81019080803590602001909291908035906020019064010000000081111561041b57600080fd5b82018360208201111561042d57600080fd5b8035906020019184600183028401116401000000008311171561044f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061134a565b005b6104ef600480360360408110156104b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061138d565b6040518082815260200191505060405180910390f35b61065f6004803603606081101561051b57600080fd5b81019080803590602001909291908035906020019064010000000081111561054257600080fd5b82018360208201111561055457600080fd5b8035906020019184600183028401116401000000008311171561057657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105d957600080fd5b8201836020820111156105eb57600080fd5b8035906020019184600183028401116401000000008311171561060d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611404565b005b610669611409565b005b6106b76004803603604081101561068157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061159a565b604051808215151515815260200191505060405180910390f35b61073d600480360360608110156106e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116e7565b005b610a0d60048036036102c081101561075657600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b8282101561084c578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050815260200190600101906107f8565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611707565b005b610a3b60048036036020811015610a2557600080fd5b8101908080359060200190929190505050611b9d565b6040518082815260200191505060405180910390f35b610a7d60048036036020811015610a6757600080fd5b8101908080359060200190929190505050611bd5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610b0160048036036020811015610ad557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c12565b6040518082815260200191505060405180910390f35b610b1f611c62565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610b69611c88565b005b610b73611e1a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610bbd611e43565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610c8660048036036040811015610c4e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611ee5565b005b610d8b60048036036080811015610c9e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610d0557600080fd5b820183602082011115610d1757600080fd5b80359060200191846001830284011164010000000083111715610d3957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612021565b005b610db960048036036020811015610da357600080fd5b8101908080359060200190929190505050612049565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610df9578082015181840152602081019050610dde565b50505050905090810190601f168015610e265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610e8060048036036040811015610e4a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612112565b005b610e8a6122dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610eca578082015181840152602081019050610eaf565b50505050905090810190601f168015610ef75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610f6760048036036040811015610f1b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061237f565b604051808215151515815260200191505060405180910390f35b610fc360048036036020811015610f9757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612413565b005b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600f8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110c55780601f1061109a576101008083540402835291602001916110c5565b820191906000526020600020905b8154815290600101906020018083116110a857829003601f168201915b5050505050905090565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61111581611bd5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561119b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180613a566033913960400191505060405180910390fd5b6111a481611bd5565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806111eb57506111ea6111e482611bd5565b3361237f565b5b151561125f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f43616c6c6572206973206e6f7420617070726f7665640000000000000000000081525060200191505060405180910390fd5b816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166112d283611bd5565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000600880549050905090565b61132f338261261d565b151561133a57600080fd5b6113458383836126b2565b505050565b611389828260006040519080825280601f01601f1916602001820160405280156113835781602001600182028038833980820191505090505b50611404565b5050565b600061139883611c12565b821015156113a557600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156113f157fe5b9060005260206000200154905092915050565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114b0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b60011515600060149054906101000a900460ff16151514151561153b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436f6e74726163742069732063757272656e746c79206163746976650000000081525060200191505060405180910390fd5b60008060146101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa60405160405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611643576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b60001515600060149054906101000a900460ff1615151415156116ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436f6e74726163742069732063757272656e746c79207061757365640000000081525060200191505060405180910390fd5b6116d883836126d6565b6116e1826126f7565b92915050565b61170283838360405180602001604052806000815250612021565b505050565b818160008282604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140192505050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166014600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611845576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e20616c72656164792065786973747300000000000000000081525060200191505060405180910390fd5b601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe01ff628f8f8f8f8f8f8f8f8f6040518a63ffffffff1660e01b8152600401808a600260200280838360005b838110156118c65780820151818401526020810190506118ab565b5050505090500189600260200280838360005b838110156118f45780820151818401526020810190506118d9565b505050509050018860026000925b818410156119485782846020020151600260200280838360005b8381101561193757808201518184015260208101905061191c565b505050509050019260010192611902565b9250505087600260200280838360005b83811015611973578082015181840152602081019050611958565b5050505090500186600260200280838360005b838110156119a1578082015181840152602081019050611986565b5050505090500185600260200280838360005b838110156119cf5780820151818401526020810190506119b4565b5050505090500184600260200280838360005b838110156119fd5780820151818401526020810190506119e2565b5050505090500183600260200280838360005b83811015611a2b578082015181840152602081019050611a10565b5050505090500182600260200280838360005b83811015611a59578082015181840152602081019050611a3e565b505050509050019950505050505050505050602060405180830381600087803b158015611a8557600080fd5b505af1158015611a99573d6000803e3d6000fd5b505050506040513d6020811015611aaf57600080fd5b81019080805190602001909291905050501515611b34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f536f6c7574696f6e20766572696669636174696f6e206661696c65640000000081525060200191505060405180910390fd5b611b3e8585612112565b611b48848661159a565b508373ffffffffffffffffffffffffffffffffffffffff16857f3a5398bda6f1f57d6c96834fa9bf02b5517bdc847d14312015a917ba421c31c960405160405180910390a35050505050505050505050505050565b6000611ba7611318565b82101515611bb457600080fd5b600882815481101515611bc357fe5b90600052602060002001549050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000611c5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061284a565b9050919050565b601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611d2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b60001515600060149054906101000a900460ff161515141515611dba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436f6e74726163742069732063757272656e746c79207061757365640000000081525060200191505060405180910390fd5b6001600060146101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25860405160405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060108054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611edb5780601f10611eb057610100808354040283529160200191611edb565b820191906000526020600020905b815481529060010190602001808311611ebe57829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611f2057600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61202c848484611325565b61203884848484612858565b151561204357600080fd5b50505050565b606061205482612a43565b151561205f57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121065780601f106120db57610100808354040283529160200191612106565b820191906000526020600020905b8154815290600101906020018083116120e957829003601f168201915b50505050509050919050565b61211a61390b565b60405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff168152509050601381908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505060008383604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014019250505060405160208183030381529060405280519060200120905081601460008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508273ffffffffffffffffffffffffffffffffffffffff16847f078793128cefb19aac38a33f9e5df39f67716907f6d747e8065545699e0b2b8d60405160405180910390a350505050565b606060118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156123755780601f1061234a57610100808354040283529160200191612375565b820191906000526020600020905b81548152906001019060200180831161235857829003601f168201915b5050505050905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156124ba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561255f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f506c6561736520656e7465722076616c6964206164647265737300000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008061262983611bd5565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061269857508373ffffffffffffffffffffffffffffffffffffffff16612680846110cf565b73ffffffffffffffffffffffffffffffffffffffff16145b806126a957506126a8818561237f565b5b91505092915050565b6126bd838383612ab5565b6126c78382612d31565b6126d18282612ed5565b505050565b6126e08282612f9c565b6126ea8282612ed5565b6126f381613211565b5050565b61270081612a43565b1515612774576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f5468697320746f6b656e20646f6573206e6f742065786973740000000000000081525060200191505060405180910390fd5b61282060118054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561280d5780601f106127e25761010080835404028352916020019161280d565b820191906000526020600020905b8154815290600101906020018083116127f057829003601f168201915b505050505061281b8361325d565b613397565b60126000838152602001908152602001600020908051906020019061284692919061393b565b5050565b600081600001549050919050565b60006128798473ffffffffffffffffffffffffffffffffffffffff166133db565b15156128885760019050612a3b565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612963578082015181840152602081019050612948565b50505050905090810190601f1680156129905780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156129b257600080fd5b505af11580156129c6573d6000803e3d6000fd5b505050506040513d60208110156129dc57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b612abe81611bd5565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515612b43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180613a336023913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612be8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f64657374696e6174696f6e2061646472657373206973206e6f742076616c696481525060200191505060405180910390fd5b612bf181613426565b612c38600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206134e6565b612c7f600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613509565b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000612d896001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061351f90919063ffffffff16565b90506000600760008481526020019081526020016000205490508181141515612e7c576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612dfa57fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612e5457fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612ece91906139bb565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515613073576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e20616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515613118576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f496e76616c69642064657374696e6174696f6e2061646472657373000000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506131b1600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613509565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b606060008214156132a5576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613392565b600082905060005b6000821415156132d3578080600101915050600a828115156132cb57fe5b0491506132ad565b6060816040519080825280601f01601f1916602001820160405280156133085781602001600182028038833980820191505090505b50905060006001830390505b60008614151561338a57600a8681151561332a57fe5b0660300160f81b82828060019003935081518110151561334657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8681151561338257fe5b049550613314565b819450505050505b919050565b60606133d38383604051806020016040528060008152506040518060200160405280600081525060405180602001604052806000815250613569565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561341d57506000801b8214155b92505050919050565b600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156134e35760006003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6134fe6001826000015461351f90919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600061356183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613849565b905092915050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f1916602001820160405280156135c55781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b88518110156136505788818151811015156135f357fe5b90602001015160f81c60f81b838380600101945081518110151561361357fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506135dc565b600090505b87518110156136c957878181518110151561366c57fe5b90602001015160f81c60f81b838380600101945081518110151561368c57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613655565b600090505b86518110156137425786818151811015156136e557fe5b90602001015160f81c60f81b838380600101945081518110151561370557fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506136ce565b600090505b85518110156137bb57858181518110151561375e57fe5b90602001015160f81c60f81b838380600101945081518110151561377e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613747565b600090505b84518110156138345784818151811015156137d757fe5b90602001015160f81c60f81b83838060010194508151811015156137f757fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506137c0565b82995050505050505050505095945050505050565b600083831115829015156138f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156138bd5780820151818401526020810190506138a2565b50505050905090810190601f1680156138ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b604051806040016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061397c57805160ff19168380011785556139aa565b828001600101855582156139aa579182015b828111156139a957825182559160200191906001019061398e565b5b5090506139b791906139e7565b5090565b8154818355818111156139e2578183600052602060002091820191016139e191906139e7565b5b505050565b613a0991905b80821115613a055760008160009055506001016139ed565b5090565b9056fe596f7520617265206e6f7420746865206f776e6572206f66207468697320636f6e747261637466726f6d2061646472657373206973206e6f742074686520746f6b656e206f776e657274686520676976656e206164647265737320697320616c726561647920746865206f776e6572206f662074686520746f6b656ea165627a7a72305820eeb5495ce2d1ff2ad2d7d3ff237698e8f9747bfee788cb0fbeec9dd469db2020002968747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f756461636974792d626c6f636b636861696e2f63617073746f6e652f",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101a95760003560e01c80634f6ccce7116100f9578063a22cb46511610097578063ccd0ef6911610071578063ccd0ef6914610e34578063d547cfb714610e82578063e985e9c514610f05578063f2fde38b14610f81576101a9565b8063a22cb46514610c38578063b88d4fde14610c88578063c87b56dd14610d8d576101a9565b806382a6099e116100d357806382a6099e14610b175780638456cb5914610b61578063893d20e814610b6b57806395d89b4114610bb5576101a9565b80634f6ccce714610a0f5780636352211e14610a5157806370a0823114610abf576101a9565b806327dc297e116101665780633f4ba83a116101405780633f4ba83a1461066157806340c10f191461066b57806342842e0e146106d15780634d2c863b1461073f576101a9565b806327dc297e146103de5780632f745c59146104a357806338bbfa5014610505576101a9565b806301ffc9a7146101ae57806306fdde0314610213578063081812fc14610296578063095ea7b31461030457806318160ddd1461035257806323b872dd14610370575b600080fd5b6101f9600480360360208110156101c457600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610fc5565b604051808215151515815260200191505060405180910390f35b61021b61102d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025b578082015181840152602081019050610240565b50505050905090810190601f1680156102885780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c2600480360360208110156102ac57600080fd5b81019080803590602001909291905050506110cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103506004803603604081101561031a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061110c565b005b61035a611318565b6040518082815260200191505060405180910390f35b6103dc6004803603606081101561038657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611325565b005b6104a1600480360360408110156103f457600080fd5b81019080803590602001909291908035906020019064010000000081111561041b57600080fd5b82018360208201111561042d57600080fd5b8035906020019184600183028401116401000000008311171561044f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061134a565b005b6104ef600480360360408110156104b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061138d565b6040518082815260200191505060405180910390f35b61065f6004803603606081101561051b57600080fd5b81019080803590602001909291908035906020019064010000000081111561054257600080fd5b82018360208201111561055457600080fd5b8035906020019184600183028401116401000000008311171561057657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105d957600080fd5b8201836020820111156105eb57600080fd5b8035906020019184600183028401116401000000008311171561060d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611404565b005b610669611409565b005b6106b76004803603604081101561068157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061159a565b604051808215151515815260200191505060405180910390f35b61073d600480360360608110156106e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116e7565b005b610a0d60048036036102c081101561075657600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b8282101561084c578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050815260200190600101906107f8565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611707565b005b610a3b60048036036020811015610a2557600080fd5b8101908080359060200190929190505050611b9d565b6040518082815260200191505060405180910390f35b610a7d60048036036020811015610a6757600080fd5b8101908080359060200190929190505050611bd5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610b0160048036036020811015610ad557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c12565b6040518082815260200191505060405180910390f35b610b1f611c62565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610b69611c88565b005b610b73611e1a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610bbd611e43565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bfd578082015181840152602081019050610be2565b50505050905090810190601f168015610c2a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610c8660048036036040811015610c4e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611ee5565b005b610d8b60048036036080811015610c9e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610d0557600080fd5b820183602082011115610d1757600080fd5b80359060200191846001830284011164010000000083111715610d3957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612021565b005b610db960048036036020811015610da357600080fd5b8101908080359060200190929190505050612049565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610df9578082015181840152602081019050610dde565b50505050905090810190601f168015610e265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610e8060048036036040811015610e4a57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612112565b005b610e8a6122dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610eca578082015181840152602081019050610eaf565b50505050905090810190601f168015610ef75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610f6760048036036040811015610f1b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061237f565b604051808215151515815260200191505060405180910390f35b610fc360048036036020811015610f9757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612413565b005b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600f8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110c55780601f1061109a576101008083540402835291602001916110c5565b820191906000526020600020905b8154815290600101906020018083116110a857829003601f168201915b5050505050905090565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61111581611bd5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561119b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180613a566033913960400191505060405180910390fd5b6111a481611bd5565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806111eb57506111ea6111e482611bd5565b3361237f565b5b151561125f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f43616c6c6572206973206e6f7420617070726f7665640000000000000000000081525060200191505060405180910390fd5b816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166112d283611bd5565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000600880549050905090565b61132f338261261d565b151561133a57600080fd5b6113458383836126b2565b505050565b611389828260006040519080825280601f01601f1916602001820160405280156113835781602001600182028038833980820191505090505b50611404565b5050565b600061139883611c12565b821015156113a557600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156113f157fe5b9060005260206000200154905092915050565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114b0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b60011515600060149054906101000a900460ff16151514151561153b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436f6e74726163742069732063757272656e746c79206163746976650000000081525060200191505060405180910390fd5b60008060146101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa60405160405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611643576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b60001515600060149054906101000a900460ff1615151415156116ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436f6e74726163742069732063757272656e746c79207061757365640000000081525060200191505060405180910390fd5b6116d883836126d6565b6116e1826126f7565b92915050565b61170283838360405180602001604052806000815250612021565b505050565b818160008282604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140192505050604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff166014600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611845576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e20616c72656164792065786973747300000000000000000081525060200191505060405180910390fd5b601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe01ff628f8f8f8f8f8f8f8f8f6040518a63ffffffff1660e01b8152600401808a600260200280838360005b838110156118c65780820151818401526020810190506118ab565b5050505090500189600260200280838360005b838110156118f45780820151818401526020810190506118d9565b505050509050018860026000925b818410156119485782846020020151600260200280838360005b8381101561193757808201518184015260208101905061191c565b505050509050019260010192611902565b9250505087600260200280838360005b83811015611973578082015181840152602081019050611958565b5050505090500186600260200280838360005b838110156119a1578082015181840152602081019050611986565b5050505090500185600260200280838360005b838110156119cf5780820151818401526020810190506119b4565b5050505090500184600260200280838360005b838110156119fd5780820151818401526020810190506119e2565b5050505090500183600260200280838360005b83811015611a2b578082015181840152602081019050611a10565b5050505090500182600260200280838360005b83811015611a59578082015181840152602081019050611a3e565b505050509050019950505050505050505050602060405180830381600087803b158015611a8557600080fd5b505af1158015611a99573d6000803e3d6000fd5b505050506040513d6020811015611aaf57600080fd5b81019080805190602001909291905050501515611b34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f536f6c7574696f6e20766572696669636174696f6e206661696c65640000000081525060200191505060405180910390fd5b611b3e8585612112565b611b48848661159a565b508373ffffffffffffffffffffffffffffffffffffffff16857f3a5398bda6f1f57d6c96834fa9bf02b5517bdc847d14312015a917ba421c31c960405160405180910390a35050505050505050505050505050565b6000611ba7611318565b82101515611bb457600080fd5b600882815481101515611bc357fe5b90600052602060002001549050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000611c5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061284a565b9050919050565b601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611d2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b60001515600060149054906101000a900460ff161515141515611dba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436f6e74726163742069732063757272656e746c79207061757365640000000081525060200191505060405180910390fd5b6001600060146101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25860405160405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060108054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611edb5780601f10611eb057610100808354040283529160200191611edb565b820191906000526020600020905b815481529060010190602001808311611ebe57829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611f2057600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61202c848484611325565b61203884848484612858565b151561204357600080fd5b50505050565b606061205482612a43565b151561205f57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121065780601f106120db57610100808354040283529160200191612106565b820191906000526020600020905b8154815290600101906020018083116120e957829003601f168201915b50505050509050919050565b61211a61390b565b60405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff168152509050601381908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505060008383604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014019250505060405160208183030381529060405280519060200120905081601460008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508273ffffffffffffffffffffffffffffffffffffffff16847f078793128cefb19aac38a33f9e5df39f67716907f6d747e8065545699e0b2b8d60405160405180910390a350505050565b606060118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156123755780601f1061234a57610100808354040283529160200191612375565b820191906000526020600020905b81548152906001019060200180831161235857829003601f168201915b5050505050905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156124ba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613a0d6026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561255f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f506c6561736520656e7465722076616c6964206164647265737300000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008061262983611bd5565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061269857508373ffffffffffffffffffffffffffffffffffffffff16612680846110cf565b73ffffffffffffffffffffffffffffffffffffffff16145b806126a957506126a8818561237f565b5b91505092915050565b6126bd838383612ab5565b6126c78382612d31565b6126d18282612ed5565b505050565b6126e08282612f9c565b6126ea8282612ed5565b6126f381613211565b5050565b61270081612a43565b1515612774576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f5468697320746f6b656e20646f6573206e6f742065786973740000000000000081525060200191505060405180910390fd5b61282060118054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561280d5780601f106127e25761010080835404028352916020019161280d565b820191906000526020600020905b8154815290600101906020018083116127f057829003601f168201915b505050505061281b8361325d565b613397565b60126000838152602001908152602001600020908051906020019061284692919061393b565b5050565b600081600001549050919050565b60006128798473ffffffffffffffffffffffffffffffffffffffff166133db565b15156128885760019050612a3b565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612963578082015181840152602081019050612948565b50505050905090810190601f1680156129905780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156129b257600080fd5b505af11580156129c6573d6000803e3d6000fd5b505050506040513d60208110156129dc57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b612abe81611bd5565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515612b43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180613a336023913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612be8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f64657374696e6174696f6e2061646472657373206973206e6f742076616c696481525060200191505060405180910390fd5b612bf181613426565b612c38600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206134e6565b612c7f600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613509565b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000612d896001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061351f90919063ffffffff16565b90506000600760008481526020019081526020016000205490508181141515612e7c576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612dfa57fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612e5457fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612ece91906139bb565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515613073576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e20616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515613118576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f496e76616c69642064657374696e6174696f6e2061646472657373000000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506131b1600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613509565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b606060008214156132a5576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613392565b600082905060005b6000821415156132d3578080600101915050600a828115156132cb57fe5b0491506132ad565b6060816040519080825280601f01601f1916602001820160405280156133085781602001600182028038833980820191505090505b50905060006001830390505b60008614151561338a57600a8681151561332a57fe5b0660300160f81b82828060019003935081518110151561334657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8681151561338257fe5b049550613314565b819450505050505b919050565b60606133d38383604051806020016040528060008152506040518060200160405280600081525060405180602001604052806000815250613569565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561341d57506000801b8214155b92505050919050565b600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156134e35760006003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6134fe6001826000015461351f90919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600061356183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613849565b905092915050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f1916602001820160405280156135c55781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b88518110156136505788818151811015156135f357fe5b90602001015160f81c60f81b838380600101945081518110151561361357fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506135dc565b600090505b87518110156136c957878181518110151561366c57fe5b90602001015160f81c60f81b838380600101945081518110151561368c57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613655565b600090505b86518110156137425786818151811015156136e557fe5b90602001015160f81c60f81b838380600101945081518110151561370557fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506136ce565b600090505b85518110156137bb57858181518110151561375e57fe5b90602001015160f81c60f81b838380600101945081518110151561377e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613747565b600090505b84518110156138345784818151811015156137d757fe5b90602001015160f81c60f81b83838060010194508151811015156137f757fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506137c0565b82995050505050505050505095945050505050565b600083831115829015156138f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156138bd5780820151818401526020810190506138a2565b50505050905090810190601f1680156138ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b604051806040016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061397c57805160ff19168380011785556139aa565b828001600101855582156139aa579182015b828111156139a957825182559160200191906001019061398e565b5b5090506139b791906139e7565b5090565b8154818355818111156139e2578183600052602060002091820191016139e191906139e7565b5b505050565b613a0991905b80821115613a055760008160009055506001016139ed565b5090565b9056fe596f7520617265206e6f7420746865206f776e6572206f66207468697320636f6e747261637466726f6d2061646472657373206973206e6f742074686520746f6b656e206f776e657274686520676976656e206164647265737320697320616c726561647920746865206f776e6572206f662074686520746f6b656ea165627a7a72305820eeb5495ce2d1ff2ad2d7d3ff237698e8f9747bfee788cb0fbeec9dd469db20200029",
  "sourceMap": "362:2413:7:-;;;833:201;8:9:-1;5:2;;;30:1;27;20:12;5:2;833:201:7;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;833:201:7;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;833:201:7;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;833:201:7;;;;;;942:5;949:7;22448:4:4;22454:6;20214:283;;;;;;;;;;;;;;;;;607:10;598:6;;:19;;;;;;;;;;;;;;;;;;665:10;632:44;;661:1;632:44;;;;;;;;;;;;2544:5;2534:7;;:15;;;;;;;;;;;;;;;;;;3208:40;2805:10;3227:20;;3208:18;;;:40;;:::i;:::-;5354;5228:10;5373:20;;5354:18;;;:40;;:::i;:::-;12919:51;12525:10;12938:31;;12919:18;;;:51;;:::i;:::-;20363:4;20355:5;:12;;;;;;;;;;;;:::i;:::-;;20387:6;20377:7;:16;;;;;;;;;;;;:::i;:::-;;20419:12;20403:13;:28;;;;;;;;;;;;:::i;:::-;;20441:49;20025:10;20460:29;;20441:18;;;:49;;:::i;:::-;20214:283;;;22369:175;;1011:15:7;988:11;;:39;;;;;;;;;;;;;;;;;;833:201;;;362:2413;;3558:158:4;3648:10;3633:25;;:11;:25;;;;;3625:34;;;;;;;;3705:4;3669:20;:33;3690:11;3669:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;3558:158;:::o;362:2413:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "362:2413:7:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;362:2413:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3346:133:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3346:133:4;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;20585:83;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20585:83:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6597:167;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6597:167:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5935:656;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5935:656:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;13684:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7741:180;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7741:180:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14798:122:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14798:122:6;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14798:122:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14798:122:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14798:122:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14798:122:6;;;;;;;;;;;;;;;:::i;:::-;;13350:182:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;13350:182:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;14926:166:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14926:166:6;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14926:166:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14926:166:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14926:166:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14926:166:6;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14926:166:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14926:166:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14926:166:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14926:166:6;;;;;;;;;;;;;;;:::i;:::-;;2304:109:4;;;:::i;:::-;;22550:158;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;22550:158:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7927:132;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7927:132:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2146:626:7;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2146:626:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14115:148:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14115:148:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5699:162;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5699:162:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5407:286;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5407:286:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;799:27:7;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2187:111:4;;;:::i;:::-;;1507:78;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;20674:87;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20674:87:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7056:213;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7056:213:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8065:211;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8065:211:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8065:211:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8065:211:4;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8065:211:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8065:211:4;;;;;;;;;;;;;;;:::i;:::-;;20872:151;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;20872:151:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20872:151:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1595:323:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1595:323:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;20767:99:4;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20767:99:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7590:145;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7590:145:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1143:358;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1143:358:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;3346:133;3416:4;3439:20;:33;3460:11;3439:33;;;;;;;;;;;;;;;;;;;;;;;;;;;3432:40;;3346:133;;;:::o;20585:83::-;20624:13;20656:5;20649:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20585:83;:::o;6597:167::-;6656:7;6733:15;:24;6749:7;6733:24;;;;;;;;;;;;;;;;;;;;;6726:31;;6597:167;;;:::o;5935:656::-;6098:16;6106:7;6098;:16::i;:::-;6092:22;;:2;:22;;;;6084:86;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6307:16;6315:7;6307;:16::i;:::-;6293:30;;:10;:30;;;:80;;;;6327:46;6344:16;6352:7;6344;:16::i;:::-;6362:10;6327:16;:46::i;:::-;6293:80;6285:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6490:2;6463:15;:24;6479:7;6463:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;6575:7;6571:2;6544:39;;6553:16;6561:7;6553;:16::i;:::-;6544:39;;;;;;;;;;;;5935:656;;:::o;13684:94::-;13728:7;13754:10;:17;;;;13747:24;;13684:94;:::o;7741:180::-;7831:39;7850:10;7862:7;7831:18;:39::i;:::-;7823:48;;;;;;;;7882:32;7896:4;7902:2;7906:7;7882:13;:32::i;:::-;7741:180;;;:::o;14798:122:6:-;14873:40;14884:5;14891:7;14910:1;14900:12;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;14900:12:6;;;;14873:10;:40::i;:::-;14798:122;;:::o;13350:182:4:-;13430:7;13465:16;13475:5;13465:9;:16::i;:::-;13457:5;:24;13449:33;;;;;;;;13499:12;:19;13512:5;13499:19;;;;;;;;;;;;;;;13519:5;13499:26;;;;;;;;;;;;;;;;;;13492:33;;13350:182;;;;:::o;14926:166:6:-;;;;:::o;2304:109:4:-;842:6;;;;;;;;;;;828:20;;:10;:20;;;820:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2050:4;2039:15;;:7;;;;;;;;;;;:15;;;2031:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2366:5;2356:7;;:15;;;;;;;;;;;;;;;;;;2395:10;2386:20;;;;;;;;;;;;2304:109::o;22550:158::-;22632:4;842:6;;;;;;;;;;;828:20;;:10;:20;;;820:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1939:5;1928:16;;:7;;;;;;;;;;;:16;;;1920:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22647:24;22659:2;22663:7;22647:11;:24::i;:::-;22681:20;22693:7;22681:11;:20::i;:::-;22550:158;;;;:::o;7927:132::-;8013:39;8030:4;8036:2;8040:7;8013:39;;;;;;;;;;;;:16;:39::i;:::-;7927:132;;;:::o;2146:626:7:-;2541:5;2548:2;1351:11;1392:4;1398:5;1375:29;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1375:29:7;;;1365:40;;;;;;1351:54;;1457:1;1423:36;;:12;:17;1436:3;1423:17;;;;;;;;;;;:22;;;;;;;;;;;;:36;;;1415:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2574:11;;;;;;;;;;;:20;;;2595:1;2598:3;2603:1;2606:3;2611:1;2614:3;2619:1;2622;2625:5;2574:57;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2574:57:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2574:57:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2574:57:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2574:57:7;;;;;;;;;;;;;;;;2566:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2674:22;2686:5;2693:2;2674:11;:22::i;:::-;2706:21;2717:2;2721:5;2706:10;:21::i;:::-;;2761:2;2742:22;;2754:5;2742:22;;;;;;;;;;2146:626;;;;;;;;;;;;;;:::o;14115:148:4:-;14173:7;14208:13;:11;:13::i;:::-;14200:5;:21;14192:30;;;;;;;;14239:10;14250:5;14239:17;;;;;;;;;;;;;;;;;;14232:24;;14115:148;;;:::o;5699:162::-;5754:7;5834:11;:20;5846:7;5834:20;;;;;;;;;;;;;;;;;;;;;5827:27;;5699:162;;;:::o;5407:286::-;5462:7;5651:34;:17;:24;5669:5;5651:24;;;;;;;;;;;;;;;:32;:34::i;:::-;5644:41;;5407:286;;;:::o;799:27:7:-;;;;;;;;;;;;;:::o;2187:111:4:-;842:6;;;;;;;;;;;828:20;;:10;:20;;;820:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1939:5;1928:16;;:7;;;;;;;;;;;:16;;;1920:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2254:4;2244:7;;:14;;;;;;;;;;;;;;;;;;2280:10;2273:18;;;;;;;;;;;;2187:111::o;1507:78::-;1547:7;1572:6;;;;;;;;;;;1565:13;;1507:78;:::o;20674:87::-;20715:13;20747:7;20740:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20674:87;:::o;7056:213::-;7141:10;7135:16;;:2;:16;;;;7127:25;;;;;;;;7199:8;7162:18;:30;7181:10;7162:30;;;;;;;;;;;;;;;:34;7193:2;7162:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;7249:2;7222:40;;7237:10;7222:40;;;7253:8;7222:40;;;;;;;;;;;;;;;;;;;;;;7056:213;;:::o;8065:211::-;8171:31;8184:4;8190:2;8194:7;8171:12;:31::i;:::-;8220:48;8243:4;8249:2;8253:7;8262:5;8220:22;:48::i;:::-;8212:57;;;;;;;;8065:211;;;;:::o;20872:151::-;20930:13;20963:16;20971:7;20963;:16::i;:::-;20955:25;;;;;;;;20997:10;:19;21008:7;20997:19;;;;;;;;;;;20990:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20872:151;;;:::o;1595:323:7:-;1662:27;;:::i;:::-;1692:35;;;;;;;;1709:4;1692:35;;;;1720:5;1692:35;;;;;1662:65;;1737:9;1752:11;1737:27;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1737:27:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1774:11;1815:4;1821:5;1798:29;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1798:29:7;;;1788:40;;;;;;1774:54;;1858:11;1838:12;:17;1851:3;1838:17;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1904:5;1884:26;;1898:4;1884:26;;;;;;;;;;1595:323;;;;:::o;20767:99:4:-;20814:13;20846;20839:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20767:99;:::o;7590:145::-;7670:4;7693:18;:25;7712:5;7693:25;;;;;;;;;;;;;;;:35;7719:8;7693:35;;;;;;;;;;;;;;;;;;;;;;;;;7686:42;;7590:145;;;;:::o;1143:358::-;842:6;;;;;;;;;;;828:20;;:10;:20;;;820:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1381:1;1361:22;;:8;:22;;;;1353:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1433:8;1424:6;;:17;;;;;;;;;;;;;;;;;;1485:8;1456:38;;1477:6;;;;;;;;;;;1456:38;;;;;;;;;;;;1143:358;:::o;8982:246::-;9067:4;9083:13;9099:16;9107:7;9099;:16::i;:::-;9083:32;;9144:5;9133:16;;:7;:16;;;:51;;;;9177:7;9153:31;;:20;9165:7;9153:11;:20::i;:::-;:31;;;9133:51;:87;;;;9188:32;9205:5;9212:7;9188:16;:32::i;:::-;9133:87;9125:96;;;8982:246;;;;:::o;14638:239::-;14723:38;14743:4;14749:2;14753:7;14723:19;:38::i;:::-;14772:47;14805:4;14811:7;14772:32;:47::i;:::-;14830:40;14858:2;14862:7;14830:27;:40::i;:::-;14638:239;;;:::o;15132:196::-;15195:24;15207:2;15211:7;15195:11;:24::i;:::-;15230:40;15258:2;15262:7;15230:27;:40::i;:::-;15281;15313:7;15281:31;:40::i;:::-;15132:196;;:::o;21500:193::-;21565:16;21573:7;21565;:16::i;:::-;21557:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21643:43;21653:13;21643:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21668:17;21677:7;21668:8;:17::i;:::-;21643:9;:43::i;:::-;21621:10;:19;21632:7;21621:19;;;;;;;;;;;:65;;;;;;;;;;;;:::i;:::-;;21500:193;:::o;1065:112:0:-;1130:7;1156;:14;;;1149:21;;1065:112;;;:::o;11370:347:4:-;11491:4;11516:15;:2;:13;;;:15::i;:::-;11515:16;11511:58;;;11554:4;11547:11;;;;11511:58;11579:13;11611:2;11595:36;;;11632:10;11644:4;11650:7;11659:5;11595:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;11595:70:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11595:70:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11595:70:4;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11595:70:4;;;;;;;;;;;;;;;;11579:86;;4361:10;11693:16;;11683:26;;;:6;:26;;;;11675:35;;;11370:347;;;;;;;:::o;8470:152::-;8527:4;8543:13;8559:11;:20;8571:7;8559:20;;;;;;;;;;;;;;;;;;;;;8543:36;;8613:1;8596:19;;:5;:19;;;;8589:26;;;8470:152;;;:::o;10115:727::-;10287:16;10295:7;10287;:16::i;:::-;10279:24;;:4;:24;;;10271:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10444:1;10430:16;;:2;:16;;;;10422:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10534:23;10549:7;10534:14;:23::i;:::-;10643:35;:17;:23;10661:4;10643:23;;;;;;;;;;;;;;;:33;:35::i;:::-;10688:33;:17;:21;10706:2;10688:21;;;;;;;;;;;;;;;:31;:33::i;:::-;10754:2;10731:11;:20;10743:7;10731:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;10827:7;10823:2;10808:27;;10817:4;10808:27;;;;;;;;;;;;10115:727;;;:::o;17104:1128::-;17366:22;17391:32;17421:1;17391:12;:18;17404:4;17391:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;17366:57;;17433:18;17454:17;:26;17472:7;17454:26;;;;;;;;;;;;17433:47;;17598:14;17584:10;:28;;17580:323;;;17628:19;17650:12;:18;17663:4;17650:18;;;;;;;;;;;;;;;17669:14;17650:34;;;;;;;;;;;;;;;;;;17628:56;;17732:11;17699:12;:18;17712:4;17699:18;;;;;;;;;;;;;;;17718:10;17699:30;;;;;;;;;;;;;;;;;:44;;;;17848:10;17815:17;:30;17833:11;17815:30;;;;;;;;;;;:43;;;;17580:323;;17989:12;:18;18002:4;17989:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;17104:1128;;;;:::o;15950:183::-;16063:12;:16;16076:2;16063:16;;;;;;;;;;;;;;;:23;;;;16034:17;:26;16052:7;16034:26;;;;;;;;;;;:52;;;;16096:12;:16;16109:2;16096:16;;;;;;;;;;;;;;;16118:7;16096:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;16096:30:4;;;;;;;;;;;;;;;;;;;;;;15950:183;;:::o;9385:531::-;9572:1;9540:34;;:11;:20;9552:7;9540:20;;;;;;;;;;;;;;;;;;;;;:34;;;9532:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9631:1;9617:16;;:2;:16;;;;9609:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9779:2;9756:11;:20;9768:7;9756:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;9791:33;:17;:21;9809:2;9791:21;;;;;;;;;;;;;;;:31;:33::i;:::-;9901:7;9897:2;9876:33;;9893:1;9876:33;;;;;;;;;;;;9385:531;;:::o;16328:161::-;16431:10;:17;;;;16404:15;:24;16420:7;16404:24;;;;;;;;;;;:44;;;;16458:10;16474:7;16458:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;16458:24:4;;;;;;;;;;;;;;;;;;;;;;16328:161;:::o;43268:465:6:-;43318:27;43367:1;43361:2;:7;43357:48;;;43384:10;;;;;;;;;;;;;;;;;;;;;43357:48;43414:6;43423:2;43414:11;;43435:8;43453:66;43465:1;43460;:6;;43453:66;;;43482:5;;;;;;;43506:2;43501:7;;;;;;;;;;;43453:66;;;43528:17;43558:3;43548:14;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;43548:14:6;;;;43528:34;;43572:6;43587:1;43581:3;:7;43572:16;;43598:100;43611:1;43605:2;:7;;43598:100;;;43661:2;43656;:7;;;;;;;;43651:2;:12;43640:25;;43628:4;43633:3;;;;;;;43628:9;;;;;;;;;;;;;;:37;;;;;;;;;;;43685:2;43679:8;;;;;;;;;;;43598:100;;;43721:4;43707:19;;;;;;43268:465;;;;:::o;39709:166::-;39787:33;39839:29;39849:2;39853;39839:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:9;:29::i;:::-;39832:36;;39709:166;;;;:::o;686:610:3:-;746:4;1004:16;1030:19;1052:66;1030:88;;;;1219:7;1207:20;1195:32;;1258:11;1246:8;:23;;:42;;;;;1285:3;1273:15;;:8;:15;;1246:42;1238:51;;;;686:610;;;:::o;11798:171:4:-;11897:1;11861:38;;:15;:24;11877:7;11861:24;;;;;;;;;;;;;;;;;;;;;:38;;;;11857:106;;;11950:1;11915:15;:24;11931:7;11915:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;11857:106;11798:171;:::o;1367:108:0:-;1447:21;1466:1;1447:7;:14;;;:18;;:21;;;;:::i;:::-;1430:7;:14;;:38;;;;1367:108;:::o;1183:178::-;1353:1;1335:7;:14;;;:19;;;;;;;;;;;1183:178;:::o;1274:134:1:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;40279:1020:6:-;40411:33;40456:16;40481:2;40456:28;;40494:16;40519:2;40494:28;;40532:16;40557:2;40532:28;;40570:16;40595:2;40570:28;;40608:16;40633:2;40608:28;;40646:19;40731:3;:10;40718:3;:10;40705:3;:10;40692:3;:10;40679:3;:10;:23;:36;:49;:62;40668:74;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;40668:74:6;;;;40646:96;;40752:19;40780:5;40752:34;;40796:6;40805:1;40796:10;;40816:6;40825:1;40816:10;;40845:1;40841:5;;40836:78;40852:3;:10;40848:1;:14;40836:78;;;40897:3;40901:1;40897:6;;;;;;;;;;;;;;;;;;;40883;40890:3;;;;;;40883:11;;;;;;;;;;;;;;:20;;;;;;;;;;;40864:3;;;;;;;40836:78;;;40932:1;40928:5;;40923:78;40939:3;:10;40935:1;:14;40923:78;;;40984:3;40988:1;40984:6;;;;;;;;;;;;;;;;;;;40970;40977:3;;;;;;40970:11;;;;;;;;;;;;;;:20;;;;;;;;;;;40951:3;;;;;;;40923:78;;;41019:1;41015:5;;41010:78;41026:3;:10;41022:1;:14;41010:78;;;41071:3;41075:1;41071:6;;;;;;;;;;;;;;;;;;;41057;41064:3;;;;;;41057:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41038:3;;;;;;;41010:78;;;41106:1;41102:5;;41097:78;41113:3;:10;41109:1;:14;41097:78;;;41158:3;41162:1;41158:6;;;;;;;;;;;;;;;;;;;41144;41151:3;;;;;;41144:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41125:3;;;;;;;41097:78;;;41193:1;41189:5;;41184:78;41200:3;:10;41196:1;:14;41184:78;;;41245:3;41249:1;41245:6;;;;;;;;;;;;;;;;;;;41231;41238:3;;;;;;41231:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41212:3;;;;;;;41184:78;;;41285:6;41271:21;;;;;;;;;;;40279:1020;;;;;;;:::o;1732:187:1:-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;362:2413:7:-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\nimport \"./ERC721MintableComplete.sol\";\nimport \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\n// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>\n\nimport \"./Verifier.sol\";\n\n\n// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class\ncontract SolnSquareVerifier is ERC721MintableComplete{\n    // TODO define a solutions struct that can hold an index & an address\n    struct Solution {\n        uint256 index;\n        address addr;\n    }\n\n    using SafeMath for uint256;\n\n    // TODO define an array of the above struct\n    Solution[] private solutions;\n\n    // TODO define a mapping to store unique solutions submitted\n    mapping (bytes32 => Solution) solutionsMap;\n\n    Verifier public solVerifier;\n\n    constructor(address solVerifierAddr, string memory _name, string memory _symbol) \n    ERC721MintableComplete(_name, _symbol) \n    public\n    {\n            solVerifier = Verifier(solVerifierAddr);\n    }\n\n    // TODO Create an event to emit when a solution is added\n    event SolutionAdded(uint256 indexed solIndex, address indexed solAddress);\n    event TokenMinted(uint256 indexed idx, address indexed addr);\n\n    // Modifier to check if solution is unique\n    modifier isUnique(uint256 _idx, address _addr) {\n        bytes32 key = keccak256(abi.encodePacked(_idx, _addr));\n        require(solutionsMap[key].addr == address(0), \"Solution already exists\");\n        _;\n    }\n\n\n    // TODO Create a function to add the solutions to the array and emit the event\n    function addSolution(uint256 _idx, address _addr) public {\n        Solution memory newSolution = Solution({index: _idx, addr:_addr});\n        solutions.push(newSolution);\n        bytes32 key = keccak256(abi.encodePacked(_idx, _addr));\n        solutionsMap[key] = newSolution;\n        emit SolutionAdded(_idx, _addr); \n    }\n\n\n    // TODO Create a function to mint new NFT only after the solution has been verified\n    //  - make sure the solution is unique (has not been used before)\n    //  - make sure you handle metadata as well as tokenSuplly\n    function mintNewToken(\n            uint[2] memory A,\n            uint[2] memory A_p,\n            uint[2][2] memory B,\n            uint[2] memory B_p,\n            uint[2] memory C,\n            uint[2] memory C_p,\n            uint[2] memory H,\n            uint[2] memory K,\n            uint[2] memory input,\n            uint256 index,\n            address to\n            ) \n    public\n    isUnique(index, to)\n    {\n        require(solVerifier.verifyTx(A, A_p, B, B_p, C, C_p, H, K, input), \"Solution verification failed\");\n        addSolution(index, to);\n        super.mint(to, index);\n        emit TokenMinted(index, to);\n\n    }\n\n}\n",
  "sourcePath": "C:\\Users\\personal\\Desktop\\Udacity_Blockchain_Capstone-main\\eth-contracts\\contracts\\SolnSquareVerifier.sol",
  "ast": {
    "absolutePath": "project:/contracts/SolnSquareVerifier.sol",
    "exportedSymbols": {
      "SolnSquareVerifier": [
        8005
      ]
    },
    "id": 8006,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7795,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:7"
      },
      {
        "absolutePath": "project:/contracts/ERC721MintableComplete.sol",
        "file": "./ERC721MintableComplete.sol",
        "id": 7796,
        "nodeType": "ImportDirective",
        "scope": 8006,
        "sourceUnit": 1469,
        "src": "25:38:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 7797,
        "nodeType": "ImportDirective",
        "scope": 8006,
        "sourceUnit": 236,
        "src": "64:59:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/Verifier.sol",
        "file": "./Verifier.sol",
        "id": 7798,
        "nodeType": "ImportDirective",
        "scope": 8006,
        "sourceUnit": 9190,
        "src": "233:24:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7799,
              "name": "ERC721MintableComplete",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1468,
              "src": "393:22:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721MintableComplete_$1468",
                "typeString": "contract ERC721MintableComplete"
              }
            },
            "id": 7800,
            "nodeType": "InheritanceSpecifier",
            "src": "393:22:7"
          }
        ],
        "contractDependencies": [
          405,
          482,
          528,
          1019,
          1317,
          1427,
          1468,
          7793
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 8005,
        "linearizedBaseContracts": [
          8005,
          1468,
          1427,
          7793,
          1317,
          1019,
          528,
          482,
          405
        ],
        "name": "SolnSquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "SolnSquareVerifier.Solution",
            "id": 7805,
            "members": [
              {
                "constant": false,
                "id": 7802,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 7805,
                "src": "521:13:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7801,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "521:7:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7804,
                "name": "addr",
                "nodeType": "VariableDeclaration",
                "scope": 7805,
                "src": "544:12:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7803,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "544:7:7",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Solution",
            "nodeType": "StructDefinition",
            "scope": 8005,
            "src": "495:68:7",
            "visibility": "public"
          },
          {
            "id": 7808,
            "libraryName": {
              "contractScope": null,
              "id": 7806,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 235,
              "src": "575:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$235",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "569:27:7",
            "typeName": {
              "id": 7807,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "588:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 7811,
            "name": "solutions",
            "nodeType": "VariableDeclaration",
            "scope": 8005,
            "src": "650:28:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Solution_$7805_storage_$dyn_storage",
              "typeString": "struct SolnSquareVerifier.Solution[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 7809,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7805,
                "src": "650:8:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7805_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              },
              "id": 7810,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "650:10:7",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Solution_$7805_storage_$dyn_storage_ptr",
                "typeString": "struct SolnSquareVerifier.Solution[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7815,
            "name": "solutionsMap",
            "nodeType": "VariableDeclaration",
            "scope": 8005,
            "src": "750:42:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7805_storage_$",
              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
            },
            "typeName": {
              "id": 7814,
              "keyType": {
                "id": 7812,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "759:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "750:29:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7805_storage_$",
                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
              },
              "valueType": {
                "contractScope": null,
                "id": 7813,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7805,
                "src": "770:8:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7805_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 7817,
            "name": "solVerifier",
            "nodeType": "VariableDeclaration",
            "scope": 8005,
            "src": "799:27:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Verifier_$9189",
              "typeString": "contract Verifier"
            },
            "typeName": {
              "contractScope": null,
              "id": 7816,
              "name": "Verifier",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9189,
              "src": "799:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Verifier_$9189",
                "typeString": "contract Verifier"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7836,
              "nodeType": "Block",
              "src": "974:60:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7830,
                      "name": "solVerifier",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7817,
                      "src": "988:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Verifier_$9189",
                        "typeString": "contract Verifier"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 7832,
                          "name": "solVerifierAddr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7819,
                          "src": "1011:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 7831,
                        "name": "Verifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9189,
                        "src": "1002:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Verifier_$9189_$",
                          "typeString": "type(contract Verifier)"
                        }
                      },
                      "id": 7833,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1002:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Verifier_$9189",
                        "typeString": "contract Verifier"
                      }
                    },
                    "src": "988:39:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Verifier_$9189",
                      "typeString": "contract Verifier"
                    }
                  },
                  "id": 7835,
                  "nodeType": "ExpressionStatement",
                  "src": "988:39:7"
                }
              ]
            },
            "documentation": null,
            "id": 7837,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7826,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7821,
                    "src": "942:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7827,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7823,
                    "src": "949:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 7828,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7825,
                  "name": "ERC721MintableComplete",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1468,
                  "src": "919:22:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721MintableComplete_$1468_$",
                    "typeString": "type(contract ERC721MintableComplete)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "919:38:7"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7819,
                  "name": "solVerifierAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 7837,
                  "src": "845:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:7",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7821,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 7837,
                  "src": "870:19:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7820,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7823,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7837,
                  "src": "891:21:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7822,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "891:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:69:7"
            },
            "returnParameters": {
              "id": 7829,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "974:0:7"
            },
            "scope": 8005,
            "src": "833:201:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7843,
            "name": "SolutionAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7839,
                  "indexed": true,
                  "name": "solIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 7843,
                  "src": "1121:24:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1121:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7841,
                  "indexed": true,
                  "name": "solAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 7843,
                  "src": "1147:26:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7840,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:7:7",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1120:54:7"
            },
            "src": "1101:74:7"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7849,
            "name": "TokenMinted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7845,
                  "indexed": true,
                  "name": "idx",
                  "nodeType": "VariableDeclaration",
                  "scope": 7849,
                  "src": "1198:19:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1198:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7847,
                  "indexed": true,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 7849,
                  "src": "1219:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7846,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1219:7:7",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1197:43:7"
            },
            "src": "1180:61:7"
          },
          {
            "body": {
              "id": 7878,
              "nodeType": "Block",
              "src": "1341:164:7",
              "statements": [
                {
                  "assignments": [
                    7856
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7856,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7878,
                      "src": "1351:11:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7855,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1351:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7864,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7860,
                            "name": "_idx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7851,
                            "src": "1392:4:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7861,
                            "name": "_addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7853,
                            "src": "1398:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7858,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9191,
                            "src": "1375:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7859,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1375:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 7862,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1375:29:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 7857,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9198,
                      "src": "1365:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1365:40:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1351:54:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 7873,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 7866,
                              "name": "solutionsMap",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7815,
                              "src": "1423:12:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7805_storage_$",
                                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                              }
                            },
                            "id": 7868,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 7867,
                              "name": "key",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7856,
                              "src": "1436:3:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1423:17:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7805_storage",
                              "typeString": "struct SolnSquareVerifier.Solution storage ref"
                            }
                          },
                          "id": 7869,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "addr",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7804,
                          "src": "1423:22:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 7871,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1457:1:7",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 7870,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1449:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 7872,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1449:10:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1423:36:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e20616c726561647920657869737473",
                        "id": 7874,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1461:25:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ac996440a72e14fb9c5151df88591abddb2bc86e6f1a6831bea3662cc32c2de4",
                          "typeString": "literal_string \"Solution already exists\""
                        },
                        "value": "Solution already exists"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ac996440a72e14fb9c5151df88591abddb2bc86e6f1a6831bea3662cc32c2de4",
                          "typeString": "literal_string \"Solution already exists\""
                        }
                      ],
                      "id": 7865,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9207,
                        9208
                      ],
                      "referencedDeclaration": 9208,
                      "src": "1415:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7875,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1415:72:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7876,
                  "nodeType": "ExpressionStatement",
                  "src": "1415:72:7"
                },
                {
                  "id": 7877,
                  "nodeType": "PlaceholderStatement",
                  "src": "1497:1:7"
                }
              ]
            },
            "documentation": null,
            "id": 7879,
            "name": "isUnique",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 7854,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7851,
                  "name": "_idx",
                  "nodeType": "VariableDeclaration",
                  "scope": 7879,
                  "src": "1312:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1312:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7853,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 7879,
                  "src": "1326:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7852,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1326:7:7",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1311:29:7"
            },
            "src": "1294:211:7",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7920,
              "nodeType": "Block",
              "src": "1652:266:7",
              "statements": [
                {
                  "assignments": [
                    7887
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7887,
                      "name": "newSolution",
                      "nodeType": "VariableDeclaration",
                      "scope": 7920,
                      "src": "1662:27:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7805_memory_ptr",
                        "typeString": "struct SolnSquareVerifier.Solution"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 7886,
                        "name": "Solution",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7805,
                        "src": "1662:8:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7805_storage_ptr",
                          "typeString": "struct SolnSquareVerifier.Solution"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7892,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7889,
                        "name": "_idx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7881,
                        "src": "1709:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7890,
                        "name": "_addr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7883,
                        "src": "1720:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": null,
                      "id": 7888,
                      "name": "Solution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7805,
                      "src": "1692:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Solution_$7805_storage_ptr_$",
                        "typeString": "type(struct SolnSquareVerifier.Solution storage pointer)"
                      }
                    },
                    "id": 7891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "index",
                      "addr"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "1692:35:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Solution_$7805_memory",
                      "typeString": "struct SolnSquareVerifier.Solution memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1662:65:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7896,
                        "name": "newSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7887,
                        "src": "1752:11:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7805_memory_ptr",
                          "typeString": "struct SolnSquareVerifier.Solution memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Solution_$7805_memory_ptr",
                          "typeString": "struct SolnSquareVerifier.Solution memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7893,
                        "name": "solutions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7811,
                        "src": "1737:9:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Solution_$7805_storage_$dyn_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref[] storage ref"
                        }
                      },
                      "id": 7895,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1737:14:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Solution_$7805_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct SolnSquareVerifier.Solution storage ref) returns (uint256)"
                      }
                    },
                    "id": 7897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1737:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7898,
                  "nodeType": "ExpressionStatement",
                  "src": "1737:27:7"
                },
                {
                  "assignments": [
                    7900
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7900,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7920,
                      "src": "1774:11:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7899,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1774:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7908,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7904,
                            "name": "_idx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7881,
                            "src": "1815:4:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7905,
                            "name": "_addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7883,
                            "src": "1821:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7902,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9191,
                            "src": "1798:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1798:16:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 7906,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1798:29:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 7901,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9198,
                      "src": "1788:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1788:40:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1774:54:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7909,
                        "name": "solutionsMap",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7815,
                        "src": "1838:12:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7805_storage_$",
                          "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                        }
                      },
                      "id": 7911,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 7910,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7900,
                        "src": "1851:3:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1838:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7805_storage",
                        "typeString": "struct SolnSquareVerifier.Solution storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7912,
                      "name": "newSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7887,
                      "src": "1858:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7805_memory_ptr",
                        "typeString": "struct SolnSquareVerifier.Solution memory"
                      }
                    },
                    "src": "1838:31:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Solution_$7805_storage",
                      "typeString": "struct SolnSquareVerifier.Solution storage ref"
                    }
                  },
                  "id": 7914,
                  "nodeType": "ExpressionStatement",
                  "src": "1838:31:7"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7916,
                        "name": "_idx",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7881,
                        "src": "1898:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7917,
                        "name": "_addr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7883,
                        "src": "1904:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7915,
                      "name": "SolutionAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7843,
                      "src": "1884:13:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 7918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1884:26:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7919,
                  "nodeType": "EmitStatement",
                  "src": "1879:31:7"
                }
              ]
            },
            "documentation": null,
            "id": 7921,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addSolution",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7881,
                  "name": "_idx",
                  "nodeType": "VariableDeclaration",
                  "scope": 7921,
                  "src": "1616:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7880,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1616:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7883,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 7921,
                  "src": "1630:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7882,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1630:7:7",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1615:29:7"
            },
            "returnParameters": {
              "id": 7885,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1652:0:7"
            },
            "scope": 8005,
            "src": "1595:323:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8003,
              "nodeType": "Block",
              "src": "2556:216:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7973,
                            "name": "A",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7925,
                            "src": "2595:1:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7974,
                            "name": "A_p",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7929,
                            "src": "2598:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7975,
                            "name": "B",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7935,
                            "src": "2603:1:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7976,
                            "name": "B_p",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7939,
                            "src": "2606:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7977,
                            "name": "C",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7943,
                            "src": "2611:1:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7978,
                            "name": "C_p",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7947,
                            "src": "2614:3:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7979,
                            "name": "H",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7951,
                            "src": "2619:1:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7980,
                            "name": "K",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7955,
                            "src": "2622:1:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7981,
                            "name": "input",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7959,
                            "src": "2625:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7971,
                            "name": "solVerifier",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7817,
                            "src": "2574:11:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Verifier_$9189",
                              "typeString": "contract Verifier"
                            }
                          },
                          "id": 7972,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "verifyTx",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9188,
                          "src": "2574:20:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[2] memory,uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory) external returns (bool)"
                          }
                        },
                        "id": 7982,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2574:57:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e20766572696669636174696f6e206661696c6564",
                        "id": 7983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2633:30:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c51a57f1689ac37fae98e52304a4e168ab73adef049b18383340969d34d4e960",
                          "typeString": "literal_string \"Solution verification failed\""
                        },
                        "value": "Solution verification failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c51a57f1689ac37fae98e52304a4e168ab73adef049b18383340969d34d4e960",
                          "typeString": "literal_string \"Solution verification failed\""
                        }
                      ],
                      "id": 7970,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9207,
                        9208
                      ],
                      "referencedDeclaration": 9208,
                      "src": "2566:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2566:98:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7985,
                  "nodeType": "ExpressionStatement",
                  "src": "2566:98:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7987,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7961,
                        "src": "2686:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7988,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7963,
                        "src": "2693:2:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7986,
                      "name": "addSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7921,
                      "src": "2674:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 7989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2674:22:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7990,
                  "nodeType": "ExpressionStatement",
                  "src": "2674:22:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7994,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7963,
                        "src": "2717:2:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7995,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7961,
                        "src": "2721:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7991,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9259,
                        "src": "2706:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_SolnSquareVerifier_$8005",
                          "typeString": "contract super SolnSquareVerifier"
                        }
                      },
                      "id": 7993,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1467,
                      "src": "2706:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 7996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2706:21:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7997,
                  "nodeType": "ExpressionStatement",
                  "src": "2706:21:7"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7999,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7961,
                        "src": "2754:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8000,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7963,
                        "src": "2761:2:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7998,
                      "name": "TokenMinted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7849,
                      "src": "2742:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 8001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2742:22:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8002,
                  "nodeType": "EmitStatement",
                  "src": "2737:27:7"
                }
              ]
            },
            "documentation": null,
            "id": 8004,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7966,
                    "name": "index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7961,
                    "src": "2541:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7967,
                    "name": "to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7963,
                    "src": "2548:2:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 7968,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7965,
                  "name": "isUnique",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 7879,
                  "src": "2532:8:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$_t_address_$",
                    "typeString": "modifier (uint256,address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2532:19:7"
              }
            ],
            "name": "mintNewToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7925,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2181:16:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7922,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2181:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7924,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2186:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2181:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7929,
                  "name": "A_p",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2211:18:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7926,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2211:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7928,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2216:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2211:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7935,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2243:19:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7930,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2243:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7932,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2248:1:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "2243:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7934,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2251:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2243:10:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7939,
                  "name": "B_p",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2276:18:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7936,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2276:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7938,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7937,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2281:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2276:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7943,
                  "name": "C",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2308:16:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7940,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2308:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7942,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7941,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2313:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2308:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7947,
                  "name": "C_p",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2338:18:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7944,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2338:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7946,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7945,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2343:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2338:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7951,
                  "name": "H",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2370:16:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7948,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2370:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7950,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7949,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2375:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2370:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7955,
                  "name": "K",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2400:16:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7952,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2400:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7954,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7953,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2405:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2400:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7959,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2430:20:7",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7956,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2430:4:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7958,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2435:1:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2430:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7961,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2464:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7960,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2464:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7963,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8004,
                  "src": "2491:10:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7962,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2491:7:7",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2167:348:7"
            },
            "returnParameters": {
              "id": 7969,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2556:0:7"
            },
            "scope": 8005,
            "src": "2146:626:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8006,
        "src": "362:2413:7"
      }
    ],
    "src": "0:2776:7"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/SolnSquareVerifier.sol",
      "exportedSymbols": {
        "SolnSquareVerifier": [
          8005
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ]
        },
        "id": 7795,
        "name": "PragmaDirective",
        "src": "0:23:7"
      },
      {
        "attributes": {
          "SourceUnit": 1469,
          "absolutePath": "project:/contracts/ERC721MintableComplete.sol",
          "file": "./ERC721MintableComplete.sol",
          "scope": 8006,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7796,
        "name": "ImportDirective",
        "src": "25:38:7"
      },
      {
        "attributes": {
          "SourceUnit": 236,
          "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 8006,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7797,
        "name": "ImportDirective",
        "src": "64:59:7"
      },
      {
        "attributes": {
          "SourceUnit": 9190,
          "absolutePath": "project:/contracts/Verifier.sol",
          "file": "./Verifier.sol",
          "scope": 8006,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7798,
        "name": "ImportDirective",
        "src": "233:24:7"
      },
      {
        "attributes": {
          "contractDependencies": [
            405,
            482,
            528,
            1019,
            1317,
            1427,
            1468,
            7793
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8005,
            1468,
            1427,
            7793,
            1317,
            1019,
            528,
            482,
            405
          ],
          "name": "SolnSquareVerifier",
          "scope": 8006
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721MintableComplete",
                  "referencedDeclaration": 1468,
                  "type": "contract ERC721MintableComplete"
                },
                "id": 7799,
                "name": "UserDefinedTypeName",
                "src": "393:22:7"
              }
            ],
            "id": 7800,
            "name": "InheritanceSpecifier",
            "src": "393:22:7"
          },
          {
            "attributes": {
              "canonicalName": "SolnSquareVerifier.Solution",
              "name": "Solution",
              "scope": 8005,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "index",
                  "scope": 7805,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 7801,
                    "name": "ElementaryTypeName",
                    "src": "521:7:7"
                  }
                ],
                "id": 7802,
                "name": "VariableDeclaration",
                "src": "521:13:7"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "addr",
                  "scope": 7805,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 7803,
                    "name": "ElementaryTypeName",
                    "src": "544:7:7"
                  }
                ],
                "id": 7804,
                "name": "VariableDeclaration",
                "src": "544:12:7"
              }
            ],
            "id": 7805,
            "name": "StructDefinition",
            "src": "495:68:7"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 235,
                  "type": "library SafeMath"
                },
                "id": 7806,
                "name": "UserDefinedTypeName",
                "src": "575:8:7"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 7807,
                "name": "ElementaryTypeName",
                "src": "588:7:7"
              }
            ],
            "id": 7808,
            "name": "UsingForDirective",
            "src": "569:27:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "solutions",
              "scope": 8005,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct SolnSquareVerifier.Solution[]",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "struct SolnSquareVerifier.Solution[]"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Solution",
                      "referencedDeclaration": 7805,
                      "type": "struct SolnSquareVerifier.Solution"
                    },
                    "id": 7809,
                    "name": "UserDefinedTypeName",
                    "src": "650:8:7"
                  }
                ],
                "id": 7810,
                "name": "ArrayTypeName",
                "src": "650:10:7"
              }
            ],
            "id": 7811,
            "name": "VariableDeclaration",
            "src": "650:28:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "solutionsMap",
              "scope": 8005,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 7812,
                    "name": "ElementaryTypeName",
                    "src": "759:7:7"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Solution",
                      "referencedDeclaration": 7805,
                      "type": "struct SolnSquareVerifier.Solution"
                    },
                    "id": 7813,
                    "name": "UserDefinedTypeName",
                    "src": "770:8:7"
                  }
                ],
                "id": 7814,
                "name": "Mapping",
                "src": "750:29:7"
              }
            ],
            "id": 7815,
            "name": "VariableDeclaration",
            "src": "750:42:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "solVerifier",
              "scope": 8005,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract Verifier",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Verifier",
                  "referencedDeclaration": 9189,
                  "type": "contract Verifier"
                },
                "id": 7816,
                "name": "UserDefinedTypeName",
                "src": "799:8:7"
              }
            ],
            "id": 7817,
            "name": "VariableDeclaration",
            "src": "799:27:7"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "scope": 8005,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "solVerifierAddr",
                      "scope": 7837,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7818,
                        "name": "ElementaryTypeName",
                        "src": "845:7:7"
                      }
                    ],
                    "id": 7819,
                    "name": "VariableDeclaration",
                    "src": "845:23:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 7837,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 7820,
                        "name": "ElementaryTypeName",
                        "src": "870:6:7"
                      }
                    ],
                    "id": 7821,
                    "name": "VariableDeclaration",
                    "src": "870:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 7837,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 7822,
                        "name": "ElementaryTypeName",
                        "src": "891:6:7"
                      }
                    ],
                    "id": 7823,
                    "name": "VariableDeclaration",
                    "src": "891:21:7"
                  }
                ],
                "id": 7824,
                "name": "ParameterList",
                "src": "844:69:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7829,
                "name": "ParameterList",
                "src": "974:0:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1468,
                      "type": "type(contract ERC721MintableComplete)",
                      "value": "ERC721MintableComplete"
                    },
                    "id": 7825,
                    "name": "Identifier",
                    "src": "919:22:7"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7821,
                      "type": "string memory",
                      "value": "_name"
                    },
                    "id": 7826,
                    "name": "Identifier",
                    "src": "942:5:7"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7823,
                      "type": "string memory",
                      "value": "_symbol"
                    },
                    "id": 7827,
                    "name": "Identifier",
                    "src": "949:7:7"
                  }
                ],
                "id": 7828,
                "name": "ModifierInvocation",
                "src": "919:38:7"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract Verifier"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7817,
                              "type": "contract Verifier",
                              "value": "solVerifier"
                            },
                            "id": 7830,
                            "name": "Identifier",
                            "src": "988:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract Verifier",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9189,
                                  "type": "type(contract Verifier)",
                                  "value": "Verifier"
                                },
                                "id": 7831,
                                "name": "Identifier",
                                "src": "1002:8:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7819,
                                  "type": "address",
                                  "value": "solVerifierAddr"
                                },
                                "id": 7832,
                                "name": "Identifier",
                                "src": "1011:15:7"
                              }
                            ],
                            "id": 7833,
                            "name": "FunctionCall",
                            "src": "1002:25:7"
                          }
                        ],
                        "id": 7834,
                        "name": "Assignment",
                        "src": "988:39:7"
                      }
                    ],
                    "id": 7835,
                    "name": "ExpressionStatement",
                    "src": "988:39:7"
                  }
                ],
                "id": 7836,
                "name": "Block",
                "src": "974:60:7"
              }
            ],
            "id": 7837,
            "name": "FunctionDefinition",
            "src": "833:201:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "SolutionAdded"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "solIndex",
                      "scope": 7843,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7838,
                        "name": "ElementaryTypeName",
                        "src": "1121:7:7"
                      }
                    ],
                    "id": 7839,
                    "name": "VariableDeclaration",
                    "src": "1121:24:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "solAddress",
                      "scope": 7843,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7840,
                        "name": "ElementaryTypeName",
                        "src": "1147:7:7"
                      }
                    ],
                    "id": 7841,
                    "name": "VariableDeclaration",
                    "src": "1147:26:7"
                  }
                ],
                "id": 7842,
                "name": "ParameterList",
                "src": "1120:54:7"
              }
            ],
            "id": 7843,
            "name": "EventDefinition",
            "src": "1101:74:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "TokenMinted"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "idx",
                      "scope": 7849,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7844,
                        "name": "ElementaryTypeName",
                        "src": "1198:7:7"
                      }
                    ],
                    "id": 7845,
                    "name": "VariableDeclaration",
                    "src": "1198:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "addr",
                      "scope": 7849,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7846,
                        "name": "ElementaryTypeName",
                        "src": "1219:7:7"
                      }
                    ],
                    "id": 7847,
                    "name": "VariableDeclaration",
                    "src": "1219:20:7"
                  }
                ],
                "id": 7848,
                "name": "ParameterList",
                "src": "1197:43:7"
              }
            ],
            "id": 7849,
            "name": "EventDefinition",
            "src": "1180:61:7"
          },
          {
            "attributes": {
              "documentation": null,
              "name": "isUnique",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_idx",
                      "scope": 7879,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7850,
                        "name": "ElementaryTypeName",
                        "src": "1312:7:7"
                      }
                    ],
                    "id": 7851,
                    "name": "VariableDeclaration",
                    "src": "1312:12:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addr",
                      "scope": 7879,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7852,
                        "name": "ElementaryTypeName",
                        "src": "1326:7:7"
                      }
                    ],
                    "id": 7853,
                    "name": "VariableDeclaration",
                    "src": "1326:13:7"
                  }
                ],
                "id": 7854,
                "name": "ParameterList",
                "src": "1311:29:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7856
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "key",
                          "scope": 7878,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 7855,
                            "name": "ElementaryTypeName",
                            "src": "1351:7:7"
                          }
                        ],
                        "id": 7856,
                        "name": "VariableDeclaration",
                        "src": "1351:11:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9198,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 7857,
                            "name": "Identifier",
                            "src": "1365:9:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9191,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 7858,
                                    "name": "Identifier",
                                    "src": "1375:3:7"
                                  }
                                ],
                                "id": 7859,
                                "name": "MemberAccess",
                                "src": "1375:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7851,
                                  "type": "uint256",
                                  "value": "_idx"
                                },
                                "id": 7860,
                                "name": "Identifier",
                                "src": "1392:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7853,
                                  "type": "address",
                                  "value": "_addr"
                                },
                                "id": 7861,
                                "name": "Identifier",
                                "src": "1398:5:7"
                              }
                            ],
                            "id": 7862,
                            "name": "FunctionCall",
                            "src": "1375:29:7"
                          }
                        ],
                        "id": 7863,
                        "name": "FunctionCall",
                        "src": "1365:40:7"
                      }
                    ],
                    "id": 7864,
                    "name": "VariableDeclarationStatement",
                    "src": "1351:54:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_ac996440a72e14fb9c5151df88591abddb2bc86e6f1a6831bea3662cc32c2de4",
                                  "typeString": "literal_string \"Solution already exists\""
                                }
                              ],
                              "overloadedDeclarations": [
                                9207,
                                9208
                              ],
                              "referencedDeclaration": 9208,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7865,
                            "name": "Identifier",
                            "src": "1415:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "addr",
                                  "referencedDeclaration": 7804,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct SolnSquareVerifier.Solution storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7815,
                                          "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                          "value": "solutionsMap"
                                        },
                                        "id": 7866,
                                        "name": "Identifier",
                                        "src": "1423:12:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7856,
                                          "type": "bytes32",
                                          "value": "key"
                                        },
                                        "id": 7867,
                                        "name": "Identifier",
                                        "src": "1436:3:7"
                                      }
                                    ],
                                    "id": 7868,
                                    "name": "IndexAccess",
                                    "src": "1423:17:7"
                                  }
                                ],
                                "id": 7869,
                                "name": "MemberAccess",
                                "src": "1423:22:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 7870,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1449:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 7871,
                                    "name": "Literal",
                                    "src": "1457:1:7"
                                  }
                                ],
                                "id": 7872,
                                "name": "FunctionCall",
                                "src": "1449:10:7"
                              }
                            ],
                            "id": 7873,
                            "name": "BinaryOperation",
                            "src": "1423:36:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "536f6c7574696f6e20616c726561647920657869737473",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Solution already exists\"",
                              "value": "Solution already exists"
                            },
                            "id": 7874,
                            "name": "Literal",
                            "src": "1461:25:7"
                          }
                        ],
                        "id": 7875,
                        "name": "FunctionCall",
                        "src": "1415:72:7"
                      }
                    ],
                    "id": 7876,
                    "name": "ExpressionStatement",
                    "src": "1415:72:7"
                  },
                  {
                    "id": 7877,
                    "name": "PlaceholderStatement",
                    "src": "1497:1:7"
                  }
                ],
                "id": 7878,
                "name": "Block",
                "src": "1341:164:7"
              }
            ],
            "id": 7879,
            "name": "ModifierDefinition",
            "src": "1294:211:7"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "addSolution",
              "scope": 8005,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_idx",
                      "scope": 7921,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7880,
                        "name": "ElementaryTypeName",
                        "src": "1616:7:7"
                      }
                    ],
                    "id": 7881,
                    "name": "VariableDeclaration",
                    "src": "1616:12:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addr",
                      "scope": 7921,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7882,
                        "name": "ElementaryTypeName",
                        "src": "1630:7:7"
                      }
                    ],
                    "id": 7883,
                    "name": "VariableDeclaration",
                    "src": "1630:13:7"
                  }
                ],
                "id": 7884,
                "name": "ParameterList",
                "src": "1615:29:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7885,
                "name": "ParameterList",
                "src": "1652:0:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7887
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "newSolution",
                          "scope": 7920,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct SolnSquareVerifier.Solution",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Solution",
                              "referencedDeclaration": 7805,
                              "type": "struct SolnSquareVerifier.Solution"
                            },
                            "id": 7886,
                            "name": "UserDefinedTypeName",
                            "src": "1662:8:7"
                          }
                        ],
                        "id": 7887,
                        "name": "VariableDeclaration",
                        "src": "1662:27:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            "index",
                            "addr"
                          ],
                          "type": "struct SolnSquareVerifier.Solution memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7805,
                              "type": "type(struct SolnSquareVerifier.Solution storage pointer)",
                              "value": "Solution"
                            },
                            "id": 7888,
                            "name": "Identifier",
                            "src": "1692:8:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7881,
                              "type": "uint256",
                              "value": "_idx"
                            },
                            "id": 7889,
                            "name": "Identifier",
                            "src": "1709:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7883,
                              "type": "address",
                              "value": "_addr"
                            },
                            "id": 7890,
                            "name": "Identifier",
                            "src": "1720:5:7"
                          }
                        ],
                        "id": 7891,
                        "name": "FunctionCall",
                        "src": "1692:35:7"
                      }
                    ],
                    "id": 7892,
                    "name": "VariableDeclarationStatement",
                    "src": "1662:65:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Solution_$7805_memory_ptr",
                                  "typeString": "struct SolnSquareVerifier.Solution memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (struct SolnSquareVerifier.Solution storage ref) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7811,
                                  "type": "struct SolnSquareVerifier.Solution storage ref[] storage ref",
                                  "value": "solutions"
                                },
                                "id": 7893,
                                "name": "Identifier",
                                "src": "1737:9:7"
                              }
                            ],
                            "id": 7895,
                            "name": "MemberAccess",
                            "src": "1737:14:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7887,
                              "type": "struct SolnSquareVerifier.Solution memory",
                              "value": "newSolution"
                            },
                            "id": 7896,
                            "name": "Identifier",
                            "src": "1752:11:7"
                          }
                        ],
                        "id": 7897,
                        "name": "FunctionCall",
                        "src": "1737:27:7"
                      }
                    ],
                    "id": 7898,
                    "name": "ExpressionStatement",
                    "src": "1737:27:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7900
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "key",
                          "scope": 7920,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 7899,
                            "name": "ElementaryTypeName",
                            "src": "1774:7:7"
                          }
                        ],
                        "id": 7900,
                        "name": "VariableDeclaration",
                        "src": "1774:11:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9198,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 7901,
                            "name": "Identifier",
                            "src": "1788:9:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9191,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 7902,
                                    "name": "Identifier",
                                    "src": "1798:3:7"
                                  }
                                ],
                                "id": 7903,
                                "name": "MemberAccess",
                                "src": "1798:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7881,
                                  "type": "uint256",
                                  "value": "_idx"
                                },
                                "id": 7904,
                                "name": "Identifier",
                                "src": "1815:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7883,
                                  "type": "address",
                                  "value": "_addr"
                                },
                                "id": 7905,
                                "name": "Identifier",
                                "src": "1821:5:7"
                              }
                            ],
                            "id": 7906,
                            "name": "FunctionCall",
                            "src": "1798:29:7"
                          }
                        ],
                        "id": 7907,
                        "name": "FunctionCall",
                        "src": "1788:40:7"
                      }
                    ],
                    "id": 7908,
                    "name": "VariableDeclarationStatement",
                    "src": "1774:54:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct SolnSquareVerifier.Solution storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct SolnSquareVerifier.Solution storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7815,
                                  "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                  "value": "solutionsMap"
                                },
                                "id": 7909,
                                "name": "Identifier",
                                "src": "1838:12:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7900,
                                  "type": "bytes32",
                                  "value": "key"
                                },
                                "id": 7910,
                                "name": "Identifier",
                                "src": "1851:3:7"
                              }
                            ],
                            "id": 7911,
                            "name": "IndexAccess",
                            "src": "1838:17:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7887,
                              "type": "struct SolnSquareVerifier.Solution memory",
                              "value": "newSolution"
                            },
                            "id": 7912,
                            "name": "Identifier",
                            "src": "1858:11:7"
                          }
                        ],
                        "id": 7913,
                        "name": "Assignment",
                        "src": "1838:31:7"
                      }
                    ],
                    "id": 7914,
                    "name": "ExpressionStatement",
                    "src": "1838:31:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7843,
                              "type": "function (uint256,address)",
                              "value": "SolutionAdded"
                            },
                            "id": 7915,
                            "name": "Identifier",
                            "src": "1884:13:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7881,
                              "type": "uint256",
                              "value": "_idx"
                            },
                            "id": 7916,
                            "name": "Identifier",
                            "src": "1898:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7883,
                              "type": "address",
                              "value": "_addr"
                            },
                            "id": 7917,
                            "name": "Identifier",
                            "src": "1904:5:7"
                          }
                        ],
                        "id": 7918,
                        "name": "FunctionCall",
                        "src": "1884:26:7"
                      }
                    ],
                    "id": 7919,
                    "name": "EmitStatement",
                    "src": "1879:31:7"
                  }
                ],
                "id": 7920,
                "name": "Block",
                "src": "1652:266:7"
              }
            ],
            "id": 7921,
            "name": "FunctionDefinition",
            "src": "1595:323:7"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "mintNewToken",
              "scope": 8005,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "A",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7922,
                            "name": "ElementaryTypeName",
                            "src": "2181:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7923,
                            "name": "Literal",
                            "src": "2186:1:7"
                          }
                        ],
                        "id": 7924,
                        "name": "ArrayTypeName",
                        "src": "2181:7:7"
                      }
                    ],
                    "id": 7925,
                    "name": "VariableDeclaration",
                    "src": "2181:16:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "A_p",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7926,
                            "name": "ElementaryTypeName",
                            "src": "2211:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7927,
                            "name": "Literal",
                            "src": "2216:1:7"
                          }
                        ],
                        "id": 7928,
                        "name": "ArrayTypeName",
                        "src": "2211:7:7"
                      }
                    ],
                    "id": 7929,
                    "name": "VariableDeclaration",
                    "src": "2211:18:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "B",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2][2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2][2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "type": "uint256[2]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 7930,
                                "name": "ElementaryTypeName",
                                "src": "2243:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 7931,
                                "name": "Literal",
                                "src": "2248:1:7"
                              }
                            ],
                            "id": 7932,
                            "name": "ArrayTypeName",
                            "src": "2243:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7933,
                            "name": "Literal",
                            "src": "2251:1:7"
                          }
                        ],
                        "id": 7934,
                        "name": "ArrayTypeName",
                        "src": "2243:10:7"
                      }
                    ],
                    "id": 7935,
                    "name": "VariableDeclaration",
                    "src": "2243:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "B_p",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7936,
                            "name": "ElementaryTypeName",
                            "src": "2276:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7937,
                            "name": "Literal",
                            "src": "2281:1:7"
                          }
                        ],
                        "id": 7938,
                        "name": "ArrayTypeName",
                        "src": "2276:7:7"
                      }
                    ],
                    "id": 7939,
                    "name": "VariableDeclaration",
                    "src": "2276:18:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "C",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7940,
                            "name": "ElementaryTypeName",
                            "src": "2308:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7941,
                            "name": "Literal",
                            "src": "2313:1:7"
                          }
                        ],
                        "id": 7942,
                        "name": "ArrayTypeName",
                        "src": "2308:7:7"
                      }
                    ],
                    "id": 7943,
                    "name": "VariableDeclaration",
                    "src": "2308:16:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "C_p",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7944,
                            "name": "ElementaryTypeName",
                            "src": "2338:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7945,
                            "name": "Literal",
                            "src": "2343:1:7"
                          }
                        ],
                        "id": 7946,
                        "name": "ArrayTypeName",
                        "src": "2338:7:7"
                      }
                    ],
                    "id": 7947,
                    "name": "VariableDeclaration",
                    "src": "2338:18:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "H",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7948,
                            "name": "ElementaryTypeName",
                            "src": "2370:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7949,
                            "name": "Literal",
                            "src": "2375:1:7"
                          }
                        ],
                        "id": 7950,
                        "name": "ArrayTypeName",
                        "src": "2370:7:7"
                      }
                    ],
                    "id": 7951,
                    "name": "VariableDeclaration",
                    "src": "2370:16:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "K",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7952,
                            "name": "ElementaryTypeName",
                            "src": "2400:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7953,
                            "name": "Literal",
                            "src": "2405:1:7"
                          }
                        ],
                        "id": 7954,
                        "name": "ArrayTypeName",
                        "src": "2400:7:7"
                      }
                    ],
                    "id": 7955,
                    "name": "VariableDeclaration",
                    "src": "2400:16:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "input",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7956,
                            "name": "ElementaryTypeName",
                            "src": "2430:4:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7957,
                            "name": "Literal",
                            "src": "2435:1:7"
                          }
                        ],
                        "id": 7958,
                        "name": "ArrayTypeName",
                        "src": "2430:7:7"
                      }
                    ],
                    "id": 7959,
                    "name": "VariableDeclaration",
                    "src": "2430:20:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7960,
                        "name": "ElementaryTypeName",
                        "src": "2464:7:7"
                      }
                    ],
                    "id": 7961,
                    "name": "VariableDeclaration",
                    "src": "2464:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 8004,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7962,
                        "name": "ElementaryTypeName",
                        "src": "2491:7:7"
                      }
                    ],
                    "id": 7963,
                    "name": "VariableDeclaration",
                    "src": "2491:10:7"
                  }
                ],
                "id": 7964,
                "name": "ParameterList",
                "src": "2167:348:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7969,
                "name": "ParameterList",
                "src": "2556:0:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7879,
                      "type": "modifier (uint256,address)",
                      "value": "isUnique"
                    },
                    "id": 7965,
                    "name": "Identifier",
                    "src": "2532:8:7"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7961,
                      "type": "uint256",
                      "value": "index"
                    },
                    "id": 7966,
                    "name": "Identifier",
                    "src": "2541:5:7"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7963,
                      "type": "address",
                      "value": "to"
                    },
                    "id": 7967,
                    "name": "Identifier",
                    "src": "2548:2:7"
                  }
                ],
                "id": 7968,
                "name": "ModifierInvocation",
                "src": "2532:19:7"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c51a57f1689ac37fae98e52304a4e168ab73adef049b18383340969d34d4e960",
                                  "typeString": "literal_string \"Solution verification failed\""
                                }
                              ],
                              "overloadedDeclarations": [
                                9207,
                                9208
                              ],
                              "referencedDeclaration": 9208,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7970,
                            "name": "Identifier",
                            "src": "2566:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                                      "typeString": "uint256[2] memory[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "verifyTx",
                                  "referencedDeclaration": 9188,
                                  "type": "function (uint256[2] memory,uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory,uint256[2] memory) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7817,
                                      "type": "contract Verifier",
                                      "value": "solVerifier"
                                    },
                                    "id": 7971,
                                    "name": "Identifier",
                                    "src": "2574:11:7"
                                  }
                                ],
                                "id": 7972,
                                "name": "MemberAccess",
                                "src": "2574:20:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7925,
                                  "type": "uint256[2] memory",
                                  "value": "A"
                                },
                                "id": 7973,
                                "name": "Identifier",
                                "src": "2595:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7929,
                                  "type": "uint256[2] memory",
                                  "value": "A_p"
                                },
                                "id": 7974,
                                "name": "Identifier",
                                "src": "2598:3:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7935,
                                  "type": "uint256[2] memory[2] memory",
                                  "value": "B"
                                },
                                "id": 7975,
                                "name": "Identifier",
                                "src": "2603:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7939,
                                  "type": "uint256[2] memory",
                                  "value": "B_p"
                                },
                                "id": 7976,
                                "name": "Identifier",
                                "src": "2606:3:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7943,
                                  "type": "uint256[2] memory",
                                  "value": "C"
                                },
                                "id": 7977,
                                "name": "Identifier",
                                "src": "2611:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7947,
                                  "type": "uint256[2] memory",
                                  "value": "C_p"
                                },
                                "id": 7978,
                                "name": "Identifier",
                                "src": "2614:3:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7951,
                                  "type": "uint256[2] memory",
                                  "value": "H"
                                },
                                "id": 7979,
                                "name": "Identifier",
                                "src": "2619:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7955,
                                  "type": "uint256[2] memory",
                                  "value": "K"
                                },
                                "id": 7980,
                                "name": "Identifier",
                                "src": "2622:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7959,
                                  "type": "uint256[2] memory",
                                  "value": "input"
                                },
                                "id": 7981,
                                "name": "Identifier",
                                "src": "2625:5:7"
                              }
                            ],
                            "id": 7982,
                            "name": "FunctionCall",
                            "src": "2574:57:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "536f6c7574696f6e20766572696669636174696f6e206661696c6564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Solution verification failed\"",
                              "value": "Solution verification failed"
                            },
                            "id": 7983,
                            "name": "Literal",
                            "src": "2633:30:7"
                          }
                        ],
                        "id": 7984,
                        "name": "FunctionCall",
                        "src": "2566:98:7"
                      }
                    ],
                    "id": 7985,
                    "name": "ExpressionStatement",
                    "src": "2566:98:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7921,
                              "type": "function (uint256,address)",
                              "value": "addSolution"
                            },
                            "id": 7986,
                            "name": "Identifier",
                            "src": "2674:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7961,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 7987,
                            "name": "Identifier",
                            "src": "2686:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7963,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 7988,
                            "name": "Identifier",
                            "src": "2693:2:7"
                          }
                        ],
                        "id": 7989,
                        "name": "FunctionCall",
                        "src": "2674:22:7"
                      }
                    ],
                    "id": 7990,
                    "name": "ExpressionStatement",
                    "src": "2674:22:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "mint",
                              "referencedDeclaration": 1467,
                              "type": "function (address,uint256) returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9259,
                                  "type": "contract super SolnSquareVerifier",
                                  "value": "super"
                                },
                                "id": 7991,
                                "name": "Identifier",
                                "src": "2706:5:7"
                              }
                            ],
                            "id": 7993,
                            "name": "MemberAccess",
                            "src": "2706:10:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7963,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 7994,
                            "name": "Identifier",
                            "src": "2717:2:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7961,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 7995,
                            "name": "Identifier",
                            "src": "2721:5:7"
                          }
                        ],
                        "id": 7996,
                        "name": "FunctionCall",
                        "src": "2706:21:7"
                      }
                    ],
                    "id": 7997,
                    "name": "ExpressionStatement",
                    "src": "2706:21:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7849,
                              "type": "function (uint256,address)",
                              "value": "TokenMinted"
                            },
                            "id": 7998,
                            "name": "Identifier",
                            "src": "2742:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7961,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 7999,
                            "name": "Identifier",
                            "src": "2754:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7963,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 8000,
                            "name": "Identifier",
                            "src": "2761:2:7"
                          }
                        ],
                        "id": 8001,
                        "name": "FunctionCall",
                        "src": "2742:22:7"
                      }
                    ],
                    "id": 8002,
                    "name": "EmitStatement",
                    "src": "2737:27:7"
                  }
                ],
                "id": 8003,
                "name": "Block",
                "src": "2556:216:7"
              }
            ],
            "id": 8004,
            "name": "FunctionDefinition",
            "src": "2146:626:7"
          }
        ],
        "id": 8005,
        "name": "ContractDefinition",
        "src": "362:2413:7"
      }
    ],
    "id": 8006,
    "name": "SourceUnit",
    "src": "0:2776:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.5+commit.47a71e8f.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {
        "0x078793128cefb19aac38a33f9e5df39f67716907f6d747e8065545699e0b2b8d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "solIndex",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "solAddress",
              "type": "address"
            }
          ],
          "name": "SolutionAdded",
          "type": "event"
        },
        "0x3a5398bda6f1f57d6c96834fa9bf02b5517bdc847d14312015a917ba421c31c9": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "idx",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "TokenMinted",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            }
          ],
          "name": "Paused",
          "type": "event"
        },
        "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            }
          ],
          "name": "Unpaused",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xAC7dF8Cc27e5B1a9b570E1710D2699634cC53A6F",
      "transactionHash": "0x82be5a2c32b9f71bb6e620380b556db422b8cb4dbe329da8bd53505325eae3a1"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2022-10-04T22:14:30.569Z"
}
```




## Minted tokens listed on opensea

- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/1
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/2
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/3
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/4
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/5
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/6
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/7
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/8
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/9
- https://testnets.opensea.io/assets/0x8b485436c95c9381cb498a650ea4157d51af943e/10

### Demonstration of buying of tokens
  #### Buyer address: 0x215a068b63b18e5693e1e4054Ab3d64c8B353799
- https://goerli.etherscan.io/tx/0x5f5c9dbfcdcf955d633b79953b37c98fec6dfdc5cb65ce71918cf11e91d09e64

- https://goerli.etherscan.io/tx/0xfc04bd6fb245b905a6c2f666f54d7eae8e10fc69c504a94166e75fda0716c572

- 

### Demonstration of Transfer of tokens  
- https://goerli.etherscan.io/tx/  0xb523ec8c245cfeb3ec641ac9df47cfdfd367cd3a6c55bd48d9cbf6993efc6633

- https://goerli.etherscan.io/tx/0x221c15b3ac220c2fbd40b68eb3411632273933159fab175d2712e5bc93267967

- https://goerli.etherscan.io/tx/0x1e0c7d86f6d2e0edee9590f3366d1ec655d1732fab06fa47b02b09af78590bc0

- https://goerli.etherscan.io/tx/0x67329218e43a381f748a2a77d9d5800d994a5df43a7a92dd6792a9607ebae558

- https://goerli.etherscan.io/tx/0x8cebc7c039e76f265f547002e79892b8bb8142ce335dc668071bcb7e492eed07

## Project Resources
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

## References 
- https://medium.com/blockchangers/how-to-fix-your-truffle-and-solidity-versioning-with-npx-from-npm-51b5fcb0825f
- https://github.com/lgeorges1234/5_Real_Estate_Marketplace_Project
- https://medium.com/@mycoralhealth/advanced-blockchain-concepts-for-beginners-32887202afad
- https://www.youtube.com/watch?v=xYYEJqGTg78
- https://link.medium.com/Ilv4AvrQvtb
- https://github.com/andresaaap/mint-ntf

