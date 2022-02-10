import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Contract, providers, utils } from 'ethers';
import Web3Modal from 'web3modal';
import { NFT_CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants';
import React, { useEffect, useState, useRef } from 'react';

export default function Home() {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // presaleStarted keeps track of whether the presale has started or not
  const [presaleStarted, setPresaleStarted] = useState(false);
  // presaleEnded keeps track of whether the presale ended
  const [presaleEnded, setPresaleEnded] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  // checks if the currently connected MetaMask wallet is the owner of the contract
  const [isOwner, setIsOwner] = useState(false);
  // tokenIdsMinted keeps track of the number of tokenIds that have been minted
  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");
  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();
  const abi = CONTRACT_ABI.abi;

  useEffect(async () => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: 'rinkeby',
        providerOptions: {},
        disableInjectedProvider: false
      })
    }
    connectWallet();

    // check if presale has started and ended
    const _presaleStarted = await checkIfPresaleStarted();
    if (_presaleStarted) {
      checkIfPresaleEnded();
    }

    getOwner();
    getTokenIdsMinted();
  }, []);

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // throw an error if user is not connected to Rinkeby network
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert('not connected to Rinkeby');
      throw new Error("not connected to Rinkeby");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  }

  const presaleMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const cryptodevsContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        abi,
        signer
      )
      let tx = await cryptodevsContract.presaleMint({
        value: utils.parseEther("0.01")
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert("Congrats ser, you successfully minted Crypto Devs in the presale!");
    } catch (err) {
      console.log(err);
    }
  }

  const publicMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const cryptodevsContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        abi,
        signer
      )
      let tx = await cryptodevsContract.mint({
        value: utils.parseEther("0.01")
      })
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert("successfuly minted Crypto Devs!");
    } catch (err) {
      console.log(err);
    }
  }

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.log(err);
    }
  }

  const startPresale = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const cryptodevsContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        abi,
        signer
      )

      let tx = await cryptodevsContract.startPresale();
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert("presale has started!");
      setPresaleStarted(true);
    } catch (err) {
      console.log(err);
    }
  }

  const checkIfPresaleStarted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const cryptodevsContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        abi,
        provider
      )
      let _presaleStarted = await cryptodevsContract.presaleStarted();
      console.log("presale started: ", _presaleStarted);
      setPresaleStarted(_presaleStarted);
      return _presaleStarted;
    } catch (err) {
      console.log(err);
    }
  }

  const checkIfPresaleEnded = async () => {
    try {
      const provider = await getProviderOrSigner();
      const cryptodevsContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        abi,
        provider
      )
      let _presaleEndedTime = await cryptodevsContract.presaleEnded();
      const hasEnded = _presaleEndedTime.lt(Math.floor(Date.now() / 1000));
      console.log('presale ended: ', hasEnded);

      if (hasEnded) {
        setPresaleEnded(true);
      } else {
        setPresaleEnded(false);
      }
      return hasEnded;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const getOwner = async () => {
    try {
      const provider = await getProviderOrSigner();
      const cryptodevsContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        abi,
        provider
      );
      const _owner = await cryptodevsContract.owner();
      const signer = await getProviderOrSigner(true);
      const currentAddress = await signer.getAddress();

      const _isOwner = currentAddress.toLowerCase() == _owner.toLowerCase();
      console.log("is owner: ", _isOwner);
      if (_isOwner) {
        setIsOwner(true);
      }
    } catch (err) {
      console.log(err);
      setIsOwner(false);
    }
  }

  const getTokenIdsMinted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const cryptodevsContract = new Contract(
        NFT_CONTRACT_ADDRESS,
        abi,
        provider
      )
      let _totalMinted = await cryptodevsContract.tokenIds();
      console.log("total minted: ", _totalMinted.toNumber());
      setTokenIdsMinted(_totalMinted.toNumber());
    } catch (err) {
      console.log(err);
    }
  }

  const renderButton = () => {
    // If wallet is not connected, return a button which allows them to connect their wllet
    if (!walletConnected) {
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      );
    }

    // If we are currently waiting for something, return a loading button
    if (loading) {
      return <button className={styles.button}>Loading...</button>;
    }

    // If connected user is the owner, and presale hasnt started yet, allow them to start the presale
    if (isOwner && !presaleStarted) {
      return (
        <button className={styles.button} onClick={startPresale}>
          Start Presale!
        </button>
      );
    }

    // If connected user is not the owner but presale hasn't started yet, tell them that
    if (!presaleStarted) {
      return (
        <div>
          <div className={styles.description}>Presale hasnt started!</div>
        </div>
      );
    }

    // If presale started, but hasn't ended yet, allow for minting during the presale period
    if (presaleStarted && !presaleEnded) {
      return (
        <div>
          <div className={styles.description}>
            Presale has started!!! If your address is whitelisted, Mint a
            Crypto Dev 🥳
          </div>
          <button className={styles.button} onClick={presaleMint}>
            Presale Mint 🚀
          </button>
        </div>
      );
    }

    // If presale started and has ended, its time for public minting
    if (presaleStarted && presaleEnded) {
      return (
        <button className={styles.button} onClick={publicMint}>
          Public Mint 🚀
        </button>
      );
    }

  }

  return (
    <div>
      <Head>
        <title>Crypto Devs</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>
            Its an NFT collection for developers in Crypto.
          </div>
          <div className={styles.description}>
            {tokenIdsMinted}/20 have been minted
          </div>
          {renderButton()}
        </div>
        <div>
          <img className={styles.image} src="./cryptodevs/0.svg" />
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </div>
  )
}
