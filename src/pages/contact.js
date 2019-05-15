import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Contact = props => (
  <Layout>
    <Helmet>
      <title>Contact - Code by Pen</title>
      <meta name="description" content="Contact Page" />
    </Helmet>

    {/* <BannerLanding title="Contact" /> */}

    <div id="main">
      <div className="inner">
        <header className="major">
          <h1>Contact</h1>
        </header>
        <p>
          You can find me on <a href="https://twitter.com/pentwo">twitter</a>,{' '}
          <a href="https://github.com/pentwo">github</a> and{' '}
          <a href="https://www.linkedin.com/in/po-chin-peng-b8206870/">
            Linkedin
          </a>
          .
        </p>
        <p>
          Feel free to contact me through the email below. I would love to chat
          with you.
        </p>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope" />
              <h3>Email</h3>
              <a href="mailto:hello@stevenpeng.com.au">
                hello@stevenpeng.com.au
              </a>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
)

export default Contact
