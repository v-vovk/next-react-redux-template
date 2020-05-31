import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <Link href='/posts'>
          <a style={{ color: 'red' }}>
            <h2>Posts page</h2>
          </a>
        </Link>
      </main>
    </div>
  )
}
