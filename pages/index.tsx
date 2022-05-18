import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Hateful Society</title>
        <meta name="description" content="The Hateful Society" />
        <link rel="icon" href="/ths.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>The Hateful Society</p>
        </h1>

        <h2 className={styles.secondary}>
          <Link href="/store">
           <a>Store</a>
          </Link>
        </h2>

        <p className={styles.description}>
          Not coming soon.
        </p>
      </main>
    </div>
  )
}

export default Home
