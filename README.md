# Lottery-DApp
Prerequisits: Install git, vscode, ganache, metamask.

What is Lottery management decentralized application? <br> <br>
User can login the lottery management dapps as participants or manager of the lottery program. Manager can create a lottery. At least three participants need to conduct a lottery, Players can join to the lottery by paying certain amount of ethers. Winners are announced and ethers wil be transferred to the lucky winner conducted by blockchain.

<h3>Technology Stack </h3>

1) Frontend: React <br>
2) Smart Contract: Solidity <br>
3) Testing Deployement: Truffle, Goerli testnet <br>
4) Web3 Library: Web3.js

<h3> How to run this <h3>

Step1: Clone the repo

Step 2: Install truffle through npm npm i -g truffle

Step 3 : Open ganache and select truffle-config.js as new project There you will see many accounts with certain ether/ other coins.

Step 4: To deploy the smart contract into truffle run: [Make sure you configured the truffle-config file correctly] truffle migrate --reset *Make sure you delete contract.json file in client folder

step 5: Setup metamask wallet copy accounts from ganache account to metamask by "Import Account with private key"

Step 6: Run the frontend To run the react file, npm install // You can add gitignore

Step 7: npm start
