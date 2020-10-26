import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.instagram.com/alexraymondtravels/" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/alexraymondtravels" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.epperlytravel.com/" className="icon fa-suitcase">
            <span className="label">Epperly Travel</span>
          </a>
        </li>
        <li>
          <a href="mailto:alex@epperlytravel.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Photo by: Alex from Bermuda</li>
        <li>
          Design by: <a href="http://kevinjeffers.me">Kevin Jeffers</a> with help from <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
