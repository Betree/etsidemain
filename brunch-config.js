exports.files = {
  javascripts: {joinTo: {
    'vendor.js': /^(?!app)/,
    'app.js': /^app/
  }},
  stylesheets: {joinTo: 'app.css'}
}

exports.plugins = {
  babel: {
      presets: ['env', 'react'],
      plugins: ["inline-json-import", "transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread"]
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