module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/netflix-layout/'
    : '/',

    transpileDependencies: [
      'vuetify'
    ]
}
