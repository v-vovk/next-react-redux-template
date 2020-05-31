import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='container'>
      <Head>
        <title>{id} page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>{id} Page</h1>
        <p onClick={() => router.back()} style={{ color: 'red' }}>
          back to posts page
        </p>
        <Link href='/'>
          <a style={{ color: 'red' }}>Home</a>
        </Link>
      </main>
    </div>
  )
}

export default Post
