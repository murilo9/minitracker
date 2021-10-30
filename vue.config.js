module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  },
  transpileDependencies: [
    'vuetify',
  ],
};
