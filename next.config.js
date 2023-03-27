const path = require("path")

module.exports = {
  sassOptions:{
    includePaths: [path.join(__dirname, "./src/scss")]
  },
  images: {
    domains: [
      "i.imgur.com"
    ]
  }
}