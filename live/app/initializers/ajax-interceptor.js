import ENV from 'pix-live/config/environment';

export function initialize(/* application */) {
  // XXX : Small hack, huge reward : we can now assert in tests what is the content of outgoing requests.
  if (ENV.environment === 'test') {
    $( document ).ajaxComplete(function(event, xhr, settings) {
      if ('POST' === settings.type) {

        const url = '/api' + settings.url.split('api')[1];

        localStorage.setItem('miragePostUrl', JSON.stringify(
          {
            url: url,
            body: settings.data
          }
        ));
      }
    });
  }
}

export default {
  name: 'ajax-interceptor',
  initialize
};
