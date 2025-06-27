const { defineConfig } = require('@vue/cli-service')
/* module.exports = defineConfig({
    transpileDependencies: true
}) */
    
    module.exports ={
  server: {
    proxy: {
      // Proxy all requests starting with `/api` to your Laravel backend
      '/api': {
        target: 'https://homegymbe.onrender.com:5000', // Your Laravel backend URL
        changeOrigin: true, // Needed for virtual hosted sites
        secure: true, // If you're using HTTPS, set this to true
        // Remove the rewrite function to preserve the `/api` prefix
      },
    },
    
  }
};
