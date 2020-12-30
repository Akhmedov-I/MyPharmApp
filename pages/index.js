import React, { useState } from 'react';
import Heading from './_documents';
import styles from '../styles/Home.module.css';
import Signin from '../components/signin/signin.js';






export default function Home() {
  const [signer, setSigner] = useState(false)
  
  const Router= (params)=> {
    setSigner(true)
  }


  return (
    <div className={styles.container}>
      <Heading></Heading>
      { signer === false
      ? <Signin Router={Router}></Signin>
      : <div>
        <h1>Hello</h1>
      </div>
      }



      
    </div>
  )
}
