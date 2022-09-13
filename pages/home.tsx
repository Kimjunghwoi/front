import type { NextPage } from 'next'
import React from 'react'
import ReactDom from 'react-dom'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from './Counter'
import Link from "next/link";

const Home: NextPage = () => {

  let location;
  let windowTest;

  if (process.browser) {
    location = document.location;
    windowTest = window.location.href;

    ReactDom.render(<Counter name="React"/>, document.getElementById("app"))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="JPA SHOP FRONT" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <Link href={'/'}>
            JPA SHOP HOME
          </Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <div id="app"></div>
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

export default Home
