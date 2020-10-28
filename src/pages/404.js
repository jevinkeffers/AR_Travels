import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>
        Oh no, you're lost!
      </h1>
      <h2>
        But that's OK. Go back <a href="https://www.alextravels.com" target="_blank">home</a> and let Alex take you to where you really want to go!
      </h2>
    </div>
  </Layout>
)

export default NotFoundPage;
