require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind artwork idea cloth forward gesture'; 
let testAccounts = [
"0x1198b9e8376c201921c958bce419461496303ee273b1fd93c213af2ffb7de82a",
"0x581253426b653adfa9cb5b46b87497be938fb9e43507e115ce0012c2d81a5d87",
"0x30371addc0b3361a316e4e9c7df617ed204433b71487ca2db9969e5f14d3f000",
"0x258b70208914f6ac9dcb8548088e8105382a72111836681bf6feb0339258d5ce",
"0xcadff7cbfb3f62488098d453fc26bfe3b7b50430cb4a9b068c05c550097d9142",
"0xdf9583e49f07d58882b7d955255d8aa73bf78dc010b49b772965a6d6139517c8",
"0x8cf815ec69273099507066ec4160989f8fb46c4027a5d6770b4337dd10389d0b",
"0xadab1e1ee8670a1fd2611ddad9f1730b73654fe41b7747da866d69b5e216eb5f",
"0x9fcb2a3e13efbe57ad265fb3164534c0ad7cef18a0a66916d6d6c9a9f768b37b",
"0xe77c849c040fbcd03f2537886b810816657d3f4b9f6511740e1bfc5fdcb46877"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

