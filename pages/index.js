import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchPosts } from '../redux/actions/postsActions'

export default function Home() {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

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
        {posts &&
          posts.map((post) => {
            return <h1 key={post}>{post}</h1>
          })}
      </main>
    </div>
  )
}
