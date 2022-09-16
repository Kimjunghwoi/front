import '../styles/globals.css'
import React, {Component} from 'react';
import type {AppProps} from 'next/app'
import styles from "../styles/Home.module.css";
import CreateHead from "./layout/head";
import ResponsiveAppBar from "./layout/top";
import Image from "next/image";

declare global {
  interface Window {
    naver: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <div className={styles.container}>
        <CreateHead/>

        <main className={styles.main}>
          <ResponsiveAppBar/>

          <Component {...pageProps} />

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

export default MyApp
