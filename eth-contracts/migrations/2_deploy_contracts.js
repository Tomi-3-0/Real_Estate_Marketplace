// migrating the appropriate contracts
var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

let name = "Real Estate Tokens";
let symbol = "RET";

// const myProof = require('../../zokrates/code/proof.json');

module.exports = function(deployer) {
    deployer.deploy(SquareVerifier).then(() => {
        return deployer.deploy(SolnSquareVerifier, SquareVerifier.address, name, symbol);

    });
};