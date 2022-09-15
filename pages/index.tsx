import type { NextPage } from 'next'
import React from 'react'
import ReactDom from 'react-dom'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Card} from "@mui/material";
import ResponsiveAppBar from "../pages/layout/top";
import CreateHead from "./layout/head";
import {maxWidth, styled} from "@mui/system";


const TopStyle = styled('div')({
  width: '100%'

})


const Home: NextPage = () => {



  return (

    <div className={styles.container}>
      <CreateHead/>

      <main className={styles.main}>
        <ResponsiveAppBar/>

        <p className={styles.description}>
          MAIN PAGE
          {/*<code className={styles.code}>pages/index.tsx</code>*/}
        </p>
        

        <div className={styles.grid}>
          {/*<Card variant={"outlined"} >*/}
          {/*  <Link href={'/api/member'} color="inherit">*/}
          {/*    <h2>Member Service &rarr; <br/>Create Member by OAuth</h2>*/}
          {/*  </Link>*/}
          {/*</Card>*/}


          {/*Link 안에 두 개이상의 html 태그는 먹히지 않으나 div 내의 html은 상관없음*/}
          <Link href="/member">
            <div className={styles.card} >
              <h2>Member &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Chat Room &rarr;</h2>
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
