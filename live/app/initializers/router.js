import ENV from 'pix-live/config/environment';

// See http://stackoverflow.com/questions/18302463/get-current-route-name-in-ember
export function initialize(application) {
  application.inject('route', 'router', 'router:main');
  application.inject('component', 'router', 'router:main');

  // XXX : Small hack, huge reward : we can now assert in tests what is the content of outgoing requests.
  if (ENV.environment === 'test') {
    $( document ).ajaxComplete(function(event, xhr, settings) {
      if ('POST' === settings.type) {
        $('.last-post-request').remove();
        $('body').append('<div class="last-post-request"></div>');
        $('.last-post-request').append(`<div class="last-post-request-url">${settings.url}</div>`);
        $('.last-post-request').append(`<div class="last-post-request-body">${settings.data}</div>`);
      }
    });
  }

}

export default {
  name: 'router',
  initialize
};
