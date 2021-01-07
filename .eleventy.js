const fs = require('fs')

// adds markdown support for furigana
let markdownIt = require('markdown-it')
let markdownItOptions = {
  html: true,
  typographer: true,
}
let markdownItFurigana = require('furigana-markdown-it')({
  fallbackParens: '()',
  extraSeparators: '-',
  extraCombinators: "'",
})
let markdownLib = markdownIt(markdownItOptions).use(markdownItFurigana)

const socialImages = require("@11tyrocks/eleventy-plugin-social-images");


module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('md', markdownLib)

  eleventyConfig.addPlugin(socialImages);

  // make a custom alphabetically sorted collection of all content
  eleventyConfig.addCollection('allSortAlpha', function (collectionApi) {
    return collectionApi.getAll().sort(function (a, b) {
      return b.url - a.url
    })
  })

  // configure Browsersync to handle 404 routing when using eleventy --serve
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html')
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  // return 11ty Config object (optional)
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['html', 'md', 'njk'],
    passthroughFileCopy: true,
  }
}
