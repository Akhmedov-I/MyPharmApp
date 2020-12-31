import MainLayout from '../components/mainLayout.js';
import Signin from './signin/signin.js';
// import MainLayout from '../components/mainLayout.js';
import Head from 'next/head'






export default function Home() {

  return (
    <div>
      <MainLayout>
        <Signin></Signin>
      </MainLayout>
    </div>
      
  )
}
