import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Gallery from '../components/Gallery';
import Layout from '../components/layout';

const HomeIndex = () => {
  const siteTitle = 'Alex Raymond Travels';
  const siteDescription = 'Travel agency Atlanta — Alex Raymond Travels'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            Guiding the globally curious with curated itineraries and bespoke experiences.
            </h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia
          </p>
          <ul className="actions">
            <li>
              <Link to="/contact" className="button">
                Start planning now!
              </Link>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>From Alex's Newsletter</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <Link to="/blog" className="button">
                Read more
              </Link>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch!</h2>
          <p>
            The best way to reach Alex is by email, but she's also available by phone or ask for her by name from her colleagues at <a href="https://www.epperlytravel.com/">Epperly Travel</a>. Fill out your info below and Alex will get back to you!
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Epperly Travel</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  <a href="tel:678-358-5759">678-358-5759</a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:alex@epperlytravel.com">alex@epperlytravel.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex;
