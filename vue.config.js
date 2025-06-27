const { defineConfig } = require('@vue/cli-service')
/* module.exports = defineConfig({
    transpileDependencies: true
}) */
    
    module.exports ={
        transpileDependencies: true,
        {
          devServer: {
            proxy: {
              '/api': {
                target: 'your backend url',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
              }
            }
          }
        }; 

    }
