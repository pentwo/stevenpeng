import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>SP</strong> <span>Steven Peng</span>
    </Link>
    <nav>
      <Link to="/about">ABOUT</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
