import React from 'react';
import { Link } from 'gatsby';
// import Helmet from 'react-helmet';
// import Gallery from '../components/Gallery';
import Layout from '../components/layout';
import Form from '../components/contactForm';

const About = () => (
    <Layout>
        <div id="main">
            <h1>
                About Alex Raymond
            </h1>
            <h2>
                But that's OK. Go back <Link to="/">home</Link> and let Alex take you to where you really want to go!
            </h2>
            <Link 
                to="/contact" className="button">
                Start planning now!
            </Link>
        </div>
        <div>
        <h2>Get In Touch!</h2>
        <p>
            Fill out your info below, and soon we'll start planning your dream vacation!
        </p>
        <form>
            <Form />
        </form>
        </div>
    </Layout>
)


export default About;