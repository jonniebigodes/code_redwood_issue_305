import { Link, routes } from '@redwoodjs/router'

// original code
/* export const QUERY = gql`
  query {
    blogPosts {
      id
    }
  }
` */
export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

/* export const Success = ({ posts }) => {
  return JSON.stringify(posts,null,2)
}
 */
/* export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article key={post.id}>
      <header>
        <h2>{post.title}</h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
    </article>
  ))
} */

import BlogPost from 'src/components/BlogPost'
export const Success = ({ posts }) => {
  return posts.map((post) => <BlogPost key={post.id} post={post} />)
}
