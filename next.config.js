// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old',            // Source URL (old page)
        destination: '/new',       // Destination URL (new page)
        permanent: true,           // 301 redirect
      },
    ]
  },
}
