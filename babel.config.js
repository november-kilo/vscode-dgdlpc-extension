module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }]
  ],
  ignore: [
    'generate-hover-json.js',
    'generate-kfun-json.js',
    'generate-lpc-parser.js'
  ]
};
