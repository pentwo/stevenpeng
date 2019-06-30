import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import website01 from '../assets/images/website01.jpeg'
import website02 from '../assets/images/website02.jpeg'
import website03 from '../assets/images/website03.jpeg'

const Project = props => (
  <div className="inner">
    <header className="major">
      <h2>{props.title}</h2>
    </header>
    <div className="grid-wrapper">
      <div className="col-6">
        <ul>
          {props.intro.map((item,index) => {
            return <li key={`intro-${index}`}>{item}</li>
          })}
        </ul>
        <ul className="actions">
          <li>
            <a href={`${props.link}`} className="button next">
              Go to website
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <span className="image fit">
          <img src={props.websiteShot} alt={props.title} />
        </span>
      </div>
    </div>
  </div>
)


const About = props => (
  <Layout>
    <Helmet>
      <title>Projects - Steven Peng</title>
      <meta name="description" content="Projects Page" />
    </Helmet>

    <div id="main">
      <div className="inner">
      <header className="major">
            <h1>Projects</h1>
          </header>
      </div>
      <Project
            title="iCare Remedial Massage"
            intro={["Build this site from scratch using Bulma CSS framework", "Implement Google analytics, Google map widgets", "Custom JavaScript animation"]}
            link="https://www.icareremedialmassage.com/"
            websiteShot={website01}

        />
      <Project
            title="Wu’s Day Spa n Massage"
            intro={["Wordpress sites: apply theme, create pages and modify as client requested.", "Implement 3rd party plugin into website"]}
            link="https://www.wusdayspanmassage.com.au/"
            websiteShot={website02}

        />
        <Project
            title="QB10 Hair Salon"
            intro={["Wordpress sites: apply theme, create pages and modify as client requested.", "Implement 3rd party plugin into website"]}
            link="https://www.qb10hairsalon.com.au/"
            websiteShot={website03}
        />

    </div>
  </Layout>
)

export default About


