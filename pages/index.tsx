import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { Input } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import styles from '../styles/Home.module.css';
import { Introduction } from './Introduction'

const useStyles = makeStyles({
  Introduction:{
    backgroundColor:"#997111",
  }
});

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName]=useState<string>();
  const classes=useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div>
          <Button onClick={() => setCount(count + 1)}>クリックして追加</Button>
          <Button onClick={() => setCount(count - 1)}>クリックして減少</Button>
          <Input　onChange={(e)=> setName(e.target.value)}></Input>
          <div className={classes.Introduction}>
          <Introduction 
          name={name}
          age={count}
          />
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
