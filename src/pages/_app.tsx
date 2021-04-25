import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Asim Khan - Visual & UI Designer</title>
        <link rel="icon" href={require('images/favicon.ico')} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
