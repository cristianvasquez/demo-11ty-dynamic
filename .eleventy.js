const config = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('**/*.jpg')
  eleventyConfig.addPassthroughCopy('**/*.pdf')
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false, strictFilters: false
  })

  eleventyConfig.addFilter("stringify", function (value) {
    return JSON.stringify(value, null, 2);
  });

  return {
    useGitIgnore: false, dir: {
      input: 'src',
      output: 'output',
      layouts: 'layouts',
      includes: 'includes',
      data: 'config'
    }, passthroughFileCopy: true
  }
}

module.exports = config
