
function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

function stripCharBeforeApi(url) {

  if (url && url.indexOf && url.indexOf('/api/') >= 0) {
    const position = getPosition(url, '/', 3);
    const urlBase = url.substring(0, position);
    const urlSuffix = url.substring(position, url.length);
    if (urlSuffix.indexOf('/api/') !== 0) {
      const cleanedSuffix = urlSuffix.substring(urlSuffix.indexOf('/api/'));
      return urlBase + cleanedSuffix;
    }
  }

  return url;
}

export function initialize(/* application */) {
  $.ajaxPrefilter( function(options) {
    // Always add "?debug=1" to every URL
    // options.url += (options.url.indexOf("?") < 0 ? : "?" : "&") + "debug=1";
    options.url = stripCharBeforeApi(options.url);
  });
}

export default {
  name: 'ajax-prefilter',
  initialize
};
