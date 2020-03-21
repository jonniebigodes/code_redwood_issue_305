/* const BlogPostPage = () => {
  return (
    <div>
      <h1>BlogPostPage</h1>
      <p>Find me in ./web\src\pages\BlogPostPage\BlogPostPage.js</p>
    </div>
  )
}

export default BlogPostPage
 */
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

/* const BlogPostPage = () => {
  return (
    <BlogLayout>
      <BlogPostCell />
    </BlogLayout>
  )
}
 */

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}
export default BlogPostPage
