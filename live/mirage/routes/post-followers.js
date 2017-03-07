import follower from '../data/followers';

export default function (schema, request) {
  /* eslint-disable */
  console.log('POST on api/followers with requestBody- - - - - - - - - - - - - - - - - - - - ', request.requestBody);
  /* eslint-enable */

  return follower;
}
