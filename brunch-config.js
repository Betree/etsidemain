exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
}

exports.plugins = {
  babel: {
      presets: ['env', 'react'],
      plugins: ["inline-json-import", "transform-decorators-legacy", "transform-class-properties"]
    },
  sass: {
    mode: 'native',
    options: {
      includePaths: ["node_modules"]
    }
  },
  copycat: {
    "fonts": ["node_modules/font-awesome/fonts"]
  }
}