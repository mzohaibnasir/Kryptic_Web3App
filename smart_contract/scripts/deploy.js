const main = async () => {
	const Transactions = await hre.ethers.getContractFactory("Transactions");
	const transactions = await Transactions.deploy();
	await transactions.deployed();
	console.log("Transaction deployed to:".transactions.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
// 	console.error(error);
// 	process.exitCode = 1;
// });

const runMain = async () => {
	try {
		await main();
		process.exit(0); //which means process went succefully
	} catch (error) {
		console.log(error);
		process.exit(1); //means error
	}
};

runMain();
// npx hardhat run scripts/deploy.js --network rinkeby
