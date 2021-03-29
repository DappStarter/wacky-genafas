require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stool razor ridge coast gesture office army giant'; 
let testAccounts = [
"0x46c247c66fe59484a49bc71431b586d5963e4992862dec59b3c5223098e68e35",
"0xfebc7eda416490821b3bd4e638e7084bc3ea7dbe0bb0f6d14eaaef2cc16beb69",
"0xd14ca1138cc036d8b8f0c35c27f69657ee9883efb5b9d9994b616d0bcf08e97f",
"0xe4d00e6b2bcd02f33330edd0ee6cd97ed7b2fa422dadf28e6bac77ae9b309746",
"0xf26126839d59f0a74e0f40b1576157edc6d69db0376c34db074ce8500828b1ed",
"0x22ba5486ab5d1009ae2b3076edf76aa2dca4421f27cb85430d1c2441147680fa",
"0xa9861dfed55632f3d53c0951feb841ac4d2ca31b5c7133ccafac5ccd1ba0123b",
"0xce71163d652ef02a502296c18b24540f57d823e03d6e2b2843aa20d69da9a9c5",
"0x27c963853c98a6b5ff29bc4dad906ad6c88f542b02de30bf38cbbf1e92354572",
"0x9fe4305fe67495b94743921d3cf6883c84a0871a97e7e39765944af70ad50fd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
