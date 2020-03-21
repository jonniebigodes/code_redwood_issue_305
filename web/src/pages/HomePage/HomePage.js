/* const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>Find me in ./web\src\pages\HomePage\HomePage.js</p>
    </div>
  )
} */

/* import BlogLayout from 'src/layouts/BlogLayout/BlogLayout' */
/* import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home</main>
    </>
  )
} */

/* const HomePage = () => {
  return <BlogLayout>Home</BlogLayout>
} */

import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
