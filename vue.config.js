module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/minitracker/'
    : '/',
  transpileDependencies: [
    'vuetify',
  ],
};
