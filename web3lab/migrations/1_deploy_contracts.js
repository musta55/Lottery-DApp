const Lottery = artifacts.require("./lotteryApp.sol");

module.exports = function (deployer) {
  deployer.deploy(Lottery);
};
