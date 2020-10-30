import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>
        Oh no, you're lost!
      </h1>
      <h2>
        But that's OK. Go back <Link to="/">home</Link> and let Alex take you to where you really want to go!
      </h2>
      <Link 
        to="/contact" className="button">
        Start planning now!
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage;
