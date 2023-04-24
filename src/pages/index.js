import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (animation) {
        setAnimation(false);
      }
    }, 2000);
  }, [animation])

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Software developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={`${styles.content} ${styles.flex}`} data-testid="home">
        <div className="home-header">
          <h1
            className={
              animation
                ? `${styles.animation} ${styles.name}`
                : `${styles.name}`
            }
          >
            Daron Wiafe
          </h1>
          <p
            className={
              animation
                ? `${styles.animation} ${styles.subtext}`
                : `${styles.subtext}`
            }
          >
            Software developer
          </p>
          <p className={styles.msg}>
            Developing more than just your technical products
          </p>
        </div>
      </main>
    </>
  )
}
