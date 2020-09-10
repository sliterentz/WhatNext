module.exports = {
  head: {
    title: 'Simple todo app with Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Simple todo app with Nuxt.js.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    { src: 'tatodo-app-css/index.css' }
  ],
  router: {
    linkActiveClass: 'selected'
  }
}
