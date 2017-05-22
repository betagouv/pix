/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

/* postcss plugins */

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // To start using async / await in your Ember
    // XXX https://karolgalanciak.com/blog/2015/12/18/ember-and-es7-async-slash-await/
    'ember-cli-babel': {
      includePolyfill: true
    },

    autoprefixer: {
      browsers: ['last 2 versions'],
      cascade: false
    },

    sassOptions: {}

  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/js-yaml/dist/js-yaml.js');
  app.import('bower_components/lodash/dist/lodash.js');

  if (app.env !== 'test') {
    // css animations
    app.import({
      development: 'bower_components/animate.css/animate.css',
      production: 'bower_components/animate.css/animate.min.css'
    });

    app.import({
      development: 'bower_components/loaders.css/loaders.css',
      production: 'bower_components/loaders.css/loaders.min.css'
    });

    app.import('bower_components/raven-js/dist/raven.js');
    app.import('bower_components/raven-js/dist/plugins/ember.js');
  }

  return app.toTree();
};
