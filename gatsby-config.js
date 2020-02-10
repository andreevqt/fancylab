/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'FancyLab',
    titleTemplate: '',
    description: 'Html templates',
    twitterUsername: '',
    image: '',
    url: 'https://fancylab.xyz'
  },
  pathPrefix: "/website",
  assetPrefix: '/website',
  plugins: [
    { resolve: 'gatsby-plugin-sass' },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
