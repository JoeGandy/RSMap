const siteUrl = "https://map.rsclues.com/"

module.exports = {
	siteMetadata: {
		siteUrl
	},
    plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-49984946-3"
			},
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {},
				allPageHeaders: [],
				mergeSecurityHeaders: true,
				mergeLinkHeaders: true,
				mergeCachingHeaders: true,
				transformHeaders: (headers, path) => headers,
				generateMatchPathRewrites: true,
			},
		},
		{
		resolve: `gatsby-plugin-netlify-headers`,
			options: {
				headers: {},
				allPageHeaders: [],
				mergeSecurityHeaders: true,
				mergeLinkHeaders: true,
				mergeCachingHeaders: true, 
				transformHeaders: (headers, path) => headers,
				generateMatchPathRewrites: true,
			},
		},
	    {
			resolve: `gatsby-plugin-manifest`,
				options: {
					name: "RSMap - OSRS Map",
					short_name: "RSMap",
					start_url: "/",
					background_color: "#1d1b15",
					theme_color: "#dcbf8c",
					display: "standalone",
					icon: "static/favicon.png"
			},
	    },
	    {
	    resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./static/favicon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
	    },
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: true,
				stripMetadata: true,
			},
		},
        `gatsby-plugin-sass`,
        `gatsby-plugin-offline`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-headers`,
        `gatsby-plugin-robots-txt`
    ],
}