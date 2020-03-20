/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'FancyLab - HTML templates',
    titleTemplate: 'FancyLab - HTML templates | %s',
    description: 'HTML templates',
    twitterUsername: '',
    image: '',
    siteUrl: 'https://fancylab.xyz'
  },
  plugins: [
    { resolve: 'gatsby-plugin-sass' },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-158373129-1",
        pageTransitionDelay: 0,
      }
    },
    { resolve: 'gatsby-plugin-sitemap' },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: `#bd93f9`,
        showSpinner: false,
      }
    },
    { resolve: 'gatsby-plugin-react-helmet'}
  ]
  
}
