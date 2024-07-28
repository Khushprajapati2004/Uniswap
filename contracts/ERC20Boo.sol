// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BooToken is ERC20 {
    constructor() ERC20("LF", "Boo") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}
