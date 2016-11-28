import config from '../config/environment';

export function initialize() {
  if (config.EmberENV.environment) {
    Raven.config('https://4b60c9f39a844832956f840b9d0d1359@sentry.io/99479').install();
  }
}

export default {
  name: 'enable-sentry',
  initialize
};
