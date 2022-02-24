const hre = require("hardhat");

async function main() {
  const Muffin = await hre.ethers.getContractFactory("MuffinContract");
  const muffin = await Muffin.deploy();

  await muffin.deployed();

  console.log("Muffin deployed to:", muffin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
