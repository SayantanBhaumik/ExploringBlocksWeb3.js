//Exploring blocks The Ethereum Blockchain

//npm install web3
const Web3= require ('web3');

//connecting to ethereum mainnet
const web3 = new Web3 ('https://mainnet.infura.io/INFURA_API_KEY');

//latest block number
web3.eth.getBlockNumber().then(console.log);

//get all the data for the ***** block
web3.eth.getBlock('*****').then(console.log);

//getting block data of first 15 blocks
web3.eth.getBlockNumber.then((0)=>{
for (let i=0 ; i <=15 ;i++){
web3.eth.getBlock(0 + i).then(console.log)}
}
);
//inspecting transactions contained within a specific block
const hashOfBlock = '########################';
web3.eth.getTransactionFromBlock(hashOfBlock,1).then(console.log);

web3.eth.getGasPrice().then((price)=>{
console.log(web3.utils.fromGwei(price,'ether');

//have direct access to the keccack256 function
console.log(web3.utils.keccack256('cs_sayantan'));


