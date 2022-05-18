import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Error404: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Hateful Society</title>
        <meta name="description" content="The Hateful Society" />
        <link rel="icon" href="/ths.svg" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Can't find something that hasn't been built yet.
        </p>

        <h2 className={styles.backbutton}>
          <Link href="/">
           <a>The Hateful Society</a>
          </Link>
        </h2>
      </main>
    </div>
  )
}

export default Error404
