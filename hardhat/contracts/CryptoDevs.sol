// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import  "./IWhitelist.sol";

contract CryptoDevs is ERC721Enumerable, Ownable {
  // token will be `baseURI` + `tokenId`
  string _baseTokenURI;

  // price per CryptoDevs NFT
  uint256 public _price = 0.01 ether;

  // _paused is used to pause the contract in case of an emergency
  bool public _paused;

  // max number of CryptoDevs
  uint256 public maxTokenIds = 20;

  // total number of minted
  uint256 public tokenIds;

  // Whitelist contract instance
  IWhitelist whitelist;

  // boolean to keep track when presale started
  bool public presaleStarted;

  // timestamp for presale would end
  uint256 public presaleEnded;

  modifier onlyWhenNotPaused {
    require(!_paused, "contract currently paused");
    _;
  }

  /**
  * @dev ERC721 constructor takes in a `name` and `symbol` to the token collection
  * `name` is `Crypto Devs`, and `symbol` is `CD`
  * Constructor for Crypto Devs takes in the baseURI to set _baseTokenURI for the collection
  * It also initializes an instance of whitelist interface
  */
  constructor(string memory baseURI, address whitelistContract) ERC721("Crypto Devs", "CD") {
    _baseTokenURI = baseURI;
    whitelist = IWhitelist(whitelistContract);
  }

  /**
  * @dev startPresale starts a presale for whitelisted addresses
   */
  function startPresale() public onlyOwner {
    presaleStarted = true;
    presaleEnded = block.timestamp + 5 minutes;
  }

  /**
  * @dev presaleMint allows a user to mint one NFT per transaction during the presale
  */
  function presaleMint() public payable onlyWhenNotPaused {
    require(presaleStarted && block.timestamp < presaleEnded, "presale is not running");
    require(whitelist.whitelistedAddress(msg.sender), "you are not whitelisted");
    require(tokenIds < maxTokenIds, "exceeded max supply");
    require(msg.value >= _price, "Ether sent is not correct");
    tokenIds += 1;

    // _safeMint is a safer version of _mint function as it ensures that
    // if the address being minted to is a contract, then it knows how to deal with ERC721 tokens
    // if the address being minted to is not a contract, it works the same way as _mint
    _safeMint(msg.sender, tokenIds);
    // console.log("%s minted %s #%d", msg.sender, _baseTokenURI, tokenIds);
  }

  /**
  * @dev mint allows an user to mint 1 NFT per transaction after the presale has ended
  */
  function mint() public payable onlyWhenNotPaused {
    require(presaleStarted && block.timestamp >= presaleEnded, "public sale has not begin yet");
    require(tokenIds < maxTokenIds, "exceed max supply");
    require(msg.value >= _price, "ether sent is not correct");
    tokenIds += 1;
    _safeMint(msg.sender, tokenIds);
    // console.log("%s minted %s #%d", msg.sender, _baseTokenURI, tokenIds);
  }

  /**
  * @dev _baseURI overrides the OpenZeppelin's ERC721 implementation which by default
  * returned an empty string for the baseURI
  */
  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  /**
  * @dev setPaused makes  the contract paused or unpaused
  */
  function setPaused(bool val) public onlyOwner {
    _paused = val;
  }

  /**
  * @dev withdraw sends all the ether in the contract
  * to the owner of the contract
  */
  function withdraw() public onlyOwner {
    address _owner = owner();
    uint256 amount = address(this).balance;
    (bool sent, ) = _owner.call{ value: amount }("");
    require(sent, "failed to send ether");
  }

  // function to receive Ether, msg.data must be empty
  receive() external payable {}

  // fallback function is called when msg.data is not empty
  fallback() external payable {}
}