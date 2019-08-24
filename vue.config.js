//Adding Markdown Loader
const marked = require("marked");
const renderer = new marked.Renderer();
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('markdown')
        .test(/\.md$/)
        .use('html-loader')
        .loader('html-loader')
        .end()
        .use('markdown-loader')
          .loader('markdown-loader')
          .tap(()=>{
            return {
                pendantic: true,
                renderer
            }
          })
          .end()
    }
  }
  