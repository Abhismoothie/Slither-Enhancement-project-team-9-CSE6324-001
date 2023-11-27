const Hre = require("hardhat");

async function main() {
  await Hre.run("verify:verify", {
    address: "0xB091F9c43b4D58C6040F65841E4DF8Be27726BC2",
    contract: "contracts/NestedStructs.sol:NestedStructExample",
  });

  console.log("Verified!!!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
