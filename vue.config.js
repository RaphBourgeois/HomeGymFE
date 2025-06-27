const { defineConfig } = require('@vue/cli-service')
/* module.exports = defineConfig({
    transpileDependencies: true
}) */
    
    module.exports ={
  devServer: {
    proxy: {
      '/api': {
        target: 'https://homegymbe.onrender.com/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
};  
