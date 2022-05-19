import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'


const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

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

        <select value={theme} onChange={e => setTheme(e.target.value)} data-test-id='theme-selector'>
        <option value="system">System</option>
        {mounted && (
          <>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </>
        )}
      </select>
      </main>
    </div>
  )
}

export default Home
