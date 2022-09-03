import Head from 'next/head'
import Image from 'next/image'


import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner, Navigation, Skills, Projects, Contact } from '../components';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div >
      <header>
        <Navigation />
      </header>

      <main >
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer >

      </footer>
    </div>
  )
}

