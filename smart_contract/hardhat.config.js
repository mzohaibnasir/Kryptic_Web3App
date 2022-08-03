require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
	solidity: "0.8.0",
	networks: {
		rinkeby: {
			url: "https://eth-rinkeby.alchemyapi.io/v2/PWN48CKhLTwdywN5rtl-EIqgE-2fGlKS",
			accounts: [
				"a897c76451628107b560b32f27b73236f5414bb6992e08f9ab4d01ebde67a30b",
			],
		},
	},
};
