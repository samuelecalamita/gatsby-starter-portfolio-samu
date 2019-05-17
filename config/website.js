const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Samuele Calamita - Portfolio", // Navigation and Site Title
  siteTitleAlt: "Samuele Calamita", // Alternative Site title for SEO
  siteTitleShort: "Samu", // short_name for manifest
  siteHeadline: "Samuele Calamita Frontend Berlin", // Headline for schema.org JSONLD
  siteUrl: "https://quirky-jang-07dbfa.netlify.com/", // Domain of your site. No trailing slash!
  siteLanguage: "de", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Fronted Developer Entwickler Berlin",
  author: "Samuele Calamita", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@cara", // Twitter Username
  ogSiteName: "cara", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-47519312-5",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
