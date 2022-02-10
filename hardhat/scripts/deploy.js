const { ethers } = require('hardhat');
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

const main = async () => {
  // whitelist contract address
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract metadata for Crypto Dev NFT
  const metadataURL = METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
  const deployedContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );
  await deployedContract.deployed();
  
  console.log("CryptoDevs address: ", deployedContract.address);
}

main().then(() => process.exit(0)).catch((err) => {
  console.log(err);
  process.exit(1);
})