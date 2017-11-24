exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
}

exports.plugins = {
  babel: {
      presets: ['env', 'react'],
      plugins: ["transform-decorators-legacy", "transform-class-properties"]
    },
  sass: {
    mode: 'native',
    options: {
      includePaths: ["node_modules"]
    }
  },
}