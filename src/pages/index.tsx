import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 className='text-blue-700'>
            Hello world
          </h1>
        </div>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  )
}

export default Home
