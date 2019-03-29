const PROXY_IP = 'http://129.204.93.232:3000';

module.exports = {
  devServer: {
    proxy: {
      '/root': {
        target: PROXY_IP,
        secure: true,
        pathRewrite: {
          '^/root': ''
        }
      },
      '/index': {
        target: PROXY_IP,
        secure: true
      }
    }
  }
};
