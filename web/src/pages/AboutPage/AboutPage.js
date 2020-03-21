/* const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <p>Find me in ./web\src\pages\AboutPage\AboutPage.js</p>
    </div>
  )
} */

/*

const AboutPage = () => {
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
      <main>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </>
  )
} */
import { Link, routes } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
const AboutPage = () => {
  return (
    <BlogLayout>
      <p>
        {' '}
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
    </BlogLayout>
  )
}
export default AboutPage
