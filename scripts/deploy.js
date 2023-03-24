
const hre = require("hardhat");

async function main() {
  const khanjarwalToken = await hre.ethers.getContractFactory("khanjarwalToken");
  const initialSupply = 100000000;
  const decimals = 50;
  const token = await khanjarwalToken.deploy(initialSupply, decimals);

  await token.deployed();

  console.log("khanjarwal Token deployed:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
