import '../styles/globals.css'
import React, {Component, useEffect} from 'react';
import type { AppProps } from 'next/app'

declare global {
  interface Window {
    naver: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp
