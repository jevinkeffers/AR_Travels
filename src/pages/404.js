import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>Oh no, you're lost!</h1>
      <p>But that's OK. Go back home and let Alex take you to where you really want to go!</p>
    </div>
  </Layout>
)

export default NotFoundPage;
