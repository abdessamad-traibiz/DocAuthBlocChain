// eslint-disable-next-line no-undef
const Migrations = artifacts.require('Verification.sol');

module.exports = function (deployer) {
    deployer.deploy(Migrations)
};
