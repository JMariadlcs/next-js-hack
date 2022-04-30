import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useWeb3Contract } from "react-moralis"; // use functions from Moralis
import { abi } from "../constants/abi"; // we import ABI

export default function Home() {
  const {runContractFunction}  = useWeb3Contract({
    abi: abi,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // your contract address here
    functionName: "store",
    params: {
      _favoriteNumber: 42,
    },
  });


  return (
    <div className={styles.container}>
      <button onClick={() => runContractFunction()}>Store778</button>
      HELLO FROM INDEX
    </div>
  );
}
