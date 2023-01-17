Prerequisits: Install git, vscode, ganache, metamask.


Step1: Clone the repo


Step 2: Install truffle through npm
npm i -g truffle


Step 3 : Open ganache and select truffle-config.js as new project
There you will see many accounts with certain ether/ other coins.

Step 4: To deploy the smart contract into truffle run: [Make sure you configured the truffle-config file correctly]
truffle migrate --reset     *Make sure you delete contract.json file in client folder

step 5: Setup metamask wallet
copy accounts from ganache account to metamask by  "Import Account with private key"


Step 6:  Run the frontend
To run the react file, 
npm install
// You can add gitignore

Step 7: 
npm start
