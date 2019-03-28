const PROXY_IP = 'http://129.204.93.232:3000';

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: PROXY_IP,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/index': {
        target: PROXY_IP
      }
    }
  }
};
