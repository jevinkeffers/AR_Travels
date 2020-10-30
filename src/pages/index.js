import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Gallery from '../components/Gallery';
import Layout from '../components/layout';
import Form from '../components/contactForm';
// import Alex from "../images/alex-headshot.png";

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
        <section id="about">
          <header className="major">
            <h2>
              About Your Travel Advisor
            </h2>
          </header>
            {/* <img src={Alex} /> */}
            <p>
              Alex Raymond is a Travel Advisor with <a href="https://www.epperlytravel.com/" target="_blank">Epperly Travel</a>, a boutique agency and member of the Virtuoso Network dedicated to providing a modern approach to travel planning. Travel will always tell a story. As one of the purest forms of transformation, it provides wishful thinking, imagination, new experiences and new tastes.
            </p>
            <p>
              Whether you’re looking to step outside your comfort zone, embark on a romantic getaway or just hit pause on your fast-paced life, I create tailor-made vacations that can have an outlook-altering effect perfectly curated to your specific personality. With a background in public relations and client service, I understand the importance of building that unique relationship and really listening to the finest details of your tastes and interests in an effort to give you the most substantive and enriching experience any destination has to offer. 
            </p>
            <p>
              Travel is a gift, now more than ever, and sharing in the planning of trips that inspire others to embrace the unknown and seek adventure whenever possible will always be my passion.
            </p>
          <ul className="actions">
            <li>
              <Link to="/contact" className="button">
                Start planning now!
              </Link>
            </li>
          </ul>
        </section>


        <section id="process">
          <header className="major">
            <h2>
            The Process
            </h2>
          </header>
          <p>
            Planning and booking the trip is half the journey, and one that should be enjoyable and stress free. That’s where a trusted advisor comes in. Research takes precious time and, with the information overload you will undoubtedly find scouring the internet, planning a vacation can become completely overwhelming. Whether you’re looking to hot air balloon over sprawling vineyards, check the Great Wall of China off your bucket list or simply stroll the cobblestone streets of Saint Germain, I will work with you on a service-based approach resulting in a completely personalized getaway.
          </p>
          <ul>
            <li>
              The possibilities are endless, so let’s discover where you want to explore. I want to get to know you in a way that allows me to match you to the perfect destination, if you’re still undecided, or start sharing in the excitement of the idea you have been endlessly dreaming about. Once you paint the picture and we discuss all the possibilities, only then do you begin paying for the service. Services start at $100 per trip.
            </li>
            <li>
              We will work together to turn that idle wanderlust into a fully crafted itinerary while collaborating with top travel partners around the globe like hoteliers, tour operators and luxury cruise lines.
            </li>
            <li>
              You will review a final proposal of travel plans, from bookings and logistics to recommendations in the area. From there, you’ll provide feedback and after all your boxes are checked, the reservations can begin! Once confirmed, I provide all the necessary travel documents covering your unforgettable escape, so you can sit back and enjoy the anticipation that comes along with a fully booked vacation.
            </li>
            <li>
              Before departure, during travel and as you settle back home, I will serve as your advocate every step of the way. This means connecting with the suppliers on the ground to make sure your stay is extra special and VIP while adding value wherever possible and helping you navigate any unforeseen challenges.
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/contact" className="button">
                Start planning now!
              </Link>
            </li>
          </ul>
        </section>

        <section id="blog">
          <h2>From Alex's Newsletter</h2>
          <ul className="actions">
            <li>
              <Link to="/blog" className="button">
                Subscribe!
              </Link>
            </li>
          </ul>
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
            Fill out your info below, and soon we'll start planning your dream vacation!
          </p>
          <form>
            <Form />
          </form>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                {/* <li>
                  <h3 className="icon fa-home">
                    <span className="label">Epperly Travel</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li> */}
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
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex;