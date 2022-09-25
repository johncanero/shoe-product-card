import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
          <title>Shoe Product</title>
          <meta name="description" content="Shoe Product" />
          <meta itemprop="name" content="Shoe Card" />
          <meta itemprop="description" content="Shoe Product Card created with Next JS and Tailwind CSS" />
          <meta itemprop="image" content="Shoe Card Feature" />
          <link rel="icon" href="/favicon.ico" />     
      </Head>

      <main>
          <h1>Hello World</h1>
      </main>

      <footer>
      
      </footer>
    </div>
  )
}
