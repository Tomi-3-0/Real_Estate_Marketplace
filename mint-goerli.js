const Web3 = require('web3');
let web3 = new Web3('https://goerli.infura.io/v3/4402a3276a90407d84c7997034faea6a');

const contract = require("/Users/personal/Desktop/Udacity_Blockchain_Capstone-main/eth-contracts/build/contracts/SolnSquareVerifier.json");
const contractAddress = "0x8b485436c95c9381cb498a650ea4157d51af943e";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
const privateKey = "";
const publicKey = "0x21180db4a88a0Aa5F0573d77A1BFcF7D7Ea4E3EF";

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
        'data': nftContract.methods.mint("0x21180db4a88a0Aa5F0573d77A1BFcF7D7Ea4E3EF", 10).encodeABI()
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