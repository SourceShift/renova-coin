const solanaWeb3 = require('@solana/web3.js');
const { PublicKey } = solanaWeb3;

async function getBalance(publicKeyStr) {
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));
    const publicKey = new PublicKey(publicKeyStr);

    const balance = await connection.getBalance(publicKey);
    console.log(`Balance of ${publicKey.toString()}: ${balance}`);
}

getBalance('YOUR_WALLET_ADDRESS').catch(console.error);
