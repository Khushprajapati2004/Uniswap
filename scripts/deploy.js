const hre = require("hardhat");

async function main() {
  //ERC20 Boo Token
  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(`BOO deployed to ${booToken.address}`);

  //ERC20 LIFE Token
  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(`LIFE deployed to ${lifeToken.address}`);

  //SingleSwap Token
  const SingleSwapToken = await hre.ethers.getContractFactory(
    "SingleSwapToken"
  );
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();
  console.log(`SINGLESWAP deployed to ${singleSwapToken.address}`);

  //MultiHop Token
  const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  const swapMultiHop = await SwapMultiHop.deploy();
  await swapMultiHop.deployed();
  console.log(`MULTIHOP deployed to ${swapMultiHop.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
