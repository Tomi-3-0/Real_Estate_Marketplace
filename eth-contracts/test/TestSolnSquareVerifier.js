let SquareVerifier = artifacts.require('Verifier');
let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
let contentsProof = require('../../zokrates/code/proof.json');

// Test if a new solution can be added for contract - SolnSquareVerifier

contract('TestSolnSquareVerifier', accounts => {
    const account1 = accounts[0];
    const account2 = accounts[1];
    const tokenName = "Real Estate Tokens";
    const symbol = "RET";

    beforeEach(async function() {
        const squareVerifier = await SquareVerifier.new({ from: account1 })
        this.contract = await SolnSquareVerifier.new(squareVerifier.address, tokenName, symbol, { from: account1 })
    })

    it('can add a new solution for SolnSquareVerifier contract', async function() {
            let tx = await this.contract.addSolution(1, account2, { from: account1 })
            assert.equal(tx.logs[0].event, 'SolutionAdded')
        })
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier

    it('can mint an ERC721 token for SolnSquareVerifier contract', async function() {
        let outcome = true
        let before = await this.contract.totalSupply.call();
        try {
            await this.contract.mintNewToken(
                contentsProof.proof.A,
                contentsProof.proof.A_p,
                contentsProof.proof.B,
                contentsProof.proof.B_p,
                contentsProof.proof.C,
                contentsProof.proof.C_p,
                contentsProof.proof.H,
                contentsProof.proof.K,
                contentsProof.input,
                1,
                account2, { from: account1 }
            )
        } catch (e) {
            outcome = false
        }
        let after = await this.contract.totalSupply.call();
        assert.equal(outcome, true);
        assert.equal(after.toNumber() - before.toNumber(), 1);
    })
})