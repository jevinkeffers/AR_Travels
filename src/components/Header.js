import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/ART-logo1.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="Alex Raymond Travels" />
      </a>
      <h1>
        <strong>The art of discovery ...</strong>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header;
