var dep = artifacts.require("./auction.sol");

module.exports = function(deployer) {
  deployer.deploy(dep);
};
