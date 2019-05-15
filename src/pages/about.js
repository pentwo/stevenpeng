import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import steven from '../assets/images/steven.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>About - Code by Pen</title>
      <meta name="description" content="About Page" />
    </Helmet>

    {/* <BannerLanding
      title="About"
      line1="Lorem ipsum dolor sit amet nullam consequat"
      line2="sed veroeros. tempus adipiscing nulla."
    /> */}

    <div id="main">
      <div className="inner">
        <header className="major">
          <h1>About</h1>
        </header>
        {/* <span className="image main">
          <img src={steven} alt="" />
        </span> */}
        <p>Hi, I'm Steven Peng.</p>
        <p>
          I'm a Junior Web Developer in Perth, Western Australia. Been working
          in different industry, the world of the web development is so
          ever-changing and full of possibility which fascinated me so much. I
          have been self-taught for 2 years and already accomplished a couple
          projects for clients.
        </p>
        <p>
          Please <Link to="/contact">contact me</Link> if you would like to know
          more about myself. I would love to chat with you.
        </p>
        <p>
          <h2>My Front-end development skills</h2>
          <ul>
            <h3>Website CMS</h3>
            <ul className="alt">
              <li>Wordpress</li>
              <li>Ghost</li>
              <li>Weebly, Wix and Squarespace</li>
            </ul>
            <h3>Language & Libraries</h3>
            <ul className="alt">
              <li>HTML5, PUG, Markdown</li>
              <li>CSS: SASS(SCSS), Bootstrap-like css framework</li>
              <li>Javascript: jQuery, React.js</li>
            </ul>
            <h3>Other Information Technology skills</h3>
            <ul className="alt">
              <li>Google Analytics, Google Firebase</li>
              <li>Responsive UI design and implement</li>
              <li>
                Domain name management, Web-hosting management, Self-management
                cloud services
              </li>
            </ul>
            <h3>Personality</h3>
            Flexible, fast learner, strong responsible, friendly, patient and
            enthusiastic.
          </ul>
        </p>
        <p />
      </div>
    </div>
  </Layout>
)

export default About
