module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/minitracker/'
    : '/',
  transpileDependencies: [
    'vuetify',
  ],
};
