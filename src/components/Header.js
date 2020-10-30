import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';
import avatar from '../assets/images/ART-logo1.png';

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="Alex Raymond Travels" />
      </a>
      <h2>
        <strong>Guiding the globally curious with curated itineraries and bespoke experiences.</strong>
      </h2>

      <ul className="actions">
          <li>
            <Link to="/contact" className="btn-header">
              Start planning now!
            </Link>
          </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="https://www.instagram.com/alexraymondtravels/" target="blank" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/alexraymondtravels" target="blank" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        {/* <li>
          <a href="https://www.epperlytravel.com/" target="blank" className="icon fa-suitcase">
            <span className="label">Epperly Travel</span>
          </a>
        </li> */}
        <li>
          <a href="mailto:alex@epperlytravel.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </div>
    <Footer />
  </header>
)

export default Header;
