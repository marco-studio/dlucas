module.exports = {
  siteMetadata: {
    title: `Dlucas Podcast`,
    description: `Taking a different approach to the Barber industry, Dlucs has built his following and business through social media, and the belief of staying authentic throughout the whole process, no matter how unfiltered he gets. Taking a dive into the barber industry and his views on social media, business, personal growth, and how you can be better in all those subjects.`,
    author: `Daniel Contreras`,
    twitter: ``,
    instagram: `https://www.instagram.com/dlucs_/`,
    facebook: `https://www.facebook.com/DlucsProducts/`,
    youtube: `https://www.youtube.com/channel/UCnzlL_vQx7mACn1IpjAbdDA?view_as=subscriber`,
    apple: `https://podcasts.apple.com/podcast/id1450221733?ct=podlink&mt=2`,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9kbHVjcy5saWJzeW4uY29tL3Jzcw==`,
    pocket: `https://pca.st/itunes/1450221733`,
    spotify: `https://open.spotify.com/show/0xN54FyBI4sPVkez8uSsUu`,
    overcast: `https://overcast.fm/itunes1450221733`,
    castbox: `https://castbox.fm/vic/1450221733`,
    castro: `https://castro.fm/itunes/1450221733`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Fdlucs.libsyn.com%2Frss`,
    stitcher: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://dlucs.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
