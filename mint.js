const Web3 = require('web3');
let web3 = new Web3('http://localhost:8545');

const contract = require("../eth-contracts/build/contracts/SolnSquareVerifier.json");
const contractAddress = "0xEAc7aF64F9F297fd6d9AEAeaE4Be89AbDbf88A5f";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
const privateKey = "";
const publicKey = "";

nftContract.methods.symbol().call().then(console.log);

web3.eth.defaultAccount = publicKey;
console.log(web3.eth.defaultAccount);

async function mint() {
    const nonce = await web3.eth.getTransactionCount(publicKey, 'latest'); //get latest nonce
    console.log(nonce);
    //the transaction
    const tx = {
        'from': publicKey,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'maxPriorityFeePerGas': 1999999987,
        'data': nftContract.methods.mint("0x7Fd8AD419dbDe17cD6673c03Eb7D671cE125C955", 1).encodeABI()
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);
    signPromise.then((signedTx) => {

        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
            if (!err) {
                console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!");
            } else {
                console.log("Something went wrong when submitting your transaction:", err)
            }
        });
    }).catch((err) => {
        console.log("Promise failed:", err);
    });
}

mint();