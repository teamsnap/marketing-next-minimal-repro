module.exports = {
  target: 'serverless',
  images: {
    domains: ['blog.teamsnap.com', 'tsblogadmin.teamsnap.com'],
  },
  optimizeFonts: false,
  future: {
    webpack5: true,
  },
};
