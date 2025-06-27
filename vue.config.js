const { defineConfig } = require('@vue/cli-service')
/* module.exports = defineConfig({
    transpileDependencies: true
}) */
    
    module.exports ={
        transpileDependencies: true,
        devServer: {
            allowedHosts: [
                '100.100.213.115',
                '.ts.net',
                '.myapp.com',
                'https://homegymfe.netlify.app/'
            ]
          }

    }
