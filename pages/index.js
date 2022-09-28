import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
          <title>Shoe Product</title>
          <meta name="description" content="Shoe Product" />
          <meta itemprop="name" content="Shoe Card" />
          <meta itemprop="description" content="Shoe Product Card created with Next JS and Tailwind CSS" />
          <meta itemprop="image" content="Shoe Card Feature" />
          <link rel="icon" href="/images/nikeLogo.png" />     
      </Head>

      <main>
          <Navbar />
          <Card />
      </main>

      <footer>
          <Footer />
      </footer>
    </div>
  )
}
