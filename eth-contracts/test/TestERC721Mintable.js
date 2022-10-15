const ERC721Mintable = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account1 = accounts[0];
    const account2 = accounts[1];
    const account3 = accounts[2];
    const account4 = accounts[3];
    const account5 = accounts[4];
    const account6 = accounts[5];
    const name = "Real Estate Tokens";
    const symbol = "RET";
    const TokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    describe('match erc721 specifications', function() {
        beforeEach(async function() {
            this.contract = await ERC721Mintable.new(name, symbol, { from: account1 });

            // TODO: mint multiple tokens
            await this.contract.mint(account2, 1, { from: account1 });
            await this.contract.mint(account3, 2, { from: account1 });
            await this.contract.mint(account4, 3, { from: account1 });
            await this.contract.mint(account5, 4, { from: account1 });
            await this.contract.mint(account6, 5, { from: account1 });
        })

        it('can return total token supply ', async function() {
            let totalSupply = await this.contract.totalSupply.call();
            assert.equal(totalSupply.toNumber(), 5);

        })

        it('can get total token balance', async function() {
            let balanceOfAccount2 = await this.contract.balanceOf.call(account2);
            assert.equal(balanceOfAccount2.toNumber(), 1);

        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('can return base token uri', async function() {

            let tokenURI1 = TokenURI + "1";
            let tokenURI1Call = await this.contract.tokenURI.call(1);

            let tokenURI2 = TokenURI + "2";
            let tokenURI2call = await this.contract.tokenURI.call(2);

            assert.equal(tokenURI1, tokenURI1Call);
            assert.equal(tokenURI2, tokenURI2call);
        })

        it('can transfer tokens', async function() {
            await this.contract.transferFrom(account2, account6, 1, { from: account2 });
            let tokenOwner = await this.contract.ownerOf.call(1);
            assert.equal(tokenOwner, account6);

            //check if balance of account_two is set to zero
            let balanceOfAccount2 = await this.contract.balanceOf.call(account2);
            assert.equal(balanceOfAccount2, 0);

        })
    });

    describe('have ownership properties', function() {
        beforeEach(async function() {
            this.contract = await ERC721Mintable.new(name, symbol, { from: account1 });
        })

        it('should fail when minting when address is not contract owner', async function() {
            let result = false;
            try {
                await this.contract.mint(account2, 1, { from: account2 });
            } catch (e) {
                result = true;
            }
            //Since account_two is not the owner, it should not be able to mint
            assert.equal(result, true);
        })

        it('should return contract owner', async function() {
            let result = await this.contract.getOwner.call();
            assert.equal(result, account1);

        })

    });
})