module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/styblope/Instana-1-Day-Partner-Workshop',
          subDirectory: '/',
        },
      },
    },
  ],
  pathPrefix: "/Instana-1-Day-Partner-Workshop",
};
