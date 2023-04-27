import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="bg-beige h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Mischief Town</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <h1>Concept</h1>
        <br /> <br /> <br />
        <h1>Theme</h1>
        <br /> <br /> <br />
        <h1>Instructions and roles</h1>

      </div>
    </div>

  )
}
