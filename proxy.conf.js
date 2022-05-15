const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://4dk7fn8v.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;