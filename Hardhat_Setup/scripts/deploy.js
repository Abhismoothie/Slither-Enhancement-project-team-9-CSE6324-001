const hre = require("hardhat");

async function main() {
  
  const NestedStructExample = await hre.ethers.deployContract("NestedStructExample");
  await NestedStructExample.waitForDeployment();

  console.log("NestedStructExample deployed to:", NestedStructExample.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
