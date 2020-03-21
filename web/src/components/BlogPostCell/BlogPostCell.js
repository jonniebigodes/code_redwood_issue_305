import BlogPost from 'src/components/BlogPost'

/* export const QUERY = gql`
  query {
    blogPost {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ blogPost }) => {
  return JSON.stringify(blogPost)
}
 */
export const QUERY = gql`
  query($id: Int!) {
    post(id: $id) {
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

/* export const Success = ({ post }) => {
  return JSON.stringify(post)
}
 */
export const Success = ({ post }) => {
  return <BlogPost post={post} />
}
