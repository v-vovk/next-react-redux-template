import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchPosts } from '../../redux/actions/postsActions'

const Posts = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className='container'>
      <Head>
        <title>Posts page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>Posts Page</h1>
        {posts &&
          posts.map((post) => {
            return (
              <Link href='/posts/[id]' as={`/posts/${post}`} key={post}>
                <a style={{ color: 'red' }}>
                  <h1>{post}</h1>
                </a>
              </Link>
            )
          })}
      </main>
    </div>
  )
}

export default Posts
