export function initialize(application) {
  application.inject('route', 'router', 'router:main');
  application.inject('component', 'router', 'router:main');
}

export default {
  name: 'router',
  initialize
};
