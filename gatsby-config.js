const dotenv = require('dotenv')

if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: 'Alex Raymond Travels',
    author: 'Kevin Jeffers',
    description: 'Alex Raymond is a travel advisor based out of Atlanta, Ga.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `puzw3igulaqs`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
}