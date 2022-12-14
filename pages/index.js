import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import Login from '../components/login/Login'

export default function Home() {
  const [stateDelay,setStateDelay] = useState(false)
  React.useLayoutEffect(()=>{
    setStateDelay(true)
  },[])
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {stateDelay && <Login />}
    </div>
  )
}
