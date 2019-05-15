module.exports = {
  siteMetadata: {
    title: 'Steven Peng - Code by Pen',
    author: 'Steven Peng',
    description: 'A Personal site build by Gatsby.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Steven Peng',
        short_name: 'SP',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
